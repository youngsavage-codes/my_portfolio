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
        <div className='bg-gray-900 lg:w-[22%] py-10 px-3 rounded-lg hover:bg-orange-300'>
            <img src={image} className="w-20 mx-auto"/>
            <h3 className="text-center font-semibold text-xl text-white my-3 font-[Gabriola]">{title}</h3>
            <p className="text-center text-gray-500 hover:text-white">{desc}</p>
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
                    <List image={sofware_dev} title='Software Development' desc='Far far away, behind the world mountain, far from the countries Vocalia and Consonantia, there ived a blind text'/>
                    <List image={web_dev} title='Web Development' desc='Far far away, behind the world mountain, far from the countries Vocalia and Consonantia, there ived a blind text'/>
                    <List image={app_dev} title='Mobile App Development' desc='Far far away, behind the world mountain, far from the countries Vocalia and Consonantia, there ived a blind text'/>
                    <List image={debug} title='Code Debugging' desc='Far far away, behind the world mountain, far from the countries Vocalia and Consonantia, there ived a blind text'/>
                    <List image={redesign} title='Website ReDesign' desc='Far far away, behind the world mountain, far from the countries Vocalia and Consonantia, there ived a blind text'/>
                    <List image={hosting} title='Web Hosting' desc='Far far away, behind the world mountain, far from the countries Vocalia and Consonantia, there ived a blind text'/>
                    <List image={database} title='Database Admin' desc='Far far away, behind the world mountain, far from the countries Vocalia and Consonantia, there ived a blind text'/>
                    <List image={IT} title='IT Support' desc='Far far away, behind the world mountain, far from the countries Vocalia and Consonantia, there ived a blind text'/>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Services