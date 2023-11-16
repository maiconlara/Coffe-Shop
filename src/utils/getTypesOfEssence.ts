import { api } from "../lib/api";

export interface EssenceType {
    id: number;
    name: string;
    price: number;
  }
  
  interface EssenceTypesResponse {
    error: string;
    result: EssenceType[];
  }


export const getTypeOfEssence = async () => {
  const apiUrl = "/api/typesOfEssence";
  const { data } = await api.get<EssenceTypesResponse>(apiUrl);
  return data;
};
