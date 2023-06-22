import React, { useReducer, useRef, useEffect } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { BoardReducer, GET_LOCAL_STORAGE } from '../reducers/BoardReducer';
import Update from './Update';
import Detail from './Detail';
import Write from './Write';
import List from './List';

const intiState = {
  list: [],
  id: 0,
  menu: 'List',
};

const Board = () => {
  const [state, dispatch] = useReducer(BoardReducer, intiState);
  const { list, id, menu } = state;
  const isMount = useRef(true);

  useEffect(() => {
    if (!isMount.current) {
      localStorage.setItem('list', JSON.stringify(list));
      localStorage.setItem('id', id);
    }
  }, [id, list]);

  useEffect(() => {
    dispatch({ type: GET_LOCAL_STORAGE });
    isMount.current = false;
  }, []);
  return (
    <div>
      <BrowserRouter basename="{process.env.PUBLIC_URL}">
        <div className="">
          <h1>{menu}</h1>
        </div>
        <div className="">
          <Link to="/write">write</Link>
        </div>
        <div>
          <Route path="/" exact={true} render={() => <List list={list} dispatch={dispatch} />} />
          <Route path="/Write" render={(routeProps) => <Write id={id} dispatch={dispatch} {...routeProps} />} />
          <Route path="/update/:id" render={(routeProps) => <Update dispatch={dispatch} {...routeProps} />} />
          <Route path="/detail/:id" render={(routeProps) => <Detail dispatch={dispatch} {...routeProps} />} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Board;
