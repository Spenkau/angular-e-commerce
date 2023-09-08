import { Injectable } from '@angular/core';
import {IMainData} from "../models/maindata.interface";
import axios from "axios";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, ReplaySubject} from "rxjs";
import {SERVER_URL} from "../constants/server-url";

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {
  private readonly URL = SERVER_URL + '/products/get-products'
  private dataSubject = new ReplaySubject<IMainData[]>(1);
  data$: Observable<IMainData[]> = this.dataSubject.asObservable()

  constructor(private http: HttpClient) {}

  getDataFromAPI() {
    this.http.get<IMainData[]>(this.URL).subscribe(res => {
      this.dataSubject.next(res)
    })
  }
}
