import React, { useEffect, memo } from 'react';
import { CHANGE_MENU } from '../reducers/BoardReducer';
import ListItem from '../Page/ListItem';

const List = memo(({ list, dispatch }) => {
  useEffect(() => {
    dispatch({ type: CHANGE_MENU, menu: 'List' });
  }, [dispatch]);
  return (
    <div>
      <div>title</div>
      <div>date</div>
      <div>views</div>
      <div>
        {list
          .sort((a, b) => b.id - a.id)
          .map((item) => {
            return <ListItem key={item.id} item={item} dispatch={dispatch} />;
          })}
      </div>
    </div>
  );
});

export default List;
