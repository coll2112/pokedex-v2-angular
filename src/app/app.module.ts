import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { DetailsComponent } from './components/details/details.component';
import { PokemonIdPrefixPipe } from './pipes/pokemonIdPrefix/pokemon-id-prefix.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FormatHeightPipe } from './pipes/formatHeight/format-height.pipe';
import { FormatWeightPipe } from './pipes/formatWeight/format-weight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    DetailsComponent,
    PokemonIdPrefixPipe,
    HeaderComponent,
    FormatHeightPipe,
    FormatWeightPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
