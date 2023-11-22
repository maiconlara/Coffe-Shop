import { api } from "../lib/api";

export interface Order {
  pedido_id: number;
  user_id: number;
  shop_id: number;
  valor_total: number;
  data_compra: Date;
}

export const postOrder = async (Order: Order) => {
  const apiUrl = "/api/pedido";
  await api.post<Order>(apiUrl, Order, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
