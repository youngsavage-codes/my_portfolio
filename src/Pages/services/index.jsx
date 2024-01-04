import web_dev from '../../assets/icons/web_dev.png'
import app_dev from '../../assets/icons/app.png'
import sofware_dev from '../../assets/icons/software.png'
import redesign from '../../assets/icons/redesign.png'
import hosting from '../../assets/icons/hosting.png'
import debug from '../../assets/icons/debug.png'
import IT from '../../assets/icons/it.png'
import database from '../../assets/icons/database.png'

const List = ({title, image, desc}) => {
    return (
        <div className='group bg-gray-900 lg:w-[22%] rounded-lg overflow-hidden'>
            <div className=' py-10 px-3 group-hover:bg-orange-300'>
                <img src={image} className="w-20 mx-auto"/>
                <h3 className="text-center font-semibold text-xl text-white my-3 font-[Gabriola]">{title}</h3>
                <p className="text-center text-gray-500 group-hover:text-white">{desc}</p>
            </div>
        </div>
    )
}

const Services = () => {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-center h-full w-full py-28 lg:py-48">
            <div className="w-[90%] lg:w-[80%]">
                <div>
                    <h5 className="text-center font-semibold mb-3 text-gray-500 text-sm">HOME / SERVICES</h5>
                    <h2 className="text-center font-bold text-4xl text-white">What I Do?</h2>
                </div>

                <div className="flex items-center justify-between flex-wrap mt-20 gap-8">   
                    <List image={sofware_dev} title='Software Development' desc='Your business is one-of-a-kind, and so should be your software. I design and develop custom software solutions tailored to meet your specific requirements, ensuring a perfect fit for your operations.'/>
                    <List image={web_dev} title='Web Development' desc='Build robust web applications that deliver a seamless user experience. I focus on creating responsive, interactive, and scalable web solutions to cater to the diverse needs of modern businesses.'/>
                    <List image={app_dev} title='Mobile App Development' desc='Extend your digital reach with custom mobile applications for iOS and Android platforms. Whether its a consumer-facing app or an enterprise-level solution, I can transform your ideas into user-friendly and high-performance mobile experiences'/>
                    <List image={debug} title='Code Debugging' desc='Debugging is not just about fixing errors; its about solving problems. I thrive on dissecting complex code structures, identifying issues, and implementing effective solutions to enhance your softwares reliability.'/>
                    <List image={redesign} title='Website ReDesign' desc='Breathe new life into your online presence with a strategic redesign. I analyze your existing websites strengths and weaknesses to create a tailored plan for a comprehensive and effective transformation.'/>
                    <List image={hosting} title='Web Hosting' desc='Leverage cutting-edge hosting infrastructure designed for reliability. I provide a robust hosting environment that ensures your website is accessible and performs optimally around the clock.'/>
                    <List image={database} title='Database Admin' desc='Stay ahead of potential issues with proactive database management. I monitor, analyze, and optimize your databases to ensure they operate at peak performance, minimizing downtime and disruptions.'/>
                    <List image={IT} title='IT Support' desc='Detect and address issues before they impact your operations. With proactive system monitoring, I keep a vigilant eye on your IT infrastructure, ensuring optimal performance and minimizing downtime.'/>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Services