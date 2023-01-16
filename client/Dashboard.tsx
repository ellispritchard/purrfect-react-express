import React from "react";
import { Grid } from "./components/Grid";
import { GridCell } from "./components/GridCell";

export function Dashboard() {
    return (
        <>
        <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                <h1 className="text-2xl text-gray-600 font-medium lg:block">Dashboard</h1>
            </div>
        </div>
        <div className="px-6 pt-6 2xl:container">
            <Grid>
                <GridCell><div>1</div></GridCell>
                <GridCell><div>2</div></GridCell>
                <GridCell><div>3</div></GridCell>
            </Grid>
        </div>
        </>
    );
}
