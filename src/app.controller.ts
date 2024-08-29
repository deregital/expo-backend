import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get() getHello(): string {
    return this.appService.getHello();
  }

  @Get('/test/:id') test(@Param('id') id: string): { res: string } {
    return { res: 'test' + id };
  }

  @Post('/test/:id') testPost(@Param('id') id: string): { res: string } {
    return { res: 'test' + id };
  }

  @Put('/test/:id') testPut(@Param('id') id: string): { res: string } {
    return { res: 'test' + id };
  }

  @Post('/otraRuta/:id1/:id2') otraRuta(
    @Param('id1') id1: string,
    @Param('id2') id2: string,
  ): { res: string } {
    return { res: 'otraRuta' + id1 + id2 };
  }
}
