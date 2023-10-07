import { Module } from '@nestjs/common';
import {HttpModule} from "@nestjs/axios";
import {ProductsModule} from "./products/products.module";

@Module({
  imports: [HttpModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
