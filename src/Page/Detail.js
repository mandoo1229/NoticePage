import React, { useEffect, useCallback, memo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CHANGE_MENU, DELETE_ITEM } from '../reducers/BoardReducer';
import { getLocalItem } from '../util/util';
import Button from '@mui/material/Button';
import Error from './Error';

const Detail = memo(({ dispatch }) => {
  const { id } = useParams();
  const item = getLocalItem(id);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: CHANGE_MENU, menu: 'Detail' });
  }, [dispatch]);

  const onClickDelete = useCallback(() => {
    if (item) {
      dispatch({ type: DELETE_ITEM, id: item.id });
      alert('삭제 되었습니다.');
      navigate('/');
    } else {
      console.log('취소되었습니다.');
    }
  }, [dispatch, navigate, item]);
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {item ? (
        <div>
          <table>
            <tr>
              <h2>제목 : {item.title}</h2>
              <th>날짜</th>
              <td>{item.date} </td>
              <th>조회수</th>
              <td>{item.views} </td>
            </tr>
            <tr>
              <td>내용 : {item.content} </td>
            </tr>
          </table>
          {/* <h2>{item.title}</h2>
          <div>{item.data} </div>
          <div>{item.views} </div>
          <div>{item.content}</div> */}
          <div>
            <Button variant="contained" href={`/update/${item.id}`}>
              <Link to={`/update/${item.id}`}>수정</Link>
            </Button>
            <Button color="secondary" href="/">
              <Link to="/">목록으로 가기</Link>
            </Button>
            <Button variant="contained" color="error" onClick={onClickDelete}>
              삭제
            </Button>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </div>
  );
});

export default Detail;
