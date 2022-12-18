export interface Info {
  __typename: string;
  pages: number;
  next: number;
  prev?: any;
}

export interface Episode {
  __typename: string;
  id: string;
  episode: string;
  name: string;
}

export interface Episodes {
  __typename: string;
  info: Info;
  results: Episode[];
}

export interface EpisodesData {
  episodes: Episodes;
}
