import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className='w-full flex flex-col px-4 space-y-3 mt-10 md:mt-20 items-center text-white gap-5 transition-all duration-200'>
            <div className='max-w-4xl'>
                <h1 className='text-4xl md:text-7xl font-bold animate-Heading'>
                    Fullstack Web Developer from <span className='text-[#C9BB94]'>Pune</span></h1>
            </div>
            <div className='max-w-4xl'>
                <p className='text-justify animate-text'>
                    I create websites and applications that not only look fantastic but also function seamlessly. Whether it's developing innovative apps, or diving into the latest web technologies, I'm all in. Let's connect and turn your ideas into digital reality!
                </p>
            </div>
            <div className='className=" text-white md:w-[46rem] lg:w-[56rem] flex justify-start gap-5 pt-6"'>
                <Link to='/about' className=' relative bg-[#222222] py-3 px-5 rounded-full hover:bottom-3 hover:left-2 flex items-center gap-2 group transition-all delay-500'>
                    Read More
                    <span className=''>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-gray opacity-50 group-hover:scale-110 group-hover:opacity-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path></svg>
                    </span>
                </Link>
                <Link to='/contact' className='border-2 border-white py-3 px-5 rounded-full hover:underline' >Contact</Link>
            </div>
        </div>
    )
}

export default Hero