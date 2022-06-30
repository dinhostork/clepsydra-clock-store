import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  all() {
    return this.productService.all();
  }

  @Post()
  create(@Body('title') title: string, @Body('image') image: string) {
    return this.productService.create({ title, image });
  }
}
