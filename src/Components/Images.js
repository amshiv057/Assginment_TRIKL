import React, { useEffect, useState } from "react";
import ImageDis from "./ImageDis";
import TextBox from "./Text";
export default function Images() {
  const [ImageData, setImageData] = useState([]);
  useEffect(() => {
    async function getImage() {
      const res = await fetch(
        "https://api.unsplash.com/photos/?client_id=-O0VxTjICdUztawtzdq1dmcb22yRcqhSWwEHcd1aXKk"
      );
      const data = await res.json();
      setImageData(data);
    }
    getImage();
  }, []);
  const randomNumber = Math.floor(Math.random() * ImageData.length);
  return (
    <div className="conainer">
      {ImageData.length > 0 && (
        <div>
          <ImageDis
            key={ImageData[randomNumber].id}
            {...ImageData[randomNumber]}
          />
          <TextBox />
        </div>
      )}
    </div>
  );
}
