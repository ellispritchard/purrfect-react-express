import React from "react";
import { Route, Routes} from 'react-router-dom';
import { DashboardContainer } from './DashboardContainer';

const App: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<DashboardContainer/>}/>
    </Routes>
  )
};

export default App;
