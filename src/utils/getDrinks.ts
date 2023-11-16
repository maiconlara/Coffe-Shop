import { api } from "../lib/api";

export interface Drink {
    id: number;
    name: string;
    price: number;
    img: string;
  }
  
  interface DrinksResponse {
    error: string;
    result: Drink[];
  }


export const getDrinks = async () => {
  const apiUrl = "/api/drinks";
  const { data } = await api.get<DrinksResponse>(apiUrl);
  return data;
};
