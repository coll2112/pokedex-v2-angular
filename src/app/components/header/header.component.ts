import { Component, OnInit } from '@angular/core';
import {
  PokemonInitResponse,
  PokemonInitResults,
} from 'src/app/services/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

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

  handleSearch() {
    console.log(this.searchInput);
  }
}
