"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { OnePokemon } from "../../../lib/api";
import PokemonCard from "../../../components/pokemon-card";

export default function PokemonPage() {
  const { name } = useParams();

  const { data } = useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => OnePokemon(String(name)),
  });

  if (!data) return <p>Loading...</p>;

  return (
    <div className="flex justify-center items-center min-h-[500px]">
      <PokemonCard data={data} />
    </div>
  );
}
