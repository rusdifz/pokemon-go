"use client";

import Image from "next/image";

import PokeballSvg from "../../public/assets/svg/pokeball.svg";

import { pokemonListDummy } from "@/utils/dummy-data";
import { useEffect, useState } from "react";
import { IPokemonList } from "@/types/interface";
import Link from "next/link";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemons, setPokemons] = useState<IPokemonList[]>([]);

  useEffect(() => {
    setPokemons(pokemonListDummy);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="z-10 mx-auto flex max-h-[800px] min-h-screen w-[390px] max-w-[768px] items-center justify-center rounded-4xl bg-white text-center">
        <span className="loading loading-spinner loading-xl" />
      </div>
    );
  }

  return (
    <div className="relative z-10 mx-auto h-full max-h-[1024px] min-h-screen w-full max-w-[768px] overflow-hidden overflow-y-auto rounded-lg bg-white p-5">
      {/* card button back and titik tiga */}

      <Image
        src={PokeballSvg}
        alt="Pokeball bg"
        width={100}
        height={100}
        className="absolute -top-14 -right-16 z-0 h-[220px] w-[220px] opacity-4"
      />

      {/* Header */}
      <div className="relative z-10 pt-5">
        {/* Back & Filter */}
        <div className="mb-5 flex items-center justify-between">
          <Image
            src="/assets/svg/arrow-left.svg"
            alt="Back"
            width={30}
            height={30}
          />
          <Image
            src="/assets/svg/memo.svg"
            alt="Menu"
            width={30}
            height={30}
            className="mr-2"
          />
        </div>

        <h1 className="mb-5 text-3xl font-bold text-gray-800">Pokedex</h1>
      </div>

      {/* card pokemon */}
      <div className="mb:grid-cols-2 grid grid-cols-2 items-center gap-4">
        {pokemons.map((dt, index) => (
          <Link key={index.toString()} href={`/${dt.name}`}>
            <div
              className={`bg-color-pokemon-${dt.color} relative flex h-[150px] w-[175px] overflow-hidden rounded-2xl p-5`}
            >
              <Image
                src={PokeballSvg}
                alt="Pokeball bg"
                width={100}
                height={100}
                className="absolute right-0 bottom-0 z-0 h-[75px] w-[70px] opacity-5"
              />

              <span
                className={`text-color-pokemon-${dt.color} absolute top-2 right-3 font-mono text-[14px] font-semibold`}
              >
                #00{index + 1}
              </span>

              <div className="z-10 flex flex-col space-y-1">
                <p className="text-[16px] font-semibold text-white">
                  {dt.name}
                </p>
                <div className="mt-1 flex flex-col space-y-1">
                  {dt.types.map((type, i) => (
                    <span
                      key={i}
                      className="inline-block w-fit rounded-full bg-white/20 px-2 py-[2px] text-[10px] text-white"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <Image
                src={dt.image}
                alt=""
                width={100}
                height={100}
                className="absolute right-2 bottom-2 z-0 h-[55px] w-[65px]"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Floating Button */}
      <div className="fixed right-5 bottom-5 z-50">
        <button className="rounded-full bg-indigo-500 p-3 shadow-lg transition-colors duration-200 hover:bg-indigo-600 hover:shadow-xl active:scale-95">
          <Image
            src="assets/svg/filter.svg"
            alt="Filter button"
            width={100}
            height={100}
            className="h-[25px] w-[25px]"
          />
        </button>
      </div>
    </div>
  );
};

export default Home;

// <?xml version="1.0" encoding="UTF-8"?>
