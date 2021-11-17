//Example types


export interface ICountryName {
  common: string;
}

export interface IFlagImage {
  png: string;
}

export interface ICountry {
  name: ICountryName;
  capital: string;
  population: number;
  latlng: number[];
  flags: IFlagImage;
}

export interface ICapitalWeather {
  weather: IWeather[];
  visibility: number;
  main: ICapitalTemp;
}

export interface IWeather {
  main: string;
  icon: string;
}

export interface ICapitalTemp {
  temp: number;
  humidity: number;
}

export interface ICapitalName {
  capital: string;
  open: boolean;
}

export interface IFetchData {
  hits: Array<IFetchHitsData>
  page: number
  nbPages: number
}

export interface IFetchHitsData {
  created_at?: string
  title?: string
  url?: string
  author?: string
  objectID: string
}

