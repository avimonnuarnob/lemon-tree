interface Origin {
  __typename: string;
  dimension?: any;
}

interface Location {
  __typename: string;
  dimension: string;
}

interface Episode {
  __typename: string;
  name: string;
}

export interface Cast {
  __typename: string;
  status: string;
  species: string;
  gender: string;
  name: string;
  image: string;
  origin: Origin;
  location: Location;
  episode: Episode[];
}

export interface CastData {
  character: Cast;
}
