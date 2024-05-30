import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/landing' element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
