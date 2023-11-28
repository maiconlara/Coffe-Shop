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

export interface Order {
  product: Product[];
  user_id: number;
  valor_total: number;
  id_cafeteria: number;
  data_compra: string;
}
export interface Pedido {
  pedido: Order;
}

export const postOrder = async (Order: Pedido) => {
  const apiUrl = "/api/pedido";
  await api.post<Order>(apiUrl, Order, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
