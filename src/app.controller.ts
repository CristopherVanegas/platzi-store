import { Controller, Get, Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola';
  }

  @Get('nuevo-endpoint')
  newEndPoint() {
    return 'yo soy nuevo endpoint';
  }

  @Get('//ruta//ruta2')
  nuevo2() {
    return 'hello friend';
  }

  @Get('products/:productId')
  getProducts(@Param() params: any) {
    return `product con id: ${params.productId}`;
  }
}
