import React from "react";

export type GridProps = {
    children?: React.ReactNode;
}

export const Grid = ({ children } : GridProps) => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {children}
        </div>
    );
}
