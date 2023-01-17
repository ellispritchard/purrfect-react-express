import React from 'react';

type LoadableProps = {
    loading: boolean;
    children?: React.ReactNode;
};

export const Loadable = ({ loading, children }: LoadableProps) => {
    return loading ? (<p className='text-sm'>Loading...</p>) : <div>{children}</div>;
};
