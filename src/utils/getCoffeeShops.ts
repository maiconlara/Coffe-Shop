import { api } from "../lib/api";

export interface CoffeeShop {
  name: string;
  distance: number;
  rating: number;
  img: string;
}

interface CoffeeShopsResponse {
  error: string;
  result: CoffeeShop[];
}


export const getCoffeeShops = async () => {
  const apiUrl = "/api/coffeeshops";
  const { data } = await api.get<CoffeeShopsResponse>(apiUrl);
  return data;
};
