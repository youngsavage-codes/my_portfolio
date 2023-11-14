const Skills = ({title, percent}) => {
    return (
      <div className="w-full lg:w-[31%]">
        <div className="flex items-center justify-between">
          <p className="text-white">{title}</p>
          <p className="text-white">{percent}</p>
        </div>
        <progress className="w-[100%] h-2"></progress>
      </div>
    )
  }
  
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
                <div className="shadow w-full lg:w-[48%] py-16 bg-gray-900 rounded-lg">
                  <h1 className="text-center text-5xl font-extrabold font-[Gabriola] text-orange-300">10</h1>
                  <p className="text-center text-white">Happy Clients</p>
                </div>
  
                <div className="shadow w-full lg:w-[48%] py-16 bg-gray-900 rounded-lg">
                  <h1 className="text-center text-5xl font-extrabold font-[Gabriola] text-orange-300">10</h1>
                  <p className="text-center text-white">Project Done</p>
                </div>
  
                <div className="shadow w-full lg:w-[48%] py-16 bg-gray-900 rounded-lg">
                  <h1 className="text-center text-5xl font-extrabold font-[Gabriola] text-orange-300">10</h1>
                  <p className="text-center text-white">Cup of Coffie</p>
                </div>
  
                <div className="shadow w-full lg:w-[48%] py-16 bg-gray-900 rounded-lg">
                  <h1 className="text-center text-5xl font-extrabold font-[Gabriola] text-orange-300">10</h1>
                  <p className="text-center text-white">Working Horse</p>
                </div>
              </div>
  
              <div className="w-full lg:w-[50%]">
                <h5 className="text-orange-300 text-sm">ABOUT ME</h5>
                <h2 className="font-extrabold font-[Gabriola] text-3xl lg:text-5xl my-4 text-white">A UI/UX Designer & Web Developer Based In Nigeria</h2>
                <p className="text-gray-500 font-thin">Far far away, behind the world mountain, far from the countries Vocalia and Consonantia, there ived a blind text</p>
                
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
                      <td className="text-sm text-gray-500">04th April 2001</td>
                    </tr>
                    <tr>
                      <th className="float-left py-2 text-sm text-white">Address:</th>
                      <td className="text-sm text-gray-500"></td>
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
                <Skills title='HTML' percent='30%'/>
                <Skills title='CSS' percent='30%'/>
                <Skills title='JAVASCRIPT (ES6)' percent='30%'/>
                <Skills title='React Js' percent='30%'/>
                <Skills title='React Native' percent='30%'/>
                <Skills title='Typescript' percent='30%'/>
                <Skills title='Node Js' percent='30%'/>
                <Skills title='Express' percent='30%'/>
                <Skills title='Mongo Db' percent='30%'/>
                <Skills title='PHP' percent='30%'/>
                <Skills title='Mysqli' percent='30%'/>
                <Skills title='Python' percent='30%'/>
                <Skills title='Tailwind Css' percent='30%'/>
                <Skills title='Bootstrap' percent='30%'/>
                <Skills title='Github/Git' percent='30%'/>
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }
  
  export default About