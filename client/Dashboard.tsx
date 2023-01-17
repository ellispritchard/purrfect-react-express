import React, { useState } from "react";
import { DashboardPanels } from "./DashboardPanels";

type DashboardProps = {
    startDate: Date,
    endDate: Date,
};

export function Dashboard({startDate, endDate}: DashboardProps) {
    const [selectedYear, setSelectedYear] = useState(endDate.getFullYear());

    const startYear = new Date(startDate).getFullYear();
    const endYear = new Date(endDate).getFullYear();
    const yearOptions: JSX.Element[] = [];
    for(let year = endYear; year >= startYear; year-- ) {
        yearOptions.push(<option key={`yearOption_${year}`} value={year} defaultValue={endYear}>{year}</option>);
    }

    const handleChangeYear = (e: React.FormEvent<HTMLSelectElement>) => {
        setSelectedYear(Number.parseInt(e.currentTarget.value));
    };

    return (
        <>
        <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
                <h1 className="text-2xl text-gray-600 font-medium lg:block">Dashboard</h1>
            </div>
            <label htmlFor="year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year</label>
            <select onChange={handleChangeYear} id="year" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {yearOptions}
            </select>
        </div>
        <div className="px-6 pt-6 2xl:container">
            <DashboardPanels year={selectedYear}/>
        </div>
        </>
    );
}
