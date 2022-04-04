import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import {
  PokemonInitResponse,
  PokemonInitResults,
} from 'src/app/services/pokemon.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  pokemon: PokemonInitResults[] = [];
  searchInput: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService
      .getPokemon(15)
      .subscribe((data: PokemonInitResponse) => (this.pokemon = data.results));
  }

  handleSearch() {}

  handleChange() {}

  handleResultsClick() {}
}
