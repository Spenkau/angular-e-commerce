import {Component, OnInit, ElementRef, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import {DataRequestService} from "../../shared/services/datarequest.service";
import {IMainData} from "../../shared/models/maindata.interface";
import {CurrencyValueService} from "../../shared/services/currency-value.service";
import axios from "axios";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
  isOpened:boolean = false;
  selectedItem!: IMainData | null;
  items: IMainData[] = [];
  fullItemsList: IMainData[] = [];
  currencyValue: number = 1;
  currencyName: string = '';
  searchString: string = '';
  byTitle = null;
  byPrice = {from: null, to: null};

  constructor(
    private dataRequestService: DataRequestService,
    private currencyValueService: CurrencyValueService,
    private el: ElementRef,
  ) {}

  drop(event: CdkDragDrop<IMainData[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex)
  }

  async ngOnInit() {
    this.dataRequestService.getDataFromAPI();
    this.dataRequestService.data$.subscribe(res => {
      this.items = res;
      this.fullItemsList = this.items;
    })

    this.currencyName = this.currencyValueService.option
    this.currencyValue = await this.currencyValueService.getCurrencyValueByTag();
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

  applySearch(value: any) {
    if (!value) this.items = this.fullItemsList

    this.items = this.items.filter(
      item => item?.title.toLowerCase().includes(value.toLowerCase())
    );
  }
}
