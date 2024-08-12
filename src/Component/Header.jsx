import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Category from '../Pages/Category'
import Details from '../Pages/Details'
import Home from '../Pages/Home'

function Header() {
    return (
        <>
            <section className='flex justify-between items-center bg-slate-900 text-white py-2'>
                <div className='mx-3'>
                    <i class="bi bi-telephone-fill"> +977-9841002000</i> <br />
                    <i class="bi bi-envelope-fill"> news.0126@gmail.com</i>
                </div>
                <div className='flex gap-3 items-center'>
                    <i className="bi bi-facebook" />
                    <i className="bi bi-twitter" />
                    <i className="bi bi-instagram" />
                    <form action>
                        <input type="search" className="w-[500px] border rounded-lg p-2" placeholder="Search" />
                    </form>
                </div>
                <div className='flex gap-3 mx-3'>
                    <button className='border border-black rounded-md p-1 bg-black text-white'>Register</button>
                    <button className='border border-black rounded-md p-1 text-white bg-black'>Login</button>
                </div>
            </section>
            <section className="container mx-auto py-3 flex justify-between items-center">
                <div className="">
                    <Link to={`/`}>
                        <img className='w-[20%]' src="https://www.samaa.tv/assets/images/logo.png" alt="Logo" />
                    </Link>
                </div>
                <nav>
                    <ul className='flex gap-5 font-bold'>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/cat/business`}>Business</Link></li>
                        <li><Link to={`/cat/entertainment`}>Entertainment</Link></li>
                        <li><Link to={`/cat/general`}>General</Link></li>
                        <li><Link to={`/cat/health`}>Health</Link></li>
                        <li><Link to={`/cat/sports`}>Sports</Link></li>
                        <li><Link to={`/cat/science`}>Science</Link></li>
                        <li><Link to={`/cat/technology`}>Technology</Link></li>
                    </ul>
                </nav>
            </section>
            < Routes >
                <Route path='/' element={<Home />} />
                <Route path='/cat/:cid' element={<Category />} />
                <Route path='/details/:id' element={<Details />} />
            </Routes >
        </>
    )
}

export default Header
