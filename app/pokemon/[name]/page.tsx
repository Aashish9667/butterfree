import { OnePokemon } from "@/lib/api";
import PokemonCard from "@/components/pokemon-card";

export default async function PokemonPage({ params }: { params: Promise<{ name: string }> }) {
  const data = await OnePokemon((await params).name);

  return (
    <div className="flex justify-center items-center min-h-[500px]">
      <PokemonCard data={data} />
    </div>
  );
}