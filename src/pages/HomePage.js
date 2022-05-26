import React, { useState , useEffect } from 'react';
import Search from '../components/Search';
import Picture from '../components/Picture';

const HomePage = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");
  // 自己的API
  const auth = "563492ad6f91700001000001bbab6433dedb421bbba5ab4f3a09a4d2";
  // 精選相片
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15"; // page=1&per_page=15 : 第一頁要有15張照片
  // 搜尋相片
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;
  
  // 連接API
  const search = async (url) => {
    setPage(2); // 不然搜尋頁數會和精選頁數累加(課程527)
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(parseData.photos);
  };

  // 加載更多圖片
  const morePicture = async () => {
    let newURL;
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=${page}`;
    }
    setPage(page + 1);
    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    let parseData = await dataFetch.json();
    setData(data.concat(parseData.photos));
  }

  // 可以一進去網頁就顯示15張照片
  useEffect(() => {
    search(initialURL);
  }, []);

  useEffect(() => {
    if (currentSearch === "") {
      search(initialURL);
    } else {
      search(searchURL);
    }
  }, [currentSearch]);


  return (
  <div className='main'>
      <Search search={() => {
        setCurrentSearch(input); // JS Closure
      }} setInput={setInput} />
      <div className='homePage-pictures'>
        {data && data.map((d,key) => {
          return <Picture data={d} key={key} />;
        })}
      </div>

      <div className="loadMore">
        <button onClick={morePicture}>+ 加載更多</button>
      </div>
  </div>
  );
};

export default HomePage;
