import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";
import {IMainData} from "../../../shared/models/maindata.interface";
import {interval, Subscription} from "rxjs";
import {IDate} from "../../../shared/models/date.interface";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: IMainData[] = [];
  intervalSub!: Subscription;
  dateSettings!: IDate;

  constructor(
    private cartService: CartService
  ) {

  }

  ngOnInit() {
    this.intervalSub = interval(1000).subscribe(() => {
      const timeNow: Date = new Date();
      this.dateSettings = {
        hours: timeNow.getHours(),
        minutes: timeNow.getMinutes(),
        seconds: timeNow.getSeconds()
      }
    })

    this.cartItems = this.cartService.getFromLocalStorage()
  }

  ngOnDestroy() {
    this.intervalSub.unsubscribe();
  }
}
