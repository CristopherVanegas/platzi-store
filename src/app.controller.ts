import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

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

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit => ${limit} offset => ${offset} brand => ${brand}`;
  }

  // Primero van los metodos con rutas estatitos
  @Get('products/filter')
  getProductsFilter() {
    return `yo soy un filter`;
  }

  
  // Luego van las metodos con rutas dinamicas
  @Get('products/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product con id: ${productId}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product con id: ${productId} y categoria id: ${id}`;
  }
}
