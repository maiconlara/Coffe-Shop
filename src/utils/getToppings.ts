import { api } from "../lib/api";

export interface Topping {
    id: number;
    name: string;
    price: number;
  }
  
  interface ToppingsResponse {
    error: string;
    result: Topping[];
  }

export const getToppings = async () => {
  const apiUrl = "/api/topping";
  const { data } = await api.get<ToppingsResponse>(apiUrl);
  return data;
};
