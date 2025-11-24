"use client";
import * as React from "react"
import { useQuery } from "@tanstack/react-query";
import { AllPokemon, OnePokemon } from "../lib/api";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
    const [value, setValue] = React.useState("");
  const { data } = useQuery({
    queryKey: ["all"],
    queryFn: async () => {
      const list = await AllPokemon();
      const fullData = await Promise.all(
        list.map((item) => OnePokemon(item.name))
      );
      return fullData;
    },
  });

  const filtered = data?.filter((p) =>
    p.name.toLowerCase().includes(value.toLowerCase())
  );

  if (!data) return <p>Loading...</p>;
  

  return (
    <div className="p-5">
        <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search Pokémon..."        
        className="
          w-auto p-3 mb-5 text-lg 
          border border-gray-400 rounded-md 
          outline-none focus:border-black
        "
      />

   
    <div className="grid grid-cols-1 [@media(min-width:376px)]:grid-cols-2 sm:[@media(min-width:376px)]:grid-cols-3  gap-4">
      {(filtered ?? data).map((p) => (
        <Link
          key={p.name}
          href={`/pokemon/${p.name}`}
          className="p-4 bg-blue-100 rounded-xl text-center capitalize"
        >
          <Image
          width={150}
          height={150}
            src={p.sprites.front_default}
            alt={p.name}
            className="mx-auto w-20 h-20"

          />

          <h3 className="font-bold mt-2">{p.name}</h3>

          <div className="mt-2 text-sm">
            {p.stats.slice(0, 3).map((s) => (
              <p key={s.stat.name}>
                {s.stat.name}: {s.base_stat}
              </p>
            ))}
          </div>
        </Link>
      ))}
    </div>
     </div>
  );
}
