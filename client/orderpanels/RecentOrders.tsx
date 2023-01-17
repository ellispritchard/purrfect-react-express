import React from 'react';
import { Title } from './Title';
import { Order } from '../useFetchOrders';

export type RecentOrdersPanelProps = {
    orders: Array<Order>;
}

const styles = {
    tbody: "bg-white dark:bg-slate-800",
    th: "border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left",
    td: "border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400",
};

export const RecentOrdersPanel = ({ orders }: RecentOrdersPanelProps) => {
  const recent = orders.slice(0,5)

    const tableRows = recent.map(({order_id, order_placed, product_name, order_status}) => (
        <tr key="order_id">
            <td className={styles.td}>{order_id}</td>
            <td className={styles.td}>{order_placed.toLocaleString()}</td>
            <td className={styles.td}>{product_name}</td>
            <td className={styles.td}>{order_status}</td>
        </tr>
    ));

    return (<div>
        <Title>Recent Orders</Title>
        <table className="border-collapse table-auto w-full text-sm">
            <thead>
            <tr>
                <th className={styles.th}>ID</th>
                <th className={styles.th}>Date</th>
                <th className={styles.th}>Product</th>
                <th className={styles.th}>Status</th>
            </tr>
            </thead>
            <tbody className={styles.tbody}>
                {tableRows}
            </tbody>
        </table>

    </div>);
};
