import {AfterViewInit, Component} from '@angular/core';
import { CurrencyValueService } from '../../../shared/services/currency-value.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  selectedOption: string = 'USD';
  options: {value: string, label: string}[] = [
    { value: 'USD', label: 'american dollar ($)'},
    { value: 'EUR', label: 'euro (€)'},
    { value: 'RUB', label: 'russian rouble (RUB)'},
    { value: 'PLN', label: 'poland zlotiy (zł)'},
  ]

  constructor(
    private currencyValueService: CurrencyValueService
  ) {
    this.selectedOption = this.currencyValueService.selectedOption
  }

  onOptionChange(value: string) {
    this.currencyValueService.option = value
  }

}
