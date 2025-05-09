import { stats } from "@/types/interface";
import { upperCaseFirstChar } from "@/utils/helper/convert-string";
// import { pokemonDetailDummy } from "@/utils/dummy-data";

interface Props {
  stats: stats[];
}

const BaseStats = ({ stats }: Props) => {
  return (
    <div className="space-y-2 pr-8 pl-8">
      {stats.map((stat, index) => (
        <div key={index} className="space-y-2 pt-1 font-sans text-[11px]">
          <div className="grid grid-cols-7 items-center justify-start">
            <span className="col-span-2 text-gray-400">
              {stat.stat.name === "special-attack"
                ? "Sp. Atk"
                : stat.stat.name === "special-defense"
                  ? "Sp. Def"
                  : upperCaseFirstChar(stat.stat.name)}
            </span>

            <div className="items-center">
              <span className="font-bold text-black">{stat.base_stat}</span>
            </div>

            {/* Progress Bar */}
            <div className="col-span-4 h-1.5 rounded-full bg-gray-200">
              <div
                className={`h-full rounded-full ${stat.base_stat < 50 ? `bg-red-400` : `bg-green-400`} transition-all duration-300`}
                style={{ width: `${(stat.base_stat / 100) * 100}%` }}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="mb-2 pt-3">
        <p className="text-sm font-semibold text-black">Breeding</p>
        <p className="mt-1 text-[11px] text-gray-400">
          The effectiveness of each type on Charmander
        </p>
      </div>
    </div>
  );
};
export default BaseStats;
