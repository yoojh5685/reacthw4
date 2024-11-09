import React from 'react';
import './Box1.css';
import bearImage from '../images/bear.jpg';  // 이미지 import

function Box1() {
  return (
    <div className="box1-container">
      <img 
        src={bearImage} // 중괄호로 감싸서 사용
        alt="BOX1 이미지" 
        className="box1-image"
      />
    </div>
  );
}

export default Box1;