import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/services/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  pokemonDetails: Pokemon = {
    name: '',
    id: 0,
    sprites: {
      front_default: '',
      front_shiny: '',
      back_default: '',
      back_shiny: '',
    },
    types: [],
    weight: 0,
    height: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) =>
      this.pokemonService
        .getPokemonDetails(params['name'])
        .subscribe((data) => (this.pokemonDetails = data))
    );
  }
}
