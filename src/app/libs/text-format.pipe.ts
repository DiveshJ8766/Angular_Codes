import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat',
  standalone: true
})
export class TextFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
