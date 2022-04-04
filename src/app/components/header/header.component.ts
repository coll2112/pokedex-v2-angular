import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import {
  PokemonInitResponse,
  PokemonInitResults,
} from 'src/app/services/pokemon.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pokemon: PokemonInitResults[] = [];
  searchInput: string = '';
  pokemonFilter: PokemonInitResults[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemon(15)
      .subscribe((data: PokemonInitResponse) => (this.pokemon = data.results));
  }

  viewPokemonDetails(pokemon: string) {
    this.searchInput = '';
    this.router.navigate(['pokedex', pokemon]);
  }

  handleChange() {
    this.pokemonFilter = this.pokemon
      .filter((p) => p.name.startsWith(this.searchInput))
      .splice(0, 5);
  }

  handleSearch() {}
}
