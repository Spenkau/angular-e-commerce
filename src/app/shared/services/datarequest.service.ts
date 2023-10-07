import {Injectable} from '@angular/core';
import {IMainData} from "../models/maindata.interface";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SERVER_URL} from "../constants/server-url";

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {
  private readonly URL = SERVER_URL
  private productsInCategory: IMainData[] = [];

  constructor(private http: HttpClient) {}

  getDataFromAPI(): Observable<IMainData[]> {
    return this.http.get<IMainData[]>(this.URL + '/products/get-products')
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.URL + '/products/get-categories')
  }

  getProductsByCategory(category: string): Observable<IMainData[]> {
    const url = `${this.URL}/products/categories/${category}`
    return this.http.get<IMainData[]>(url)
  }

  // getCategories(): Observable<string[]> {
  //   return this.http.get<string[]>(this.URL + '/products/get-categories')
  // }

}


// Обработка ошибок: Вы можете использовать операторы catchError и retry для обработки
// ошибок при запросах к API. Это позволит вам повторить запрос при возникновении
// ошибки или предоставить альтернативные данные.
//   Комбинирование потоков: Вы можете использовать операторы combineLatest,
//   merge, concat или zip для комбинирования нескольких потоков данных. Например,
//   вы можете комбинировать потоки данных из DataRequestService и CurrencyValueService.
//   Фильтрация и преобразование данных: Вы можете использовать операторы filter,
//   map и reduce для фильтрации и преобразования данных перед их отображением.
//   Debounce и Throttle: Вы можете использовать операторы debounceTime и
//   throttleTime для управления частотой запросов к API. Это особенно
//   полезно при реализации функционала поиска.
//   Hot и Cold Observables: Попробуйте различать между горячими и холодными
//   Observable и когда использовать каждый из них.
//   Subject и BehaviorSubject: Используйте Subject и BehaviorSubject для
//   мульткастинга значений в несколько подписчиков.
//   SwitchMap: Используйте оператор switchMap для отмены предыдущих запросов
//   при новых запросах. Это особенно полезно при реализации функционала поиска,
//   где новый запрос должен отменять предыдущий.
//   Практика с Unit Testing: Напишите unit тесты для вашего кода, используя
//   marble testing для тестирования вашего RxJS кода.
