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

  const colorBg = (id: number) => {
    if (id >= 1 && id <= 3) {
      return "bg-color-pokemon-green";
    } else if (id > 3 && id <= 6) {
      return "bg-color-pokemon-red";
    } else if (id > 6 && id <= 9) {
      return "bg-color-pokemon-blue";
    } else {
      return "bg-color-pokemon-yellow";
    }
  };
  console.log("da", data.id);

  return (
    <div
      className={`${colorBg(data.id)} relative z-10 mx-auto h-screen max-h-[1024px] min-h-screen w-screen max-w-[768px] flex-col overflow-hidden overflow-y-auto overscroll-auto rounded-4xl md:overscroll-contain`}
    >
      {/* gambar background */}
      <Image
        src="/assets/svg/pokeball.svg"
        alt="Pokeball bg"
        width={0}
        height={0}
        className="absolute top-36 -right-28 z-0 h-[150px] w-[370px] opacity-4"
      />
      <Link href="#">
        <div>
          <Image
            src="/assets/svg/square-white.svg"
            alt=""
            width={0}
            height={0}
            className="absolute -top-20 -left-56 z-0 h-[200px] w-[420px] opacity-15"
            // onClick={()=>{ {window}}}
          />
        </div>
      </Link>
      <Image
        src="/assets/svg/dot-grid.svg"
        alt=""
        width={0}
        height={0}
        className="absolute top-38 left-22 z-0 h-[100px] w-[100px] opacity-15"
      />

      {/* header */}
      <div className="relative z-10 pt-8 pr-6 pl-6">
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
        <h1 className="font-sans text-[24px] font-bold text-white">
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
            className="text-whit mr-2 inline-block h-[20px] w-[60px] justify-center rounded-full bg-white/20 px-2 py-[2px] text-center text-[10px] font-semibold"
          >
            {upperCaseFirstChar(type.type.name)}
          </span>
        ))}
      </div>

      <div className="relative mt-10 -mb-8 flex w-full items-center justify-center">
        <Image
          src={`/assets/${id?.toString().toLowerCase()}.png`}
          alt=""
          width={100}
          height={100}
          className="h-[150px] w-[180px]"
        />
      </div>

      <div className="h-screen w-full overflow-y-auto rounded-4xl bg-white">
        {/* <div className="flex h-[calc(100vh-180px)] w-full flex-col overflow-y-auto rounded-4xl bg-white"> */}
        <div className="mr-8 mb-3 ml-8 flex justify-between border-b border-gray-200 pt-10">
          {listTab.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              disabled={tab === "Evolution" || tab === "Moves"}
              className={`px-4 py-2 font-sans text-sm font-semibold capitalize ${
                activeTab === tab
                  ? "border-b-2 border-blue-600 text-black"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="">{renderContentNav()}</div>
      </div>
    </div>
  );
};

export default PokemonDetail;
