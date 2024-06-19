import face from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import twvi from '../assets/twitter.png'
import lined from '../assets/linkedin.png'


const Footer = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4  mx-auto text-white">
        <div className="my-12 flex flex-col md:flex-row gap-10">

      {/* footer 1 part */}
            <div className="md:w-1/2 space-y-8 space-x-20">
            <a
              href="/"
              className="text-2xl font-semibold flex items-center text-primary space-x-3">

              <span className='text-white '>TFLORENTINA</span>
            </a>
            <p className="md:w-1/2 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus accusamus officia est.</p>
            <div>
                <input type="email" name  ="email" id="email" placeholder="Your Email" className=" bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none " />
                <input type="submit" value="Subscribe" className="px-4 py-2  bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary transition-all duration-300" />
            </div>
            </div> 

     {/*footer navigation  */}
            <div className="md:w-1/2 flex  md:flex-row flex-wrap justify-between gap-8 items-center  ">

                <div className="space-y-6 mt-5">
                    <h4 className="text-xl ">Platform</h4>
                    <ul className="space-y-3">
                    <a href="/" className=" block hover:text-gray-300">Overview</a>
                    <a href="/" className=" block hover:text-gray-300">Features</a>
                    <a href="/" className=" block hover:text-gray-300">About</a>
                    <a href="/" className=" block hover:text-gray-300">Pricing</a>
                    </ul>
                </div>
                
                <div className="space-y-6 mt-5">
                    <h4 className="text-xl ">Help</h4>
                    <ul className="space-y-3">
                    <a href="/" className=" block hover:text-gray-300">how dose it works?</a>
                    <a href="/" className=" block hover:text-gray-300">Where to ask question?</a>
                    <a href="/" className=" block hover:text-gray-300">How to play</a>
                    <a href="/" className=" block hover:text-gray-300">What is needed for this?</a>
                    </ul>
                </div>

                <div className="space-y-6 mt-5">
                    <h4 className="text-xl ">Contacts</h4>
                    <ul>
                    <p className=" hover:text-gray-300">(012) 1234-567-890</p>
                    <p className=" hover:text-gray-300">123 xyz xyz</p>
                    <p className=" hover:text-gray-300">qwuerybaihefv, qiwu</p>
                    <p className=" hover:text-gray-300">095467</p>
                    </ul>
                </div>

            </div>

        </div>

{/* down footer */}
        <hr />
        <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-4'>
            <p>@ TFLORENTINA  2024  Derechos Reservados @.</p>
            <div className='flex items-center space-x-5'> <img src={face} alt=""  className='w-8 cursor-pointer hover:translate-y-4 transition-all duration-300'/> <img src={insta} alt="" className='w-8 cursor-pointer hover:translate-y-4 transition-all duration-300' /> <img src={twvi} alt="" className='w-8 cursor-pointer hover:translate-y-4 transition-all duration-300'/> <img src={lined} alt="" className='w-8 cursor-pointer hover:translate-y-4 transition-all duration-300' /></div>
        </div>
    </div>
  )
}

export default Footer