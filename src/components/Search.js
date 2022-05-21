import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
  <div className='search'>
    <input onChange={inputHandler} type="text" placeholder='請輸入英文(中文無效)'/>
    <button onClick={search}><AiOutlineSearch /></button>
  </div>
  );
};

export default Search;
