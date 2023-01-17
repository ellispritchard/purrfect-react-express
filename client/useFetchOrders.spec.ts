import { transformToOrderFields, OrderAPIJSON, OrderStatus } from './useFetchOrders';

describe('useFetchOrders', () => {
  const fixture: Array<OrderAPIJSON> = [
    {
      fields: {
        order_id: 1,
        order_placed: '2022-07-10',
        product_name: 'a',
        order_status: 'shipped',
        price: 100.0,
      }
    },
    {
      fields: {
        order_id: 2,
        order_placed: '2023-01-16',
        product_name: 'b',
        order_status: 'cancelled',
        price: 200.50,
      }
    },
  ];

  it('transforms orders', () => {
    const orders = transformToOrderFields({ data: fixture });
    expect(orders.length).toBe(2);

    expect(orders[0].order_id).toEqual(1);
    expect(orders[0].product_name).toEqual('a');
    expect(orders[0].order_placed).toEqual(new Date('2022-07-10'));
    expect(orders[0].order_status).toEqual(OrderStatus.shipped);
    expect(orders[0].price).toEqual(100.0);
    
    expect(orders[1].order_id).toEqual(2);
    expect(orders[1].product_name).toEqual('b');
    expect(orders[1].order_placed).toEqual(new Date('2023-01-16'));
    expect(orders[1].order_status).toEqual(OrderStatus.cancelled);
    expect(orders[1].price).toEqual(200.50);
  });

});
