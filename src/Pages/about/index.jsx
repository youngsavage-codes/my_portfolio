import React, {useState, useEffect} from "react";
import SkillProgress from "../../components/skillProgress"
import satisfaction  from '../../assets/icons/satisfaction.png'
import task  from '../../assets/icons/task-management.png'
import skills  from '../../assets/icons/capacity.png'
import time  from '../../assets/icons/deadline.png'

const skillsData = [
  { skill: 'HtTML 5', progress: 90 },
  { skill: 'CSS 3', progress: 83 },
  { skill: 'Tailwind', progress: 80 },
  { skill: 'JavaScript', progress: 70 },
  { skill: 'PHP', progress: 60 },
  { skill: 'React', progress: 80 },
  { skill: 'React Native', progress: 68 },
  { skill: 'Next Js', progress: 60 },
  { skill: 'Typescript', progress: 55 },
  { skill: 'Node js', progress: 70 },
  { skill: 'Express', progress: 50 },
  { skill: 'MongoDB', progress: 50 },
  { skill: 'Mysql', progress: 70 },
];

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the count until it reaches the target value
      if (count < initialValue) {
        setCount((prevCount) => prevCount + 1);
      } else {
        // Clear the interval once the count reaches the target value
        clearInterval(intervalId);
      }
    }, 50); // Adjust the interval duration as needed

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [count, initialValue]); // Include count and initialValue in the dependency array

  // Return the count from the Counter component
  return count;
};
  
  const About = () => {
    return (
      <div className="bg-black">
        <div className="flex items-center justify-center h-full w-full py-28 lg:py-48">
          <div className="w-[90%] lg:w-[80%]">
            <div>
              <h5 className="text-center font-semibold mb-3 text-gray-500 text-sm">HOME / ABOUT </h5>
              <h2 className="text-center font-bold text-4xl text-white">About Us</h2>
            </div>
            <div className="flex items-start justify-between flex-wrap-reverse lg:flex-nowrap gap-10 my-20">
              <div className="w-full lg:w-[50%] flex items-center justify-between flex-wrap gap-5">
                <div className="shadow w-full lg:w-[48%] py-12 bg-gray-900 rounded-lg">
                  <img src={satisfaction} alt="" className="w-20 mx-auto"/>
                  <h1 className="text-center text-5xl font-extrabold font-[Gabriola] text-orange-300"><Counter initialValue={10}/></h1>
                  <p className="text-center text-white">Happy Clients</p>
                </div>
  
                <div className="shadow w-full lg:w-[48%] py-12 bg-gray-900 rounded-lg">
                  <img src={task} alt="" className="w-20 mx-auto"/>
                  <h1 className="text-center text-5xl font-extrabold font-[Gabriola] text-orange-300"><Counter initialValue={6}/></h1>
                  <p className="text-center text-white">Project Done</p>
                </div>
  
                <div className="shadow w-full lg:w-[48%] py-12 bg-gray-900 rounded-lg">
                  <img src={skills} alt="" className="w-20 mx-auto"/>
                  <h1 className="text-center text-5xl font-extrabold font-[Gabriola] text-orange-300"><Counter initialValue={skillsData.length}/></h1>
                  <p className="text-center text-white">My Skills</p>
                </div>
  
                <div className="shadow w-full lg:w-[48%] py-12 bg-gray-900 rounded-lg">
                  <img src={time} alt="" className="w-20 mx-auto"/>
                  <h1 className="text-center text-5xl font-extrabold font-[Gabriola] text-orange-300"><Counter initialValue={4}/></h1>
                  <p className="text-center text-white">Working Hours</p>
                </div>
              </div>
  
              <div className="w-full lg:w-[50%]">
                <h5 className="text-orange-300 text-sm">ABOUT ME</h5>
                <h2 className="font-extrabold font-[Gabriola] text-3xl lg:text-5xl my-4 text-white">A Mobile & Web Developer Based In Nigeria</h2>
                <p className="text-gray-500 font-thin">My Name is ogala Muctar mohammed. Am a Nigerian based full stack developer with 4 years of experience on frontend and backend web and mobile application</p>
                
                <div className="flex items-center justify-between w-full my-5 flex-wrap lg:flex-nowrap">
                  <table className="w-[70%]">
                    <tr>
                      <th className="float-left py-2 text-sm text-white">Name:</th>
                      <td className="text-sm text-gray-500">Ogala Mohammed</td>
                    </tr>
                    <tr>
                      <th className="float-left py-2 text-sm text-white">DOB:</th>
                      <td className="text-sm text-gray-500">04th April 2001</td>
                    </tr>
                    <tr>
                      <th className="float-left py-2 text-sm text-white">Address:</th>
                      <td className="text-sm text-gray-500">Zaria Kaduna state, Nigeria</td>
                    </tr>
                  </table>
                  <table className="w-[60%]">
                    <tr>
                      <th className="float-left py-2 text-sm text-white">Email:</th>
                      <td className="text-sm text-gray-500">MuctarMohammed07@gmail.com</td>
                    </tr>
                    <tr>
                      <th className="float-left py-2 text-sm text-white">Phone:</th>
                      <td className="text-sm text-gray-500">+234 904 925 5784</td>
                    </tr>
                    <tr>
                      <th className="float-left py-2 text-sm text-white">Country</th>
                      <td className="text-sm text-gray-500">Nigeria</td>
                    </tr>
                  </table>
                </div>
                <button className="bg-orange-300 p-4 px-6 shadow text-white text-sm lg:font-semibold uppercase rounded-lg">DOWNLOAD CV</button>
              </div>
            </div>
  
            <section>
              <div>
                <h5 className="text-center font-semibold mb-3 text-orange-300 text-sm">Skills</h5>
                <h2 className="text-center font-bold text-4xl text-white">My Skills</h2>
              </div>
  
              <div className="flex items-center justify-between flex-wrap gap-7 mt-20">
                  {skillsData.map((skill, index) => (
                    <SkillProgress key={index} skill={skill.skill} progress={skill.progress} />
                  ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
  
  export default About