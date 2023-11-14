import React from 'react'
import { Link } from 'react-router-dom'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'
import project4 from '../../assets/project4.png'

const Project = ({image, title, desc, link, to, date}) => {
  return (
    <div className='bg-gray-900 lg:w-[22%] rounded-lg  pb-5 overflow-hidden'>
      <div className='h-44'>
        <img src={image} className='w-full h-full'/>
      </div>
      
      <div className='pt-2 pb-4 px-3'>
        <h2 className="text-center font-semibold text-xl text-white my-3 font-[Gabriola]">{title}</h2>
        <p className="text-center text-gray-500 ">{desc}</p>
      </div>

      <div className='flex items-center justify-between px-5'>
        <p className='text-white text-xs'>{date}</p>
        <button className='text-white bg-orange-300 p-2 px-4 text-xs rounded-lg'><Link to={to} target='blank'>{link}</Link></button>
      </div>
    </div>
  )
}

const Portfolio = () => {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-center h-full w-full py-28 lg:py-48">
            <div className="w-[90%] lg:w-[80%]">
                <div>
                    <h5 className="text-center font-semibold mb-3 text-gray-500 text-sm">HOME / WORK</h5>
                    <h2 className="text-center font-bold text-4xl text-white">Portfolio</h2>
                </div>

                <div className="flex items-center justify-between flex-wrap mt-20 gap-8">  
                  <Project to='https://code-warriors80.github.io/school_site/' image={project1} title='School Website' date='4th April 2022' link='View Site' desc='Far far away, behind the world mountain, far from the countries Vocalia and Consonantia, there ived a blind text'/>
                  <Project to=' https://code-warriors80.github.io/gym_website/' image={project2} title='Gym Website' date='4th April 2022' link='View Site' desc='Far far away, behind the world mountain, far from the countries Vocalia and Consonantia, there ived a blind text'/>
                  <Project to='https://youngsavage-codes.github.io/Crypto_Splash/' image={project3} title='Crypto Website' date='4th April 2022' link='View Site' desc='Far far away, behind the world mountain, far from the countries Vocalia and Consonantia, there ived a blind text'/>
                  <Project to='https://code-warriors80.github.io/website/' image={project4} title='Code_Wariors Website' date='4th April 2022' link='View Site' desc='Far far away, behind the world mountain, far from the countries Vocalia and Consonantia, there ived a blind text'/>
                  <Project to='www.google.com' image={project1} title="Ree's Kitchen App" date='4th April 2022' link='Download App' desc='Far far away, behind the world mountain, far from the countries Vocalia and Consonantia, there ived a blind text'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio