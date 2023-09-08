import {ChangeDetectorRef, Injectable} from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class CurrencyValueService {
  selectedOption = 'USD';
  CURRENCY_VALUES_URL = 'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_N25HnDljGz8hGT5RXNDrg4obvCaVhfuPP32ZT2Ly'
  currencyValues: any;
  constructor() {}

  async getCurrencyValues() {
    try {
      const response = await axios.get(this.CURRENCY_VALUES_URL);
      this.currencyValues = response.data.data;
    } catch (error) {
      console.error("HANDLED ERROR:" + error);
    }
  }

  async getCurrencyValueByTag(): Promise<number> {
    if (!this.currencyValues) {
      await this.getCurrencyValues()
    }

    return this.currencyValues[this.selectedOption]
  }

  get option(): string {
    return this.selectedOption;
  }

  set option(value: string) {
    this.selectedOption = value;
  }
}
