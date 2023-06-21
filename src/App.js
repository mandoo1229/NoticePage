import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotePage from './Page/NotePage';
import View from './Page/View';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<View />} />
          <Route path="/notepage" element={<NotePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
