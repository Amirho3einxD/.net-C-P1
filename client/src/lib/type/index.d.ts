export type Activity = {
  id?: string;
  date: Date;
  latitude: number;
  longitude: number;
  country: string;
  address: string;
  title: string;
  description: string;
  capacity: number;
  status: string;
  price: number;
  createdBy: string;
  category:string;
}


export type LocationIQSuggestion= {
  place_id: string
  osm_id: string
  osm_type: string
  licence: string
  lat: string
  lon: string
  boundingbox: string[]
  class: string
  type: string
  display_name: string
  display_place: string
  display_address: string
  address: Address
}

export type LocationIQAddress ={
  name: string
  road?: string
  neighbourhood?: string
  suburb?: string
  city: string
  state: string
  postcode?: string
  country: string
  country_code: string
}

