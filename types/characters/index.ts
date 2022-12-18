export interface Info {
  __typename: string;
  pages: number;
  next: number;
  prev?: any;
}

export interface Character {
  __typename: string;
  id: string;
  image: string;
  name: string;
}

export interface Characters {
  __typename: string;
  info: Info;
  results: Character[];
}

export interface CharactersData {
  characters: Characters;
}
