"use client";
import Image from "next/image";
import { PokemonData } from "../lib/types";

export default function PokemonCard({ data }: { data: PokemonData }) {
    return (
        <div className=" max-w-3xl mx-auto p-6 rounded-2xl shadow-md bg-blue-100">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="shrink-0">
                    <Image
                        src={data.sprites.front_default}
                        alt={data.name}
                        width={150}
                        height={150}
                        className="rounded-xl border bg-white/40"
                    />
                </div>
                <div className="flex-1 text-center sm:text-left">
                    <h1 className="text-3xl font-bold mb-2 tracking-wide">
                        {data.name.toUpperCase()}
                    </h1>

                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        <strong>{data.name.toUpperCase()}</strong> is a small, turquoise
                        amphibian Pokémon with red eyes and a green bulb on its back. It is
                        known as the first Pokémon in the National Pokédex and is a
                        dual-type Grass/Poison Pokémon. Bulbasaur evolves into Ivysaur and
                        then Venusaur, and it uses nutrients stored in its back bulb for
                        strength and growth.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-6 justify-center sm:justify-start">
                {data.stats.map((s) => (
                    <div
                        key={s.stat.name}
                        className="bg-white/50 px-4 py-2 rounded-lg font-medium shadow-sm text-[10px]" >
                        <span className="font-semibold">{s.stat.name.toUpperCase()}</span>:
                        {` ${s.base_stat}`}
                    </div>
                ))}
            </div>
        </div>
    );
}
