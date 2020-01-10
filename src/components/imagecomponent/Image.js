import React from "react";

function Image(props) {
  return (
    <div>
      <a href={props.hdurl}>
        <img src={props.linkImage} alt="of-the-day" />
      </a>
    </div>
  );
}

export default Image;
