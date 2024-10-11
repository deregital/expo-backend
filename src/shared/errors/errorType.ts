export class ErrorDto {
  constructor(
    public message: string[] | string,
    public statusCode: number,
    public error: string,
  ) {}
}
