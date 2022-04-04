import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatWeight',
})
export class FormatWeightPipe implements PipeTransform {
  transform(weight: number): string {
    const convertWeight = (weight / 4.536).toFixed(2);
    return convertWeight;
  }
}
