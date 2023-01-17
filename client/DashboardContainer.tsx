import React from 'react';
import { useOrderRange } from "./useOrderRange";
import { Dashboard } from './Dashboard';

export function DashboardContainer() {
    const { range, error, isLoading } = useOrderRange();
    
    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
  
    const startDate = new Date(range.data.startDate);
    const endDate = new Date(range.data.endDate);

    return (
        <Dashboard startDate={startDate} endDate={endDate}/>
    );
}
