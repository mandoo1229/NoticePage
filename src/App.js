import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotePage from './Page/NotePage';
import './App.css';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NotePage />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
