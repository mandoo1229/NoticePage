import React, { useEffect, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { CHANGE_MENU, DELETE_ITEM } from '../reducers/BoardReducer';
import { getLocalItem } from '../util/util';
import Error from './Error';

const Detail = memo(({ dispatch, match, history }) => {
  const item = getLocalItem(match.params.id);

  useEffect(() => {
    dispatch({ type: CHANGE_MENU, menu: 'Detail' });
  }, [dispatch]);

  const onClickDelete = useCallback(() => {
    if (item) {
      dispatch({ type: DELETE_ITEM, id: item.id });
      history.push('/');
    }
  }, [dispatch, history, item]);
  return (
    <div>
      {item ? (
        <div>
          <div>{item.data} </div>
          <div>{item.views} </div>
          <div>{item.views} </div>
          <h2>{item.title}</h2>

          <div>{item.content}</div>
          <div>
            <Link to={`/update/${item.id}`}>수정</Link>
            <Link to="/">list</Link>
            <span onClick={onClickDelete}>삭제</span>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
});

export default Detail;
