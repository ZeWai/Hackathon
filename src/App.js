// import './App.css';
// import './components/packageCard/packageCard';
import './Components/Upcoming/Packages/PackageCard/PackageCard'
// import PackageCard from './components/packageCard/packageCard';
// import Packages from './components/packages';
// import PackageModal from './components/packagemodal/PackageModal';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import GanttChart from './Components/GanttChart/GanttChart';
import Upcoming from './Components/Upcoming/Upcoming';


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Upcoming/>}/>
        <Route path='/ganttchart' element={<GanttChart />} >
          <Route path=':id' element={<GanttChart/>}/>
        </Route>
        <Route path='*' element={<Upcoming />}/>
        </Routes>
      </BrowserRouter>
  );

  
}

export default App;
