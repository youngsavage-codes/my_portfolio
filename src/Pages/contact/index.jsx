import { Link } from "react-router-dom"
import imag from '../../assets/sofware-developer-thinking-while-touching-beard-while-typing-laptop-sitting-desk-with-multiple-screens-parsing-code-focused-database-admin-working-with-team-coding-background.jpg'

const Contact = () => {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-center h-full w-full py-28 lg:py-48">
            <div className="w-[90%] lg:w-[80%]">
                <div>
                    <h5 className="text-center font-semibold mb-3 text-gray-500 text-sm">HOME / CONTACT</h5>
                    <h2 className="text-center font-bold text-4xl text-white">Contact Us</h2>
                </div>

                <div className="text-white flex items-center justify-between lg:flex-nowrap flex-wrap gap-5 lg:gap-0 mt-20">
                  <div className="text-center w-full">
                    <h1 className="text-xl font-bold uppercase mb-5 font-[Gabriola]">Address</h1>
                    <p className="text-base font-thin text-gray-400">Samaru, Zaria Kaduna state, Nigeria.</p>
                  </div>
                  <div className="text-center w-full">
                    <h1 className="text-xl font-bold uppercase mb-5 font-[Gabriola]">Contact Number</h1>
                    <p className="text-base font-thin text-gray-400">+234 904 925 5784</p>
                  </div>
                  <div className="text-center w-full">
                    <h1 className="text-xl font-bold uppercase mb-5 font-[Gabriola]">Email</h1>
                    <p className="text-base font-thin text-gray-400">Muctarmohammed07@gmail.com</p>
                  </div>
                  <div className="text-center w-full">
                    <h1 className="text-xl font-bold uppercase mb-5 font-[Gabriola]">Website</h1>
                    <p className="font-thin text-base text-gray-400">Coming Soon</p>
                  </div>
                </div>

                <div className="flex justify-between flex-wrap text-white mt-20">
                  <div className="w-full lg:w-[50%] bg-gray-900 p-16 rounded-lg rounded-tl-lg rounded-bl-lg">
                    <h2 className="text-2xl font-bold">Contact Us</h2>
                    <p className="py-5 font-[Gabriola]">We're Open For Suggestion or just a chat</p>

                    <form action="">
                      <div className="w-full border-b-[1px] border-gray-500 my-3">
                        <input type="text" placeholder="Name" className="w-full bg-transparent py-2 outline-none font-[Gabriola]"/>
                      </div>
                      <div className="w-full border-b-[1px] border-gray-500 my-3">
                        <input type="email" placeholder="Email" className="w-full bg-transparent py-2 outline-none font-[Gabriola]"/>
                      </div>
                      <div className="w-full border-b-[1px] border-gray-500 my-3">
                        <input type="text" placeholder="Subject" className="w-full bg-transparent py-2 outline-none font-[Gabriola]"/>
                      </div>
                      <div className="w-full border-b-[1px] border-gray-500 my-3">
                        <textarea name="" id="" cols="30" rows="10" placeholder="Create A Message Here" className="w-full bg-transparent py-2 h-32 outline-none resize-y font-[Gabriola]"></textarea>
                      </div>
                      <button className="bg-orange-300 p-4 px-6 shadow text-white text-sm lg:font-semibold uppercase my-8 rounded-lg">SEND MESSAGE</button>
                    </form>

                    <div>
                      <h2 className="text-lg">Follow Us Here</h2>
                      <div className="flex gap-5 mt-2 font-[Gabriola]">
                        <Link to='https://www.facebook.com/profile.php?id=100087247520983'>FACEBOOK</Link>
                        <Link to=''>INSTAGRAM</Link>
                        <Link to='https://github.com/youngsavage-codes'>GITHUB</Link>
                      </div>
                    </div>

                  </div>
                  <div className="w-full lg:w-[50%] overflow-hidden rounded-tr-lg rounded-br-lg">
                    <img src={imag} alt="" className="w-full h-full object-cover"/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact