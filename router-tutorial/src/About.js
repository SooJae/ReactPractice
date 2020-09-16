import React from 'react';
import qs from 'qs';
function About({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const detail = query.detail === 'true';
  console.log('숫자', parseInt(query.id, 10));
  console.log('문자', query.id);

  console.log(query);
  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해보는 예제 프로젝트입니다.</p>
      {detail && <p>detail 값이 true 입니다!</p>}
    </div>
  );
}

export default About;
