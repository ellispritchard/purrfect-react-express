import React from 'react';

import { Title } from './Title';
import { Order } from "../useFetchOrders";

export type PopularProductsPanelProps = {
    orders: Array<Order>;
}

export const PopularProductsPanel = ({ orders }: PopularProductsPanelProps) => {
    const totalsByProduct: Record<string, number> = orders.reduce((acc, { product_name }) => {
        if(acc[product_name]) {
            acc[product_name] += 1;
        } else {
            acc[product_name] = 1;
        }
        return acc;
    }, {} as Record<string, number>);

    const byRank = Object.entries(totalsByProduct).sort(([_p1, c1], [_p2, c2]) => c1 - c2).reverse();
    const topFive = byRank.slice(0,5);
    const entries = topFive.map(([product, count], index) => <li key={`index_${index}`}>{product} ({count})</li>);

    return <div>
        <Title>Popular Products</Title>
        <ol className='list-decimal list-inside'>
            {entries}
        </ol>
    </div>
}
