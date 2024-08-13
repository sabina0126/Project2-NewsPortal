import React, { useEffect, useState } from 'react'
import News from '../Component/News'
import { Link } from 'react-router-dom'
import axios from "axios"
import NOIMG from '../assets/No_image_Available.jpg'

export default function Home() {
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=54f410e66c894e3196335978f38332fb`)
      .then(res => {
        setData(res.data.articles);
      });
  }, [])
  return (
    <>
      <section className='bg-stone-100'>
        <h1 className="container mx-auto text-4xl font-bold text-blue-900">NEWS</h1>
        <div className="my-2 bg-blue-900 h-[5px]"></div>
        <div className='container mx-auto flex justify-between p-5'>
          <div className=''>
            {data.slice(0, 2).map((a) => (
              <div key={a} className='border border shadow-lg py-3'>
                <Link to={`/details/${a.id}`}>
                <div className=''>
                  <h4 className='text-2xl font-bold p-3'>{a.title}</h4>
                </div>
                <img src={a.urlToImage ? a.urlToImage : NOIMG} className='w-[100%]' alt="" />
                </Link>
              </div>
            ))}
          </div>
          <div className='border shadow-lg p-5'>
            <h4 className='font-bold text-xl py-3 underline'>Recent News</h4>
            <div className="flex flex-wrap gap-3">
              <ul>
                {data.slice(9, 13).map((a) => (
                  <div key={a} className='w-[300px] shadow p-3 border'>
                    <li>
                      <Link to={`/details/${a.id}`}><img src={a.urlToImage ? a.urlToImage : NOIMG} className='w-full' alt="" />
                        <div className='py-3'>
                          <h4 className='text-2xl font-bold'>{a.title}</h4>
                        </div>
                      </Link>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <News title="Business" />
        <News title="Entertainment" />
        <News title="General" />
        <News title="Health" />
        <News title="Science" />
      </section>
    </>
  )
}
