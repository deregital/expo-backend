import { CreateCuentaDto } from 'src/cuenta/dto/cuenta.dto';

export const LoginDto = CreateCuentaDto.pick({
  username: true,
  password: true,
});
