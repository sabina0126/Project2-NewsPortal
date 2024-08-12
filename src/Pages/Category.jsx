import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import NOIMG from '../assets/No_image_Available.jpg'
import axios from 'axios'

function Category() {
  let { cid } = useParams()
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?category=${cid}&apiKey=54f410e66c894e3196335978f38332fb`)
      .then(res => {
        setData(res.data.articles);
      });
  }, [cid])
  return (
    <>
      <section className='py-5'>
        <div className="container mx-auto">
          <h3 className='text-2xl font-bold uppercase'>{cid}</h3>
          <div className="flex flex-wrap gap-3">
            {data.map((a) => (
              <div key={a} className='w-[300px] shadow p-3 border'>
                <Link to={`/details/${a.id}`}>
                  <img src={a.urlToImage ? a.urlToImage : NOIMG} className='w-full' alt="" />
                  <div className='py-3'>
                    <h4 className='text-2xl font-bold'>{a.title}</h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Category
