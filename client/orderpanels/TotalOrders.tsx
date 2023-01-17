import React from 'react';
import { Title } from './Title';
import { Order } from '../useFetchOrders';

export type TotalOrdersPanelProps = {
    orders: Array<Order>;
}

export const TotalOrdersPanel = ({ orders }: TotalOrdersPanelProps) => {
  const sum = orders.reduce((sum, order) => sum + order.price, 0 );
    return (<div>
        <Title>Yearly Totals</Title>
        <div>Total Orders: {orders.length}</div>
        <div>Total Order Value: £{sum.toFixed(2)}</div>
    </div>);
};
