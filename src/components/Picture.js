import React from "react";

const Picture = ({data}) => {
  return (
    <div className="picture">
      <div className="imageBig">
        <p className='title'>{data.photographer}</p>
        <img src={data.src.large} alt="圖片" />
      </div>
      <p className="download">下載圖片 : {" "}<a target="_blank" href={data.src.large}>下載</a></p>
    </div>
  );
};

export default Picture;