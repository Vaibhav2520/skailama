import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import Projects from './pages/projects';
import Upload from './pages/upload';
import ProjectList from './pages/projectList';
import Edit from './pages/edit';
import Config from './pages/config';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/landing' element={<Landing/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/upload' element={<Upload/>}/>
          <Route path='/projectlist' element={<ProjectList/>}/>
          <Route path='/edit' element={<Edit/>}/>
          <Route path='/config' element={<Config/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
