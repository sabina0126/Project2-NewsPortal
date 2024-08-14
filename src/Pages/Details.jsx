import React, { useEffect, useState } from "react";
import NOIMG from "../assets/No_image_Available.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";

function Details() {
  let { id } = useParams();
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?articles/${id}&apiKey=54f410e66c894e3196335978f38332fb`
      )
      .then((res) => {
        setData(res.data);
      });
  }, [id]);
  return (
    <>
      <section className="bg-stone-100 py-5">
        <div className="container mx-auto">
          <div className="border shadow-lg py-3">
            <div className="">
              <h4 className="text-2xl font-bold p-3">{data.title}</h4>
              <img
                src={data.urlToImage ? data.urlToImage : NOIMG}
                className="w-[100%]"
                alt=""
              />
            </div>
            <p>{data.descriiption}</p>
            <p className="underline">Author: {data.author}</p>
            <p className="underline font-bold py-3">
              Published at: {data.publishedAt}
            </p>
            <p>{data.content}</p>
            <button className="bg-blue-500 p-2 border rounded-xl">
              Read More <i className="bi bi-arrow-right" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;
