"use client";

import { IPokemon } from "@/types/interface";
import { kgToLbs } from "@/utils/helper/convert-kg-lbs";
import { upperCaseFirstChar } from "@/utils/helper/convert-string";
import { formatStat } from "@/utils/helper/format-stats";

interface Props {
  data: IPokemon;
}

const About = ({ data }: Props) => {
  return (
    <div className="flex flex-col overflow-y-scroll bg-white pr-8 pl-8">
      <div className="space-y-2.5 pt-1 font-sans text-[13px]">
        <div>
          <span className="text-gray-400">Species</span>
          <span className="absolute left-40 text-black">Seed</span>
        </div>

        <div>
          <span className="text-gray-400">Height</span>

          <span className="absolute left-40 text-black">
            {`2'3.6`} ({formatStat(data.height)} cm)
          </span>
        </div>

        <div>
          <span className="text-gray-400">Weight</span>
          <span className="absolute left-40 text-black">
            {kgToLbs(data.weight)} lbs <span />({(data.weight / 10).toFixed(1)}{" "}
            Kg)
          </span>
        </div>

        <div>
          <span className="text-gray-400">Abilities</span>
          <span className="absolute left-40 text-black">
            {data.abilities.map((dt, index) => (
              <span key={index}>
                {upperCaseFirstChar(dt.ability.name)}
                {index + 1 !== data.abilities.length && ", "}
              </span>
            ))}
          </span>
        </div>
      </div>

      <div className="mb-2 pt-5 text-sm font-semibold text-black">Breeding</div>

      <div className="space-y-2.5 pt-1 font-sans text-[13px]">
        <div>
          <span className="text-gray-400">Gender</span>
          <span className="absolute left-40 font-bold text-blue-600">
            ♂ 87.5%
          </span>
          <span className="absolute left-60 font-bold text-pink-600">
            ♀ 12.5%
          </span>
        </div>

        <div>
          <span className="text-gray-400">Egg Groups</span>
          <span className="absolute left-40 text-black">Monster</span>
        </div>

        <div>
          <span className="text-gray-400">Egg Cycle</span>
          <span className="absolute left-40 text-black">
            {upperCaseFirstChar(data.types[0].type.name)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
