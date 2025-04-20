/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import useSWR from "swr";

import { upperCaseFirstChar } from "@/utils/helper/convert-string";

import About from "@/components/About";
import BaseStats from "@/components/BaseStats";

import { fetcher } from "@/utils/fetcher";

const PokemonDetail = () => {
  const listTab = ["About", "Base Stats", "Evolution", "Moves"];
  type TabType = (typeof listTab)[number];
  const [activeTab, setActiveTab] = useState<TabType>("About");

  const params = useParams();
  const { id } = params;

  const { data, error } = useSWR(`/api/pokemon/${id}`, fetcher);
  if (error)
    return (
      <div className="z-10 mx-auto flex max-h-[800px] min-h-screen w-[480px] max-w-[768px] items-center justify-center rounded-4xl bg-white text-center">
        <div className="inline-grid *:[grid-area:1/1]">
          <div className="status status-error animate-ping" />
          <div className="status status-error" />
        </div>
        <span className="ml-5 text-black">Server is down</span>
      </div>
    );
  if (!data) {
    return (
      <div className="z-10 mx-auto flex max-h-[800px] min-h-screen w-[480px] max-w-[768px] items-center justify-center rounded-4xl bg-white text-center">
        <span className="loading loading-spinner loading-xl" />
      </div>
    );
  }

  const renderContentNav = () => {
    switch (activeTab) {
      case "Base Stats":
        return <BaseStats stats={data.stats} />;
      case "Evolution":
      //   return <Produk />;
      case "Moves":
      //   return <Etalase />;
      default:
        //about
        return <About data={data} />;
    }
  };

  // const colorBg = (id: number) => {
  //   if (id === 1 && id <= 3) {
  //     return "bg-color-pokemon-green";
  //   } else if (id > 3 && id <= 6) {
  //     return "bg-color-pokemon-red";
  //   } else if (id > 6 && id <= 9) {
  //     return "bg-color-pokemon-blue";
  //   } else {
  //     return "bg-color-pokemon-yellow";
  //   }
  // };
  return (
    // <div
    //   className={`${colorBg(data.id)} relative z-10 mx-auto max-h-[1024px] min-h-screen w-full max-w-[768px] overflow-hidden overflow-y-auto overscroll-auto rounded-4xl p-5 md:overscroll-contain`}
    // >
    <div className="bg-color-pokemon-green relative z-10 mx-auto max-h-[800px] min-h-screen w-full max-w-[768px] overflow-hidden overflow-y-auto scroll-smooth rounded-lg bg-white p-5">
      {/* card button back and titik tiga */}
      <Image
        src="/assets/svg/pokeball.svg"
        alt="Pokeball bg"
        width={0}
        height={0}
        className="absolute top-48 -right-32 z-0 h-[200px] w-[420px] opacity-4"
      />

      <Link href="#">
        <div>
          <Image
            src="/assets/svg/square-white.svg"
            alt=""
            width={0}
            height={0}
            className="absolute -top-20 -left-56 z-0 h-[200px] w-[420px] opacity-10"
            // onClick={()=>{ {window}}}
          />
        </div>
      </Link>

      <Image
        src="/assets/svg/dot-grid.svg"
        alt=""
        width={0}
        height={0}
        className="absolute top-44 left-22 z-0 h-[100px] w-[100px] opacity-10"
      />

      <div className="relative z-10 pt-5 pr-6 pl-6">
        {/* Back & Filter */}
        <div className="mb-5 flex items-center justify-between">
          <Image
            src="assets/svg/arrow-left-white.svg"
            alt=""
            className="left-5"
            width="30"
            height="50"
          />

          <Image
            src="assets/svg/love.svg"
            alt=""
            className="absolute right-6"
            width="25"
            height="50"
          />
        </div>
        <h1 className="font-sans text-[34px] font-bold text-white">
          {upperCaseFirstChar(data.name)}
        </h1>
        <span className="absolute right-6 font-sans font-bold text-white">
          #00{data.id}
        </span>
      </div>

      <div className="pr-6 pl-6">
        {data.types.map((type: any, index: number) => (
          <span
            key={index}
            className="mr-2 inline-block h-[25px] w-[70px] justify-center rounded-full bg-white/30 px-2 py-[2px] text-center text-[12px] text-white"
          >
            {upperCaseFirstChar(type.type.name)}
          </span>
        ))}
      </div>

      <div className="relative mt-15 -mb-10 flex w-full items-center justify-center">
        <Image
          src={`/assets/${id?.toString().toLowerCase()}.png`}
          alt=""
          width={100}
          height={100}
          className="h-[200px] w-[230px]"
        />
      </div>

      <div className="h-screen w-full overflow-y-auto rounded-4xl bg-white">
        <div className="mr-8 mb-3 ml-8 flex justify-between border-b border-gray-200 pt-15">
          {listTab.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              disabled={tab === "Evolution" || tab === "Moves"}
              className={`px-4 py-2 font-sans text-base font-medium capitalize ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-black"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {renderContentNav()}
      </div>
    </div>
  );
};

export default PokemonDetail;
