
import api  from "./xior";
import { PokemonData, PokemonResult } from "./types";

export const AllPokemon = async (): Promise<PokemonResult[]> => {
  const res = await api.get("/pokemon?limit=151");
  return res.data.results;
};

export const OnePokemon = async (name: string): Promise<PokemonData> => {
  const res = await api.get(`/pokemon/${name}`);
  return res.data;
};
