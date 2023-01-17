import useSWR from 'swr';

export enum OrderStatus {
  'placed' = 'placed',
  'in_progress' = 'in_progress',
  'shipped' = 'shipped',
  'cancelled' = 'cancelled',
  'invalid' = 'invalid'
}

export type Order = {
  order_placed: Date;
  product_name: string;
  price: number;
  order_status: OrderStatus;
};

export type OrderAPIJSON = {
  fields: {
    order_placed: string;
    product_name: string;
    price: number;
    order_status: string;
  }
};

export function mapOrderStatus(s: string): OrderStatus {
  const entry = Object.entries(OrderStatus).find(([_key, value]) => value === s);
  if (entry) {
    return entry[0] as OrderStatus;
  }
  return OrderStatus.invalid;
}

export function transformToOrderFields(json: { data: Array<OrderAPIJSON> }): Array<Order> {
  return json.data.map((o: OrderAPIJSON) => ({
    order_placed: new Date(o.fields.order_placed),
    product_name: o.fields.product_name,
    price: o.fields.price,
    order_status: mapOrderStatus(o.fields.order_status),
  }));
}

export const useFetchOrders = ({ year }: { year: number }) => {
  const q = `IF(YEAR({order_placed})=${year},1,BLANK())`;
  const searchParams = new URLSearchParams();
  searchParams.append('q', q);
  const { data, error, isLoading } = useSWR(`/api/orders?${searchParams}`, (...args) => fetch(...args)
    .then(res => res.json())
    .then(transformToOrderFields));
  return {
    orders: data,
    isLoading,
    error,
  };
}
