import './App.css';
import './components/packageCard/packageCard';
import PackageCard from './components/packageCard/packageCard';
import Packages from './components/packages';
import PackageModal from './components/packagemodal/PackageModal';
import React from 'react';


function App() {

  let flowers = [
    {
        title: "Chinese New Year",
        startPlanting: "12/12/2020",
        readyBy: "13/05/2021",
        image: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=568adfe5194c08f3432390dd7f730d74",
        description: "some short desription ",
       
    },
    {
        title: "Chinese New Year",
        startPlanting: "12/12/2020",
        readyBy: "13/05/2021",
        image: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=568adfe5194c08f3432390dd7f730d74",
        description: "some short desription "
    },
    {
        title: "Chinese New Year",
        startPlanting: "12/12/2020",
        readyBy: "13/05/2021",
        image: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=568adfe5194c08f3432390dd7f730d74",
        description: "some short desription "
    },
    {
        title: "Chinese New Year",
        startPlanting: "12/12/2020",
        readyBy: "13/05/2021",
        image: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=568adfe5194c08f3432390dd7f730d74",
        description: "some short desription "
    },
    {
        title: "Chinese New Year",
        startPlanting: "12/12/2020",
        readyBy: "13/05/2021",
        image: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=568adfe5194c08f3432390dd7f730d74",
        description: "some short desription "
    },
    {
        title: "Chinese New Year",
        startPlanting: "12/12/2020",
        readyBy: "13/05/2021",
        image: "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=568adfe5194c08f3432390dd7f730d74",
        description: "some short desription "
    }
]



import { BrowserRouter, Routes, Route} from 'react-router-dom';
import GanttChart from './Components/GannttChart/GanttChart';
import Upcoming from './Components/Upcoming/Upcoming';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Upcoming/>}/>
        <Route path='/ganttchart' element={<GanttChart />} />
        <Route path='*' element={<Upcoming />}/>
        </Routes>
      </BrowserRouter>
  );

  
}

export default App;
