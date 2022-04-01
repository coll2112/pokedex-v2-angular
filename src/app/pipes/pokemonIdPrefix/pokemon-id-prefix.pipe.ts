import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonIdPrefix',
})
export class PokemonIdPrefixPipe implements PipeTransform {
  transform(id: number): string {
    if (id > 100) {
      return `#${id}`;
    } else if (id > 9 && id < 100) {
      return `#0${id}`;
    } else {
      return `#00${id}`;
    }
  }
}
