import React, { useRef, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { CHANGE_MENU, UPDATE_ITEM } from '../reducers/BoardReducer';
import useInputs from '../hook/useInput';
import { getLocalItem } from '../util/util';
import Error from './Error';

const Update = memo(({ dispatch, match, history }) => {
  const item = getLocalItem(match.params.id);
  const [state, onChangeInput] = useInputs({
    title: item ? item.title : '',
    content: item ? item.content : '',
  });

  const { title, content } = state;
  const inputTitle = useRef(null);
  const inputContenet = useRef(null);

  useEffect(() => {
    dispatchEvent({ type: CHANGE_MENU, menu: 'Update' });
    if (inputTitle.current) {
      inputTitle.current.focus();
    }
  }, [dispatch]);

  const onClickSubmit = () => {
    if (!title) {
      alert('제목을 작성해주세요.');
      inputTitle.current.focus();
    } else if (!content) {
      alert('글을 작성해주세요. ');
      inputContenet.current.focus();
    } else {
      item.title = title;
      item.content = content;
      dispatch({ type: UPDATE_ITEM, item });
      history.pushState(`/detail/${item.id}`);
    }
  };

  return (
    <div>
      {item ? (
        <div className="form">
          <div className="input-box">
            <input ref={inputTitle} placeholder="title" name="title" value={title} onChange={onChangeInput} />
          </div>
          <textarea
            className="textarea"
            ref={inputContenet}
            placeholder="content"
            name="content"
            value={content}
            onChange={onChangeInput}
          />
          <div className="btn-box">
            <span onClick={onClickSubmit}>submit</span>
            <Link to="/">cancel</Link>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
});

export default Update;
