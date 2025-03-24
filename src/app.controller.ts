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
  getProducts(@Param('productId') productId: string) {
    return `product con id: ${productId}`;
  }
  
  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product con id: ${productId} y categoria id: ${id}`;
  }
}
