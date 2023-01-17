import React from 'react';
import { GridCell } from './components/GridCell';
import { Grid } from './components/Grid';
import { useFetchOrders } from './useFetchOrders';
import { TotalOrdersPanel } from './orderpanels/TotalOrders';
import { PopularProductsPanel } from './orderpanels/PopularProducts';
import { RecentOrdersPanel } from './orderpanels/RecentOrders';
import { Loadable } from './components/Loading';

export type DashboardPanels = {
  year: number;
}

export const DashboardPanels = ({ year }: DashboardPanels) => {
  const { orders, error, isLoading } = useFetchOrders({ year });
  if (error) {
    return <div>Error loading dashboard: {error.toString()}</div>;
  }

  return (
    <Grid>
      <GridCell>
        <Loadable loading={isLoading}>
          <TotalOrdersPanel orders={orders || []} />
        </Loadable>
      </GridCell>
      <GridCell>
        <Loadable loading={isLoading}>
          <PopularProductsPanel orders={orders || []} />
        </Loadable>
      </GridCell>
      <GridCell>
        <Loadable loading={isLoading}>
          <RecentOrdersPanel orders={orders || []} />
        </Loadable>
      </GridCell>
    </Grid>
  );
}