import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="w-full bg-black/70 backdrop:blur-xl flex flex-col justify-center items-center mt-40 relative overflow-hidden bottom-0">
                <div className="    relative py-[100px] flex flex-col justify-center items-center">
                    <img src="https://uploads-ssl.webflow.com/64470065adf2a67f8abcbb4d/64470065adf2a6e95cbcbb99_planet-earth.png" className="max-w-sm absolute bottom-0 -left-full" />
                    <img src="https://uploads-ssl.webflow.com/64470065adf2a67f8abcbb4d/64470065adf2a60a31bcbbdf_space-men.png" className="sm:max-w-md max-w-lg absolute -top-8 bottom-0 sm:-right-[412px] -right-[360px] " />
                    <h5 className="text-white text-xl">Have an idea ?</h5>
                    <h1 className="text-white font-bold text-center sm:text-5xl text-3xl font-SpaceGrotesk">Let's talk about it</h1>
                    <div className="mt-3">
                        <Link to="/contact" >
                            <button className=" group relative font-thin text-white text-lg rounded-full bg-[#222222] px-6 py-2 hover:left-3 hover:top-3 text-center gap-3 flex items-center ">
                                Contact
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="opacity-50  group-hover:opacity-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path></svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </>
    )
}

export default Footer