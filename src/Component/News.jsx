import React, { useEffect, useState } from 'react'
import NOIMG from '../assets/No_image_Available.jpg'
import { Link } from 'react-router-dom'
import axios from "axios"

export default function News(props) {
    let [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://newsapi.org/v2/top-headlines?category=${props.title}&apiKey=54f410e66c894e3196335978f38332fb`)
            .then(res => {
                setData(res.data.articles);
            });
    }, [])
    return (
        <>
            <section className='py-5'>
                <div className="container mx-auto">
                    <div className='flex justify-between'>
                        <h3 className='py-3 text-2xl font-bold uppercase'>{props.title}</h3>
                        <h5 className='text-blue'><Link to={`/cat/${props.title}`}>View All <i className="bi bi-arrow-right" /></Link></h5>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {data.slice(0, 4).map((a) => (
                            <div key={a} className='w-[300px] shadow-lg p-3 border'>
                                <img src={a.urlToImage ? a.urlToImage : NOIMG} className='w-full shadow-lg' alt="" />
                                <div className='py-3'>
                                    <h4 className='text-2xl font-bold'>{a.title}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
