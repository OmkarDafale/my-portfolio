import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ReactTyped } from 'react-typed'

const Header = () => {
    const getRandomColor = () => {
        const r = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        return `rgb(${r},${b},${g})`
    }

    const [color, setColor] = useState(getRandomColor())

    useEffect(() => {
        const interval = setTimeout(() => {
            setColor(getRandomColor())
        }, 1000);

        return () => clearInterval(interval)
    }, [color])


    return (
        <div className='w-full text-white py-7 px-8 bg-transparent backdrop-blur-sm flex flex-col gap-2 items-center justify-between top-0 sticky z-50 md:flex-row'>
            <div className='flex items-center'>
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-3xl sm:mr-4 mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color }}><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                <div className='flex flex-col'>
                    <h3>Omkar Dafale</h3>
                    <p className='text-xs font-light text-gray-300 hidden md:block'>
                        <ReactTyped
                            strings={[
                                "Fullstack Developer",
                                "Frontend Developer",
                                "Backend Developer",
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            attr="placeholder"
                            loop
                        >
                            <input className='bg-[#0B0B0B] cursor-text' type="text" disabled />
                        </ReactTyped>
                    </p>
                </div>
            </div>
            <div className='relative border-none rounded-full gap-3 flex justify-between items-center bg-[#222222] p-0.5'>
                <NavLink to='/' className={({ isActive }) => `${isActive ? 'bg-black' : ''} rounded-full transition-all duration-500 ease-in-out `} href="/" aria-current="page">
                    <button className="relative text-md font-semibold rounded-full sm:px-4 px-3 py-2 md:text-lg">Home</button>
                </NavLink>
                <NavLink to='/work' className={({ isActive }) => `${isActive ? 'bg-black' : ''} rounded-full transition-all duration-500 ease-in-out `} href="/" aria-current="page">
                    <button className="relative text-md font-semibold rounded-full sm:px-4 px-3 py-2 md:text-lg">Work</button>
                </NavLink>
                <NavLink to='/about' className={({ isActive }) => `${isActive ? 'bg-black' : ''} rounded-full transition-all duration-500 ease-in-out `} href="/" aria-current="page">
                    <button className="relative text-md font-semibold rounded-full sm:px-4 px-3 py-2 md:text-lg">About</button>
                </NavLink>
                <NavLink to='/contact' className={({ isActive }) => `${isActive ? 'bg-black' : ''} rounded-full transition-all duration-500 ease-in-out `} href="/" aria-current="page">
                    <button className="relative text-md font-semibold rounded-full sm:px-4 px-3 py-2 md:text-lg">Contact</button>
                </NavLink>
            </div>
            <div className='flex items-center gap-3'>
                <div className='hidden items-center gap-2 md:flex'>
                    <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-100"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span></span>
                    <p className='text-green-500 text-sm'>Available</p>
                </div>
                <div className='gap-3 hidden lg:flex'>
                    <a href="https://www.linkedin.com/in/omkar-dafale-a51b14308/" target='_blank' className='bg-[#222222] rounded-full p-2 text-2xl hover:scale-75 transition-all duration-200'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                    </a>
                    <a href="https://www.instagram.com/omkardafale?igsh=MWFiYmQ1ZDhiNzVnbg%3D%3D&utm_source=qr"  target='_blank' className='bg-[#222222] rounded-full p-2 text-2xl hover:scale-75 transition-all duration-200'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path><circle cx="11.994" cy="11.979" r="3.003"></circle></svg>
                    </a> 
                    <a href="/Omkar_Dafale_Resume.pdf" download="Omkar_Dafale_Resume" className='bg-[#222222] rounded-full p-2 text-2xl hover:scale-75 transition-all duration-200'>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.69 11.86-3 2.86a.49.49 0 0 1-.15.1.54.54 0 0 1-.16.1.94.94 0 0 1-.76 0 1 1 0 0 1-.33-.21l-3-3a1 1 0 0 1 1.42-1.42l1.29 1.3V8a1 1 0 0 1 2 0v5.66l1.31-1.25a1 1 0 0 1 1.38 1.45z"></path></g></svg>              
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Header