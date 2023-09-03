import React from "react";

export default function ImageDis(props) {
  return (
    <div>
      <img src={props.urls.full} key={props.id} className="image" />
    </div>
  );
}
