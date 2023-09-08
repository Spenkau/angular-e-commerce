import { Pipe, PipeTransform } from '@angular/core';
import {IMainData} from "../models/maindata.interface";

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(items: IMainData[], byPrice: {from: number, to: number} | undefined, byTitle: string | undefined): IMainData[] {
    if (!items) return []

    return items.filter(item => {
      const titleMatch = !byTitle || item.title?.toLowerCase().includes(byTitle.toLowerCase());
      const priceMatch = (!byPrice?.from || item.price >= byPrice?.from) && (!byPrice?.to || item.price <= byPrice?.to);

      return (titleMatch && priceMatch);
    });
  }

}
