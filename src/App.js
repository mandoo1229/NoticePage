// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Board from './Page/Board';
// import Detail from './Page/Detail';
// import Error from './Page/Error';
// import List from './Page/List';
// import ListItem from './Page/ListItem';
// import Update from './Page/Update';
// import Write from './Page/Write';
// import NotePage from './Page/NotePage';
import './App.css';

function App() {
  return (
    <div>
      <Board />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/notepage" element={<NotePage />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/error" element={<Error />} />
          <Route path="/list" element={<List />} />
          <Route path="/update" element={<Update />} />
          <Route path="/write" element={<Write />} />
          <Route path="/listitem" element={<ListItem />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
