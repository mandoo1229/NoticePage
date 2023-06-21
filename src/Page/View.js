import React from 'react';
import '../style/View.css';

const View = () => {
  return (
    <div>
      <h2>게시판</h2>
      <thead>
        <th>No</th>
        <th scope="col">제목</th>
        <th scope="col">작성자</th>
        <th scope="col">작성시간</th>
        <th scope="col">조회수</th>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <th scope="row">2</th>
          <th scope="row">3</th>
          <th scope="row">4</th>
          <th scope="row">5</th>
        </tr>
      </tbody>
    </div>
  );
};

export default View;
