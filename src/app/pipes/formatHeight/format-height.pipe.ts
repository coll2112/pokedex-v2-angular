import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatHeight',
})
export class FormatHeightPipe implements PipeTransform {
  transform(height: number): string {
    const convertHeight = (height / 3.048).toFixed(1).replace('.', "'");

    return convertHeight;
  }
}
