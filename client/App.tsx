import React from "react";
import { Route, Routes} from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Login } from './Login';

const App: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
    </Routes>
  )
};

export default App;
