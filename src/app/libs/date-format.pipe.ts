import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDateFormat'
})
export class CustomDateFormatPipe implements PipeTransform {

  transform(value: any): string {
    if (value instanceof Date) {
      const datePipe = new DatePipe('en-US');
      // return datePipe?.transform(value, 'dd-MMM-yyyy')?.toLowerCase();
    }
    return '';
  }
}
