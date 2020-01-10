import React, { useState, useEffect } from "react";
import axios from "axios";

/////Components/////
import Image from "./imagecomponent/Image";
import Title from "./titlecomponent/Title";
import Date from "./datecomponent/Date";
import Explain from "./explaincomponent/Explain";

function PhotoCard() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=c9SPAzrx5dNZ8Det9OeMnRVKJQ1IVe00Q1bAavrW"
      )
      .then(res => setData(res.data))
      .catch(err => console.log("There's an error", err));
  }, []);

  console.log(data);

  if (!data) return <h3>...Loading</h3>;

  return (
    <div>
      <Image linkImage={data.url} />
      <Title title={data.title} />
      <Date date={data.date} />
      <Explain explain={data.explanation} />
    </div>
  );
}

export default PhotoCard;
