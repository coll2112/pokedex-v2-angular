import { Component, OnInit } from '@angular/core';
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

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    // Fetches all Pokemon with getPokemon, then uses getPokemonDetails to
    // use the Pokemon name returned in the initial API call to get the
    // details for that corrosponding Pokemon
    this.pokemonService.getPokemon().subscribe((data: PokemonInitResponse) =>
      data.results.forEach((result: PokemonInitResults) => {
        this.pokemonService
          .getPokemonDetails(result.name)
          .subscribe((data: Pokemon) => {
            this.pokemon.push(data);
            this.pokemon = this.pokemon.sort((a, b) => a.id - b.id);
          });
      })
    );
  }
}
