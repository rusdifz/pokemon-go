/* eslint-disable @typescript-eslint/no-explicit-any */
interface abilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface pastAbilities {
  abilities: abilities[];
  generation: {
    name: string;
    url: string;
  };
}

interface gameIndices {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

interface forms {
  name: string;
  url: string;
}

interface versionGroupDetails {
  level_learned_at: number;
  move_learn_method: {
    name: string;
    url: string;
  };
  order: any;
  version_group: {
    name: string;
    url: string;
  };
}

interface moves {
  move: {
    name: string;
    url: string;
  };
  version_group_details: versionGroupDetails[];
}

export interface stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface types {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface IPokemon {
  abilities: abilities[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: forms[];
  game_indices: gameIndices[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: moves[];
  name: string;
  order: number;
  past_abilities: pastAbilities[];
  past_types: [];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female: any;
    back_shiny: string;
    back_shiny_female: any;
    front_default: string;
    front_female: any;
    front_shiny: string;
    front_shiny_female: any;
    other: {
      dream_world: {
        front_default: string;
        front_female: any;
      };
      home: {
        front_default: string;
        front_female: any;
        front_shiny: string;
        front_shiny_female: any;
      };
      "official-artwork": {
        front_default: string;
        front_shiny: string;
      };
      showdown: {
        back_default: string;
        back_female: any;
        back_shiny: string;
        back_shiny_female: any;
        front_default: string;
        front_female: any;
        front_shiny: string;
        front_shiny_female: any;
      };
    };
    versions: {
      "generation-i": {
        "red-blue": {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
        yellow: {
          back_default: string;
          back_gray: string;
          back_transparent: string;
          front_default: string;
          front_gray: string;
          front_transparent: string;
        };
      };
      "generation-ii": {
        crystal: {
          back_default: string;
          back_shiny: string;
          back_shiny_transparent: string;
          back_transparent: string;
          front_default: string;
          front_shiny: string;
          front_shiny_transparent: string;
          front_transparent: string;
        };
        gold: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
        };
        silver: {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
          front_transparent: string;
        };
      };
      "generation-iii": {
        emerald: {
          front_default: string;
          front_shiny: string;
        };
        "firered-leafgreen": {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
        "ruby-sapphire": {
          back_default: string;
          back_shiny: string;
          front_default: string;
          front_shiny: string;
        };
      };
      "generation-iv": {
        "diamond-pearl": {
          back_default: string;
          back_female: any;
          back_shiny: string;
          back_shiny_female: any;
          front_default: string;
          front_female: any;
          front_shiny: string;
          front_shiny_female: any;
        };
        "heartgold-soulsilver": {
          back_default: string;
          back_female: any;
          back_shiny: string;
          back_shiny_female: any;
          front_default: string;
          front_female: any;
          front_shiny: string;
          front_shiny_female: any;
        };
        platinum: {
          back_default: string;
          back_female: any;
          back_shiny: string;
          back_shiny_female: any;
          front_default: string;
          front_female: any;
          front_shiny: string;
          front_shiny_female: any;
        };
      };
      "generation-v": {
        "black-white": {
          animated: {
            back_default: string;
            back_female: any;
            back_shiny: string;
            back_shiny_female: any;
            front_default: string;
            front_female: any;
            front_shiny: string;
            front_shiny_female: any;
          };
          back_default: string;
          back_female: any;
          back_shiny: string;
          back_shiny_female: any;
          front_default: string;
          front_female: any;
          front_shiny: string;
          front_shiny_female: any;
        };
      };
      "generation-vi": {
        "omegaruby-alphasapphire": {
          front_default: string;
          front_female: any;
          front_shiny: string;
          front_shiny_female: any;
        };
        "x-y": {
          front_default: string;
          front_female: any;
          front_shiny: string;
          front_shiny_female: any;
        };
      };
      "generation-vii": {
        icons: {
          front_default: string;
          front_female: any;
        };
        "ultra-sun-ultra-moon": {
          front_default: string;
          front_female: any;
          front_shiny: string;
          front_shiny_female: any;
        };
      };
      "generation-viii": {
        icons: {
          front_default: string;
          front_female: any;
        };
      };
    };
  };
  stats: stats[];
  types: types[];
  weight: number;
}

export interface IPokemonList {
  name: string;
  url: string;
  color: string;
  types: string[];
  image: string;
}
