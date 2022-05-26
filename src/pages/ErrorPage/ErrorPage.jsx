import React from 'react';
import { Link } from 'react-router-dom';
import errorIMG from './404 error.png';

const ErrorPage = () => {
  return (
    <div className='ErrorPage'>
      <div className="error">
        <img src={errorIMG} alt="您所搜尋的頁面不存在" />
        <h1 className='errorMessage'>您所搜尋的頁面不存在</h1>
        <Link to='/'>
          <button className='toHome'>
            回首頁
          </button>
        </Link>
      </div>
    </div>
  )
};

export default ErrorPage;