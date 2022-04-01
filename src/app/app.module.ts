import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { DetailsComponent } from './components/details/details.component';
import { PokemonIdPrefixPipe } from './pipes/pokemonIdPrefix/pokemon-id-prefix.pipe';

@NgModule({
  declarations: [AppComponent, PokemonComponent, DetailsComponent, PokemonIdPrefixPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
