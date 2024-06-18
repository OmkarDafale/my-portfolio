import React, { useEffect, useRef, useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

    useEffect(() => {
        emailjs.init(import.meta.env.VITE_PUBLIC_KEY)
    }, [])

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const name = useRef('')
    const email = useRef('')
    const aboutCompany = useRef('')
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [aboutCompanyError, setAboutCompanyError] = useState(false)
    const [sent, setSent] = useState(false)


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        name.current.value.length == 0 ? setNameError(true) : setNameError(false)
        setEmailError(!validateEmail(email.current.value))
        aboutCompany.current.value.length == 0 ? setAboutCompanyError(true) : setAboutCompanyError(false)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        if (!nameError && !emailError && !aboutCompanyError) {
            setSent(true);
            setTimeout(() => {
                setSent(false);
            }, 4000);

            const nameEmail = name.current.value;
            const emailEmail = email.current.value;
            const aboutEmail = aboutCompany.current.value

            name.current.value = ''
            email.current.value = ''
            aboutCompany.current.value = ''
            
            try {
                await emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, {
                    name : nameEmail,
                    email: emailEmail,
                    about: aboutEmail
                })
            } catch (error) {
                console.log(error)
            }
            
        }
    }

    return (
        <div className='text-white w-full lg:px-32 xl:px-80 px-5 mt-10'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-5xl font-bold animate-Heading'>Contact</h1>
                <p className='animate-text'>
                    Please fill out the following form and we will get back to you within the next 24 hours to help you become even greater at what you do.
                </p>
            </div>
            <p className={`text-green-500 mt-5 ${sent ? "block" : "hidden"}`}>Thank you for reaching out! Your message has been successfully sent. We will get back to you shortly</p>
            <form className='top max-w-4xl space-y-16 pt-6 animateY' onSubmit={handleFormSubmit}>
                <div className="flex sm:flex-row flex-col w-full sm:gap-2 gap-5 items-center">
                    <div className="space-y-1 sm:w-1/2 w-full">
                        <p className="rounded-full border border-gray-600 opacity-90 bg-black w-5 text-center text-slate-400 font-SpaceGrotesk text-xs ">1</p>
                        <h2 className="font-semibold">What's your name?</h2>
                        <p className="opacity-50 font-medium text-xs flex gap-1 items-center"><span className='text-red-500 font-bold'>*</span> REQUIRED</p>
                    </div>
                    <div className="sm:w-1/2 w-full">
                        <input type="text" className="w-full bg-[#171717] rounded-full  px-4 py-2 outline-none hover:bg-[##2B2B2B]" placeholder="Type your full name" name="name" ref={name} />
                        <span className={`text-red-500 pl-5 text-sm ${nameError ? 'block' : 'hidden'}`}>name is required</span>
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col w-full sm:gap-2 gap-5 items-center">
                    <div className="space-y-1 sm:w-1/2 w-full">
                        <p className="rounded-full border border-gray-600 opacity-90 bg-black w-5 text-center text-slate-400 font-SpaceGrotesk text-xs ">2</p>
                        <h2 className="font-semibold">What is your email address?</h2>
                        <p className="opacity-50 font-medium text-xs flex gap-1 items-center"><span className='text-red-500 font-bold'>*</span> REQUIRED</p>
                    </div>
                    <div className="sm:w-1/2 w-full">
                        <input type="text" className="w-full bg-[#171717] rounded-full  px-4 py-2 outline-none hover:bg-[##2B2B2B]" placeholder="Type your email address" name="email" ref={email} />
                        <span className={`text-red-500 pl-5 text-sm ${emailError ? "block" : "hidden"}`}>enter valid email</span>

                    </div>
                </div>
                <div className="flex sm:flex-row flex-col w-full sm:gap-2 gap-5 items-center">
                    <div className="space-y-1 sm:w-1/2 w-full">
                        <p className="rounded-full border border-gray-600 opacity-90 bg-black w-5 text-center text-slate-400 font-SpaceGrotesk text-xs ">3</p>
                        <h2 className="font-semibold">Can you tell me about your company in a few words?</h2>
                        <p className="opacity-50 font-medium text-xs flex gap-1 items-center"><span className='text-red-500 font-bold'>*</span> REQUIRED</p>
                    </div>
                    <div className="sm:w-1/2 w-full">
                        <textarea type="text" rows="8" className="w-full bg-[#171717] rounded-lg px-4 py-2 outline-none hover:bg-[##2B2B2B]" placeholder="Type your answer here..." name="aboutCompany" ref={aboutCompany} />
                        <span className={`text-red-500 pl-5 text-sm ${aboutCompanyError ? "block" : "hidden"}`}>this field is required</span>
                    </div>
                </div>
                <div className='w-full flex justify-end group'>
                    <button className='bg-green-500 rounded-full px-5 py-3 flex items-center gap-1 group-hover:scale-110'>Send Message
                        <span><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-gray opacity-50 group-hover:scale-110 group-hover:opacity-100" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"></path></svg>
                        </span>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Contact