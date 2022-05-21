import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='About'>
      <div className='text'>
        <h1>關於</h1>
        <p className='one'>利用API獲取Pexels的免費圖庫，可讓使用者使用完整的相片和影片庫，並且完全免費。</p>
        <p className='two'>Pexels是一個有名的免費圖庫網站，透過自家的授權條款，讓你可以免費使用、編輯、調整圖片和影片，並且不需要標記來源。</p>
        <button><a href='https://www.pexels.com/zh-tw/' target='_blank'>前往Pexels</a></button>
        <button><Link to="/">回到首頁</Link></button>
      </div>
      </div>
  );
};

export default About;
