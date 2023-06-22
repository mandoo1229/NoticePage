import React, { useRef, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { ADD_ITEM, CHANGE_MENU } from '../reducers/BoardReducer';
import useInputs from '../hook/useInput';

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDay()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

const Write = memo(({ id, dispatch, history }) => {
  const item = {};
  const [state, onChangeInput] = useInputs({ title: '', content: '' });
  const { title, content } = state;
  const inputTitle = useRef(null);
  const inputContenet = useRef(null);

  useEffect(() => {
    dispatch({ type: CHANGE_MENU, menu: 'Write' });
    inputTitle.current.focus();
  }, [dispatch]);

  const onClickSubmit = () => {
    if (!title) {
      alert('제목을 작성해주세요.');
      inputTitle.current.focus();
    } else if (!content) {
      alert('본문을 작성해주세요.');
      inputContenet.current.focus();
    } else {
      item.id = id;
      item.title = title;
      item.content = content;
      item.date = formatDate(new Date());
      item.views = 0;
      dispatch({ type: ADD_ITEM, item });
      history.pushState(`/detail/${item.id}`);
    }
  };

  return (
    <div>
      <input ref={inputTitle} placeholder="title" name="title" value={title} onChange={onChangeInput} />
      <input
        className=""
        ref={inputContenet}
        placeholder="content"
        name="content"
        value={content}
        onChange={onChangeInput}
      />
      <div>
        <span onClick={onClickSubmit}>submit</span>
        <Link to="/">cancel</Link>
      </div>
    </div>
  );
});

export default Write;
