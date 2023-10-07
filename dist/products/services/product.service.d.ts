import { HttpService } from "@nestjs/axios";
export declare class ProductService {
    private http;
    private URL;
    constructor(http: HttpService);
    findAll(): import("rxjs").Observable<any>;
    getCategories(): import("rxjs").Observable<any>;
    getProductsInCategory(category: string): import("rxjs").Observable<import("axios").AxiosResponse<any, any>>;
}
