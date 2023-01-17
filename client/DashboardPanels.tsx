import React from 'react';
import { GridCell } from './components/GridCell';
import { Grid } from './components/Grid';
import { useFetchOrders } from './useFetchOrders';
import { TotalOrdersPanel } from './orderpanels/TotalOrders';
import { PopularProductsPanel } from './orderpanels/PopularProducts';

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
        {isLoading ? <div>fetching...</div> : <TotalOrdersPanel orders={orders || []} />}
      </GridCell>
      <GridCell>
        {isLoading ? <div>fetching...</div> : <PopularProductsPanel orders={orders || []} />}
      </GridCell>
      <GridCell><div>3</div></GridCell>
    </Grid>
  );
}