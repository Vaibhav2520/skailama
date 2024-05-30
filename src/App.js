import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/landing' element={<Landing/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
