import { OnePokemon } from "@/lib/api";
import PokemonCard from "@/components/pokemon-card";
export default async function PokemonPage({ params }: { params: { name: string } }) {
  const awaitedParams = await Promise.resolve(params);
  const data = await OnePokemon(awaitedParams.name);

  return (
    <div className="flex justify-center items-center min-h-[500px]">
      <PokemonCard data={data} />
    </div>
  );
}
