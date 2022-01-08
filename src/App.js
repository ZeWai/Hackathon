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
