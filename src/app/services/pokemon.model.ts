export interface PokemonInitResponse {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonInitResults[];
}

export interface PokemonInitResults {
  name: string;
  url: string;
}

export interface Pokemon {
  name: string;
  id: number;
  sprites: Sprites;
  types: Types[];
  weight: number;
  height: number;
}

interface Sprites {
  front_default: string;
  front_shiny?: string;
  back_default?: string;
  back_shiny?: string;
}

interface Types {
  type: {
    name: string;
  };
}
