export interface Info {
  __typename: string;
  pages: number;
  next: number;
  prev?: any;
}

export interface Location {
  __typename: string;
  id: string;
  dimension: string;
}

export interface Locations {
  __typename: string;
  info: Info;
  results: Location[];
}

export interface LocationsData {
  locations: Locations;
}
