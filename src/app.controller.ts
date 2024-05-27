import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get() getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test/:id') test(@Param('id') id: string): string {
    return 'test' + id;
  }
}
