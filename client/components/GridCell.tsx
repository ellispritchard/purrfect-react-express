import React from 'react';

export type GridCellProps = {
    children?: React.ReactNode;
}

export const GridCell = ({ children } : GridCellProps) => {
    return (
        <div className='md:col-span-2 lg:col-span-1'>
            <div className='h-full py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white'>
                {children}
            </div>
        </div>
    );
}
