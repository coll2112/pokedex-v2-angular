import { Component, OnInit } from '@angular/core';
import { finalize, map } from 'rxjs';
import {
  Pokemon,
  PokemonInitResponse,
  PokemonInitResults,
} from 'src/app/services/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemon: Pokemon[] = [];
  isLoading: boolean = false;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.isLoading = true;

    // Fetches all Pokemon with getPokemon, then uses getPokemonDetails to
    // use the Pokemon name returned in the initial API call to get the
    // details for that corrosponding Pokemon
    this.pokemonService.getPokemon(15).subscribe((data: PokemonInitResponse) =>
      data.results.forEach((result: PokemonInitResults) => {
        this.pokemonService
          .getPokemonDetails(result.name)
          .pipe(
            map((data: Pokemon) => ({
              ...data,
              pokedexId: data.id <= 9 ? `00${data.id}` : `0${data.id}`,
            })),
            finalize(() => (this.isLoading = false))
          )
          .subscribe((data: Pokemon) => {
            this.pokemon.push(data);
            console.log(data);
            this.pokemon = this.pokemon.sort((a, b) => a.id - b.id);
          });
      })
    );
  }
}
