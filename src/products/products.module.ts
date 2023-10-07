import { Module } from "@nestjs/common";
import {ProductService} from "./services/product.service";
import {ProductsController} from "./products.controller";
import {HttpModule} from "@nestjs/axios";

@Module({
  imports: [
    HttpModule
  ],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductsModule {}
