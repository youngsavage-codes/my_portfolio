// import image from '../assets/355781565_688747116528788_3953233516169405778_n.jpg'
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
// import homeimg from '../../assets/home.png'


const Home = () => {
  return (
    <div className="h-[100vh] w-full bg-black">
      <div className="flex justify-between  flex-wrap h-full">
        <div className="w-full lg:w-[50%] h-full flex items-center justify-center">
          <div className="lg:w-[65%] text-center lg:text-left px-2 lg:px-0 w-full">
            <h4 className="text-orange-300 font-semibold text-md uppercase">Mobile & Web Developer</h4>
            <h2 className="text-6xl lg:text-8xl font-extrabold font-[Gabriola] my-5 leading-tight text-white">I'm Ogala Mohammed</h2>
            <div className='flex items-center justify-center lg:justify-start gap-3'>
              <button className="bg-orange-300 p-4 px-6 shadow text-white text-sm lg:font-semibold uppercase rounded-lg flex items-center gap-2"><Link to='/about'>More About Me</Link><FaArrowRight /></button>
              <button className="p-4 px-6 shadow lg:font-semibold text-sm uppercase bg-white rounded-lg flex items-center gap-2"><Link>Hire Me</Link> <FaArrowRight /></button>
            </div>
          </div>
        </div>
        <div className="bg-orange-300 lg:w-[50%] h-full flex items-end justify-center w-full">
            {/* <img src={homeimg} className='w-[90%] h-[90%]'/> */}
        </div>
      </div>
    </div>
  )
}

export default Home