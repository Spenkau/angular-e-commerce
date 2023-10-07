import {Controller, Get} from '@nestjs/common';
import { AxiosResponse } from 'axios';
import {ProductService} from "./services/product.service";
import {ProductsInterface} from "./models/products.interface";

@Controller('products')
export class ProductsController {
  items: AxiosResponse<ProductsInterface>;

  constructor(private readonly productService: ProductService) {}

  @Get('get-products')
  findAll() {
    try {
      return this.productService.findAll()
    } catch (err) {
      throw new Error('Failure:' + err)
    }
  }

  @Get('get-categories')
  getCategories() {
    try {
      return this.productService.getCategories()
    } catch (err) {
      throw new Error('Failure:' + err)
    }
  }

  @Get('get-product-by-category')
  getProductsInCategory(category: string) {
    try {
      return this.productService.getProductsInCategory(category)
    } catch (err) {
      throw new Error('Failure:' + err)
    }
  }
}
