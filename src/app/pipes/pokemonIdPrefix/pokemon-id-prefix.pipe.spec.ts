import { PokemonIdPrefixPipe } from './pokemon-id-prefix.pipe';

describe('PokemonIdPrefixPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonIdPrefixPipe();
    expect(pipe).toBeTruthy();
  });
});
