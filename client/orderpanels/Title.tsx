import React from 'react';

export const Title = ({ children }: { children: React.ReactNode }) => {
    return <h3 className='text-lg font-semibold text-slate-500 mb-5'>{ children }</h3>;
};
