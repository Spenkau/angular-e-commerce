import {Component, OnInit} from '@angular/core';
import {DataRequestService} from "../../shared/services/datarequest.service";
import {IMainData} from "../../shared/models/maindata.interface";
import {CurrencyValueService} from "../../shared/services/currency-value.service";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {CartService} from "../../shared/services/cart.service";
import {FormControl} from "@angular/forms";
import {debounceTime, distinctUntilChanged, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  isOpened:boolean = false;
  selectedItem!: IMainData | null;
  items: IMainData[] = [];
  categories: string[] = [];
  searchControl = new FormControl();
  fullItemsList: IMainData[] = [];
  currencyValue: number = 1;
  currencyName: string = '';
  searchString: string = '';
  byTitle = null;
  byPrice = {from: null, to: null};
  selectedCategory: string = '';

  constructor(
    private dataRequestService: DataRequestService,
    private currencyValueService: CurrencyValueService,
    private cartService: CartService,
  ) {}

  drop(event: CdkDragDrop<IMainData[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex)
  }

  ngOnInit() {
    this.dataRequestService.getDataFromAPI().subscribe(res => {
      this.items = res;
      this.fullItemsList = res;
    });
    // this.dataRequestService.data$.subscribe(res => {
    //   this.items = res;
    //   this.fullItemsList = res;
    // })

    this.dataRequestService.getProductsByCategory(this.selectedCategory).subscribe(
      (res) => {
        console.log(res)
      },
      (error) => {
        console.error(error)
      }
    )

    // this.dataRequestService.getCategories().subscribe(res => {
    //   this.categories = res
    // })

    this.searchControl.valueChanges // valueChanges - вызывается когда поменялось значение в инпуте
      .pipe(
        debounceTime(500),
        distinctUntilChanged(), // эмитить только если значение изменилось
      )
      .subscribe(res => {
          this.items = this.fullItemsList.filter(item => item?.title.toLowerCase().includes(res.toLowerCase()))
      });

    this.dataRequestService.getCategories().subscribe(res => {
      this.categories = res
    })

    this.currencyName = this.currencyValueService.option
    // this.currencyValue = this.currencyValueService.getCurrencyValueByTag();
  }

  closeModal(event: Event) {
    // if (event.target === this.el.nativeElement.querySelector('.modal-background'))
    if (event.target === event.currentTarget) {
      this.isOpened = false;
      this.selectedItem = null;
    }
  }

  openModalWithData(item: IMainData) {
    this.isOpened = true;
    this.selectedItem = item;
  }

  applyFilters(from: any, to: any, title: any) {
    this.byPrice = { from: from, to: to || null };
    this.byTitle = title.trim();
  }

  resetFitlers() {
    this.byTitle = null;
    this.byPrice = {from: null, to: null};
  }

  addToCart() {
    if (this.selectedItem) {
      this.cartService.addToCart(this.selectedItem)
      this.isOpened = false;
    }
  }

  onCategoryChange() {

  }
}
