import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Pokemon, PokemonInitResponse } from 'src/app/services/pokemon.model';
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
      data.results.forEach((result: Pokemon) => {
        this.pokemonService
          .getPokemonDetails(result.name)
          .subscribe((data: Pokemon) => this.pokemon.push(data));
      })
    );
  }
}
