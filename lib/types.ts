export interface PokemonResult {
  name: string;
  url: string;
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonData {
  name: string;
  sprites: { front_default: string };
  stats: PokemonStat[];
}
