import React from 'react';
import { Order } from '../useFetchOrders';

export type TotalOrdersPanelProps = {
    orders: Array<Order>;
}

export const TotalOrdersPanel = ({ orders }: TotalOrdersPanelProps) => {
  const sum = orders.reduce((sum, order) => sum + order.price, 0 );
    return (<div>
        <h3>Yearly Totals</h3>
        <div>Total Orders: {orders.length}</div>
        <div>Total Order Value: £{sum.toFixed(2)}</div>
    </div>);
};
