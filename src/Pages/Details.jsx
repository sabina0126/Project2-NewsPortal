import React from 'react'
import NOIMG from '../assets/No_image_Available.jpg'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Details() {
  let { id } = useParams()
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?category=${id}&apiKey=54f410e66c894e3196335978f38332fb`)
      .then(res => {
        setData(res.data);
      });
  }, [id])
  return (
    <>
      <div className="container mx-auto">
        <div className='border shadow-lg py-3'>
          <div className=''>
            <h4 className='text-2xl font-bold p-3'>{data.title}</h4>
          </div>
          <img src={data.urlToImage ? data.urlToImage : NOIMG} className='w-[100%]' alt="" />
          <p>{data.descriiption}</p>
          <p className='underlined'>Author: {data.author}</p>
          <p className='underlined font-bold'>Published at: {data.publishedAt}</p>
          <p>{data.content}</p>
        </div>
        <button className='btn btn-danger'>Read More <i className="bi bi-arrow-right" /></button>
      </div>
    </>
  )
}

export default Details
