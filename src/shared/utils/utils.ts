import { translate } from '@/i18n/translate';
import { ConflictException } from '@nestjs/common';
import {
  createCipheriv,
  createDecipheriv,
  createHash,
  randomBytes,
} from 'crypto';
import fs from 'fs';
import { join as pathJoin } from 'path';

function getLastTimestampPath(): string {
  return process.env.NODE_ENV === 'production'
    ? '/tmp/storeLastMessage.json'
    : pathJoin(process.cwd(), '/src/message/storeLastMessage.json');
}

export function getLastMessageTimestampFile(): string {
  const path = getLastTimestampPath();
  const doesFileExist = fs.existsSync(path);

  if (!doesFileExist) {
    fs.writeFileSync(path, '[]', 'utf8');
  }

  const file = fs.readFileSync(path, 'utf-8');

  return file;
}

export function writeToLastTimestampFile(data: unknown): void {
  const path = getLastTimestampPath();
  fs.writeFileSync(path, JSON.stringify(data), 'utf-8');
}

function getKeyFromSecret(secret: string): Buffer {
  // Convierte un string cualquiera en una clave de 32 bytes mediante hash SHA-256
  return createHash('sha256').update(secret).digest();
}

export function encryptString(string: string): string {
  const key = getKeyFromSecret(process.env.BARCODE_SECRET!);
  const iv = randomBytes(16); // 16 bytes para AES-256-CBC
  const cipher = createCipheriv('aes-256-cbc', key, iv);

  // Codifica en Base64 en lugar de hex
  let encrypted = cipher.update(string, 'utf8', 'base64');
  encrypted += cipher.final('base64');

  // IV también en Base64
  const ivBase64 = iv.toString('base64');

  // Retorna IV + texto cifrado (separados por :)
  return ivBase64 + ':' + encrypted;
}

export function decryptString(encryptedString: string): string {
  try {
    const [ivBase64, cipherTextBase64] = encryptedString.split(':');
    if (!ivBase64 || !cipherTextBase64) {
      throw new ConflictException(translate('route.pdf.find-ticket.error'));
    }
    const key = getKeyFromSecret(process.env.BARCODE_SECRET!);
    const iv = Buffer.from(ivBase64!, 'base64');

    let ticketId: string;
    const decipher = createDecipheriv('aes-256-cbc', key, iv);
    ticketId = decipher.update(cipherTextBase64!, 'base64', 'utf8');
    ticketId += decipher.final('utf8');

    return ticketId;
  } catch (error) {
    throw new ConflictException(translate('route.pdf.find-ticket.error'));
  }
}
