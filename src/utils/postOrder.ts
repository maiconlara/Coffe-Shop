import { api } from "../lib/api";
import { Topping } from "./getToppings";
import { EssenceType } from "./getTypesOfEssence";
import { MilkType } from "./getTypesOfMilk";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  typesOfMilk: MilkType;
  typesOfEssence: EssenceType;
  topping: Topping;
}

interface Order {
  product: Product[];
  user_id: string;
  valor_total: number;
  id_cafeteria: number;
  data_compra: string;
}

export const postOrder = async (Order: Order) => {
  const apiUrl = "/api/pedido";
  await api.post<Order>(apiUrl, Order, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
