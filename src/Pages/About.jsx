import React from 'react'
import profile from '../assets/profile.png'

const About = () => {
    return (
        <div className='flex flex-col gap-5 text-justify mx-auto'>

                <h1 className='text-2xl md:text-3xl font-bold mb-8 text-[#4dd0e4f2]'>
                    About Me
                </h1>


                <div className='md:flex gap-10 items-center'>

                    <img src={profile} alt="profile-image" className="w-44 h-64 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-lg mx-auto md:mx-0 shadow-lg" />

                    <div className='flex flex-col gap-10'>
                        <p>
                            <span className='font-bold text-3xl text-[#56d9fef2]'>H</span>ello! I'm Naveen, a dedicated and enthusiastic web developer with a
                            deep passion for coding and building innovative solutions. I thrive on
                            the challenge of transforming ideas into functional, user-friendly web applications.
                            My journey in the tech world is driven by a constant desire to learn and grow,
                            embracing new technologies and methodologies to stay at the forefront of web development.
                        </p>

                        <p >
                            I believe in the power of collaboration and the magic of creating something amazing together.
                            If you're looking for someone who is eager to bring fresh ideas to the table, work seamlessly in a team,
                            and contribute positively to your projects, let's connect! Together,
                            we can turn visions into reality and embark on exciting new ventures.
                        </p>
                    </div>
                </div>

            </div>
    )
}

export default About