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
