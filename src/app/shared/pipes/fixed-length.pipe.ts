import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fixedLength'
})
export class FixedLengthPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 40) {
      return value.substring(0, 40) + '...'
    }
    return value
  }

}
