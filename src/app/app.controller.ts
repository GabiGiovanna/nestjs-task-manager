import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/gabriela")
  getGabis(): string {
    return "A TAL DA GABIS"
  }

  @Post("/gabriela")
  postGabi(){
    return "O POST DEU BOM"
  }
}
