import {Injectable} from "@nestjs/common";
import {map} from "rxjs";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class ProductService {
  private URL = 'https://fakestoreapi.com/';
  constructor(
    private http: HttpService
  ) {}

  findAll() {
    console.log('method called')
    const url = this.URL + 'products';
    return this.http.get(url).pipe(
      map(res => {
        return res.data
      })
    );
  }

  getCategories() {
    const url = this.URL + 'products/categories';
    return this.http.get(url).pipe(
      map((response) => {
        return response.data
      })
    );
  }

  getProductsInCategory(category: string) {
    const url = this.URL + `products/category/${category}`

    return this.http.get(url)
  }
}
