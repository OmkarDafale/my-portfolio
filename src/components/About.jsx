import React from 'react'

const About = () => {
    return (
        <div className='max-w-full flex flex-col items-center px-5'>
            <div className='text-[#ADADAD] max-w-5xl'>
                <h1 className='text-5xl font-bold animate-Heading text-white'>About Me</h1>
                <p className='text-justify mt-5 text-lg animate-text'>
                    My name is <span className='text-orange-500'>Omkar Dafale </span>, a passionate <span className='text-purple-500'>FullStack Web developer</span>  based in Pune with 2 years of experience. At 24 years old, I enjoy developing projects and bringing impactful ideas to life. I aim to help you build and strengthen your online brand with top-notch web applications and websites.

                    I have an entrepreneurial mindset, which makes me adaptable and goal-oriented. I believe in focusing on specific areas to achieve expertise and deliver quality results.
                </p>
                <div className='animateY'>

                    <h1 className='text-2xl font-bold text-white mt-5'>
                        Work Experience
                    </h1>
                    <p className='text-justify mt-5 text-lg'>
                        Over 2 years of experience as a full-stack developer specializing in front-end and back-end development with a strong foundation in modern web technologies. Proficient in developing dynamic, responsive, and interactive user interfaces using React.js, JavaScript, HTML, and CSS/Tailwind CSS. Expertise in backend development with Node.js and Express, creating robust RESTful APIs and managing server-side logic. Skilled in database design and management with SQL, PostgreSQL, and MongoDB, ensuring efficient data storage and retrieval. Experience in collaborating with cross-functional teams as well as USA clients to deliver high-quality software solutions.
                    </p>

                    <h1 className='text-2xl font-bold text-white mt-5'>
                        Companies Worked At:
                    </h1>
                    <p className=''>
                        <span className='underline'>Persistent Systems</span> : Software Engineer from <span className='text-purple-500'>June-2022 to June-2024</span>
                    </p>
                    <p className=''>
                    <span className='underline'>Persistent Systems</span> : Intern from <span className='text-purple-500'>Jan-2022 to June-2022</span>
                    </p>

                    <h1 className='text-2xl font-bold text-white mt-5'>Work policy</h1>
                    <p className='text-justify mt-5 text-lg'>I spend most of my time in front of laptop developing and learning.</p>
                </div>
            </div>
        </div>

    )
}

export default About