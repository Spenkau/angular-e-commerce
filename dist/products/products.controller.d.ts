import { AxiosResponse } from 'axios';
import { ProductService } from "./services/product.service";
import { ProductsInterface } from "./models/products.interface";
export declare class ProductsController {
    private readonly productService;
    items: AxiosResponse<ProductsInterface>;
    constructor(productService: ProductService);
    findAll(): import("rxjs").Observable<any>;
    getCategories(): import("rxjs").Observable<any>;
    getProductsInCategory(category: string): import("rxjs").Observable<AxiosResponse<any, any>>;
}
