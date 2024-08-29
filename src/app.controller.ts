import { Controller, Get, Param, Post, Put } from '@nestjs/common';
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

  @Post('/test/:id') testPost(@Param('id') id: string): string {
    return 'test' + id;
  }

  @Put('/test/:id') testPut(@Param('id') id: string): string {
    return 'test' + id;
  }
}
