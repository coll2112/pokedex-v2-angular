import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable, Subscriber, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';

import { Pokemon, PokemonInitResponse } from './pokemon.model';

const headerOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/JSON',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  apiBaseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  // TODO do something with this
  // const cleanPokeObj = {
  //   id: pokemon.data.id,
  //   name: pokemon.data.name,
  //   sprites: {
  //     front: pokemon.data.sprites.front_default,
  //     back: pokemon.data.sprites.back_default,
  //   },
  // };

  getPokemon(limit?: number): Observable<PokemonInitResponse> {
    const url = `${this.apiBaseUrl}/pokemon?limit=${limit ? limit : 9}`;
    return this.http.get<PokemonInitResponse>(url, headerOptions);
  }

  getPokemonDetails(pokemonName?: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.apiBaseUrl}/pokemon/${pokemonName}`);
  }
}

//
