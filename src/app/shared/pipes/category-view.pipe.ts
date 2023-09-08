import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryView'
})
export class CategoryViewPipe implements PipeTransform {

  transform(value: string): string {
    return value.charAt(0).toUpperCase();
  }

}
