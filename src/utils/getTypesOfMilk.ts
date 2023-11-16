import { api } from "../lib/api";

export interface MilkType {
    id: number;
    name: string;
    price: number;
  }
  
  interface MilkTypesResponse {
    error: string;
    result: MilkType[];
  }


export const getTypeOfMilks = async () => {
  const apiUrl = "/api/typesOfMilk";
  const { data } = await api.get<MilkTypesResponse>(apiUrl);
  return data;
};
