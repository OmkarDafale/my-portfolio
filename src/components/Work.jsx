import React from 'react'

const Work = () => {
  return (
    <div className='text-white max-w-full mt-10 flex flex-col items-center'>
      <div className='max-w-5xl px-10 mb-10'>
        <h1 className='text-5xl font-bold animate-Heading'>Projects</h1>
        <p className='animate-text'>Identity and Access Management Platform for a Leading Global Pharmacy.</p>
        <div className='animateY'>
          <h1 className='text-2xl font-bold opacity-90 mt-5 mb-5 '>Responsibilities and Achievements:</h1>
          <ul className='list-disc space-y-4'>
            <li className='text-justify'>
              <span className='underline'>Front-End Development</span> : Created dynamic and responsive user interfaces using React.js and Redux, ensuring cross-browser compatibility and an intuitive user experience.
            </li>
            <li className='text-justify'>
              <span className='underline'>Back-End Development</span> : Built and maintained robust APIs with Node.js and Express.js, handling data processing and business logic efficiently.
            </li>
            <li className='text-justify'>
              <span className='underline'>Database Management</span> : PostgreSQL queries to ensure high performance and data integrity.
            </li>
            <li className='text-justify'>
              <span className='underline'>API Integration</span> : Developed and consumed RESTful APIs to facilitate seamless data exchange between the front end and back end.
            </li>
            <li className='text-justify'>
              <span className='underline'>Testing and Quality Assurance</span> : Implemented automated tests using Jest, resulting in a 20% reduction in bugs and ensuring high code quality.
            </li>
            <li className='text-justify'>
              <span className='underline'>Collaboration</span> : Worked closely with cross-functional teams in an Agile environment, participating in daily stand-ups, sprint planning, and retrospectives to ensure timely delivery of features.
            </li>
            <li className='text-justify'>
              <span className='underline'>Problem Solving</span> : Diagnosed and resolved both minor and critical bugs, enhancing the application's stability and user satisfaction.
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full">
        <h1 class="sm:text-5xl text-4xl font-SpaceGrotesk font-bold sm:py-4 text-white px-5 xl:px-52 lg:px-40 md:px-32">Tech Stack </h1>
        <h2 class="sm:text-3xl text-2xl font-HedvigLettersSans font-bold text-white px-5 xl:px-52 lg:px-40 md:px-32 opacity-60">Frontend</h2>
        <div class="max-w-full my-5 flex justify-center items-center mx-3 ">
          <div class="md:w-3/4 w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            <div class="max-w-full  rounded-2xl bg-black hover:bg-[#222222] opacity-95 hover:opacity-100 flex items-center justify-start hover:cursor-pointer relative hover:bottom-1 pl-0.5">
              <img src="/js.png" class="w-16" />
              <div class="flex flex-col w-full ">
                <h1 class="text-white text-md font-HedvigLettersSans font-normal">Javascript</h1>
                <p class="text-white font-mono opacity-50 font-extralight">Development</p>
              </div>
            </div>
            <div class="max-w-full  rounded-2xl bg-black hover:bg-[#222222] opacity-95 hover:opacity-100 flex items-center justify-start hover:cursor-pointer relative hover:bottom-1 pl-0.5">
              <img src="/reactjs.png" class="w-16" />
              <div class="flex flex-col w-full ">
                <h1 class="text-white text-md font-HedvigLettersSans font-normal">ReactJS</h1>
                <p class="text-white font-mono opacity-50 font-extralight">Framework</p>
              </div>
            </div>
            <div class="max-w-full  rounded-2xl bg-black hover:bg-[#222222] opacity-95 hover:opacity-100 flex items-center justify-start hover:cursor-pointer relative hover:bottom-1 pl-0.5">
              <img src="/redux.png" class="w-16" />
              <div class="flex flex-col w-full ">
                <h1 class="text-white text-md font-HedvigLettersSans font-normal">Redux</h1>
                <p class="text-white font-mono opacity-50 font-extralight">Library</p>
              </div>
            </div>
            <div class="max-w-full  rounded-2xl bg-black hover:bg-[#222222] opacity-95 hover:opacity-100 flex items-center justify-start hover:cursor-pointer relative hover:bottom-1 pl-0.5">
              <img src="/react-router.png" class="w-16" />
              <div class="flex flex-col w-full ">
                <h1 class="text-white text-md font-HedvigLettersSans font-normal">ReactRouter</h1>
                <p class="text-white font-mono opacity-50 font-extralight">Routing</p>
              </div>
            </div>
            <div class="max-w-full  rounded-2xl bg-black hover:bg-[#222222] opacity-95 hover:opacity-100 flex items-center justify-start hover:cursor-pointer relative hover:bottom-1 pl-0.5">
              <img src="/tailwind.png" class="w-16" />
              <div class="flex flex-col w-full ">
                <h1 class="text-white text-md font-HedvigLettersSans font-normal">Tailwind</h1>
                <p class="text-white font-mono opacity-50 font-extralight">CSSFramework</p>
              </div>
            </div>
            <div class="max-w-full  rounded-2xl bg-black hover:bg-[#222222] opacity-95 hover:opacity-100 flex items-center justify-start hover:cursor-pointer relative hover:bottom-1 pl-0.5">
              <img src="/html5.png" class="w-16" />
              <div class="flex flex-col w-full ">
                <h1 class="text-white text-md font-HedvigLettersSans font-normal">Html</h1>
                <p class="text-white font-mono opacity-50 font-extralight"></p>
              </div>
            </div>
            <div class="max-w-full rounded-2xl bg-black hover:bg-[#222222] opacity-95 hover:opacity-100 flex items-center justify-start hover:cursor-pointer relative hover:bottom-1 pl-0.5">
              <img src="/css.png" class="w-16" />
              <div class="flex flex-col w-full ">
                <h1 class="text-white text-md font-HedvigLettersSans font-normal">CSS</h1>
                <p class="text-white font-mono opacity-50 font-extralight"></p>
              </div>
            </div>
          </div>
        </div>
        <h2 class="sm:text-3xl text-2xl font-HedvigLettersSans font-bold text-white px-5 xl:px-52 lg:px-40 md:px-32 opacity-60">Backend</h2>
        <div class="max-w-full my-5 flex justify-center items-center mx-3 ">
          <div class="md:w-3/4 w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            <div class="max-w-full  rounded-2xl bg-black hover:bg-[#222222] opacity-95 hover:opacity-100 flex items-center justify-start hover:cursor-pointer relative hover:bottom-1 pl-0.5">
              <img src="/nodejs.png" class="w-16" />
              <div class="flex flex-col w-full ">
                <h1 class="text-white text-md font-HedvigLettersSans font-normal">NodeJS</h1>
                <p class="text-white font-mono opacity-50 font-extralight">Development</p>
              </div>
            </div>
            <div class="max-w-full  rounded-2xl bg-black hover:bg-[#222222] opacity-95 hover:opacity-100 flex items-center justify-start hover:cursor-pointer relative hover:bottom-1 pl-0.5">
              <img src="/js.png" class="w-16" />
              <div class="flex flex-col w-full ">
                <h1 class="text-white text-md font-HedvigLettersSans font-normal">Express</h1>
                <p class="text-white font-mono opacity-50 font-extralight">NodeJS Framework</p>
              </div>
            </div>
            <div class="max-w-full  rounded-2xl bg-black hover:bg-[#222222] opacity-95 hover:opacity-100 flex items-center justify-start hover:cursor-pointer relative hover:bottom-1 pl-0.5">
              <img src="/postman.png" class="w-16" />
              <div class="flex flex-col w-full ">
                <h1 class="text-white text-md font-HedvigLettersSans font-normal">Postman</h1>
                <p class="text-white font-mono opacity-50 font-extralight"></p>
              </div>
            </div>
          </div>
        </div>

        <h2 class="sm:text-3xl text-2xl font-HedvigLettersSans font-bold text-white px-5 xl:px-52 lg:px-40 md:px-32 opacity-60">Database</h2>
        <div class="max-w-full my-5 flex justify-center items-center mx-3 ">
          <div class="md:w-3/4 w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            <div class="max-w-full  rounded-2xl bg-black hover:bg-[#222222] opacity-95 hover:opacity-100 flex items-center justify-start hover:cursor-pointer relative hover:bottom-1 pl-0.5">
              <img src="/mongodb.png" class="w-16" />
              <div class="flex flex-col w-full ">
                <h1 class="text-white text-md font-HedvigLettersSans font-normal">MongoDB</h1>
                <p class="text-white font-mono opacity-50 font-extralight"></p>
              </div>
            </div>
            <div class="max-w-full  rounded-2xl bg-black hover:bg-[#222222] opacity-95 hover:opacity-100 flex items-center justify-start hover:cursor-pointer relative hover:bottom-1 pl-0.5">
              <img src="/mysql.png" class="w-16" />
              <div class="flex flex-col w-full ">
                <h1 class="text-white text-md font-HedvigLettersSans font-normal">mySql</h1>
                <p class="text-white font-mono opacity-50 font-extralight"></p>
              </div>
            </div>
            <div class="max-w-full  rounded-2xl bg-black hover:bg-[#222222] opacity-95 hover:opacity-100 flex items-center justify-start hover:cursor-pointer relative hover:bottom-1 pl-0.5">
              <img src="/postgresql.png" class="w-16" />
              <div class="flex flex-col w-full ">
                <h1 class="text-white text-md font-HedvigLettersSans font-normal">PostgreSql</h1>
                <p class="text-white font-mono opacity-50 font-extralight"></p>
              </div>
            </div>
          </div>
        </div>


        <h2 class="sm:text-3xl text-2xl font-HedvigLettersSans font-bold text-white px-5 xl:px-52 lg:px-40 md:px-32 opacity-60">Tools</h2>
        <div class="max-w-full my-5 flex justify-center items-center mx-3 ">
          <div class="md:w-3/4 w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            <div class="max-w-full  rounded-2xl bg-black hover:bg-[#222222] opacity-95 hover:opacity-100 flex items-center justify-start hover:cursor-pointer relative hover:bottom-1 pl-0.5">
              <img src="/git.png" class="w-16" />
              <div class="flex flex-col w-full ">
                <h1 class="text-white text-md font-HedvigLettersSans font-normal">Git</h1>
                <p class="text-white font-mono opacity-50 font-extralight">VersionControl</p>
              </div>
            </div>
            <div class="max-w-full  rounded-2xl bg-black hover:bg-[#222222] opacity-95 hover:opacity-100 flex items-center justify-start hover:cursor-pointer relative hover:bottom-1 pl-0.5">
              <img src="/vs.png" class="w-16" />
              <div class="flex flex-col w-full ">
                <h1 class="text-white text-md font-HedvigLettersSans font-normal">VsCode</h1>
                <p class="text-white font-mono opacity-50 font-extralight">Editor</p>
              </div>
            </div>
            <div class="max-w-full  rounded-2xl bg-black hover:bg-[#222222] opacity-95 hover:opacity-100 flex items-center justify-start hover:cursor-pointer relative hover:bottom-1 pl-0.5">
              <img src="/saviynt.png" class="w-16" />
              <div class="flex flex-col w-full ">
                <h1 class="text-white text-md font-HedvigLettersSans font-normal">Saviynt</h1>
                <p class="text-white font-mono opacity-50 font-extralight">IAM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work