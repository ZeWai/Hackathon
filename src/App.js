import { BrowserRouter, Routes, Route} from 'react-router-dom';
import GanttChart from './Components/GannttChart/GanttChart';
import Upcoming from './Components/Upcoming/Upcoming';

function App() {

  let flowers = [
    {
        title: "Chinese New Year Market",
        startPlanting: "May 2022",
        readyBy: "Feb 2023",
        image: "https://images.unsplash.com/photo-1516477266610-9e4c763da721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        description: "some short desription ",
        label: "Event"
    },
    {
        title: "Halloween pumpkin picking",
        startPlanting: "Jan 2022",
        readyBy: "Oct 2022",
        image: "https://images.unsplash.com/photo-1508995476428-43d70c3d0042?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        description: "some short desription ",
        label: "Event"
    },
    {
        title: "Strawberry picking",
        startPlanting: "Nov 2022",
        readyBy: "April 2023",
        image: "https://images.unsplash.com/photo-1592300254886-5281e714c86b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        description: "some short desription ",
        label: "Workshop"
    },
    {
        title: "Herb sowing",
        startPlanting: "May 2022",
        readyBy: "Sep 2023",
        image: "https://images.unsplash.com/photo-1472141341085-dab5ea0df9a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80",
        description: "some short desription ",
        label: "Workshop"
    },
    {
        title: "Christmas herb picking",
        startPlanting: "Feb 2022",
        readyBy: "Dec 2022",
        image: "https://images.unsplash.com/photo-1594313016519-640ed47407ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
        description: "some short desription ",
        label: "Workshop"
    },
    {
        title: "Valentine's day market",
        startPlanting: "Nov 2022",
        readyBy: "Feb 2023",
        image: "https://images.unsplash.com/photo-1612328289561-0edd72aefc43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        description: "some short desription ",
        label: "Event"
    }
]



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
