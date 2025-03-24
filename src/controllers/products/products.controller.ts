import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
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
}
