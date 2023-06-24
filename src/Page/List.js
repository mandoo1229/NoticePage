import React, { useEffect, useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { CHANGE_MENU } from '../reducers/BoardReducer';
import { INCREASE_VIEWS } from '../reducers/BoardReducer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

// import Paper from '@mui/material/Paper';
// import '../style/List.css';

const List = memo(({ list, dispatch }) => {
  const onClickItem = useCallback(
    (id) => () => {
      dispatch({ type: INCREASE_VIEWS, id });
    },
    [dispatch]
  );
  useEffect(() => {
    dispatch({ type: CHANGE_MENU, menu: 'List' });
  }, [dispatch]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Table className="custom-table" size="small" aria-label="a dense table" style={{ width: '50%', height: '50%' }}>
        <TableHead>
          <TableRow>
            <TableCell align="center">title</TableCell>
            <TableCell align="center">date</TableCell>
            <TableCell align="center">views</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list
            .sort((a, b) => b.id - a.id)
            .map((item) => {
              return (
                <TableRow>
                  <TableCell align="center">
                    <Link onClick={onClickItem(item.id)} to={`/detail/${item.id}`}>
                      {item.title}
                    </Link>
                  </TableCell>
                  <TableCell align="center">{item.date}</TableCell>
                  <TableCell align="center">{item.views}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <div style={{ display: 'flex', justifyContent: 'flex-end', width: '50%', marginTop: '16px' }}>
        <Button variant="outlined" color="secondary" style={{ marginLeft: 'auto' }}>
          <Link to="/write">write</Link>
        </Button>
      </div>
    </div>
  );
});

export default List;
