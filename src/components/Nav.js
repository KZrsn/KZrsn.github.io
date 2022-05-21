import React from 'react';
import { Link } from 'react-router-dom';

const nav = () => {
  return (
  <nav>
    <ul>
      <Link to="/"><li>首頁</li></Link>
      <Link to="/about"><li>關於</li></Link>
    </ul>
  </nav>
  );
};

export default nav;
