import Banner from '../assets/banner.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

const Home = () => {
  return (

    <>
    
    <div className="md:px-12 py p-4 max-w-screen-2x1 mx-auto mt-32 " id='home'>
        <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 py-9 px-4">
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
               
                 {/* banner img */}
               <motion.div
               variants={fadeIn("down",0.4)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once:false, amount : 0.}}
               >
                  <img src={Banner} alt="" className="lg:h-[560px] p-6" />
               </motion.div>
                {/* banner contant */}
                <motion.div className="md:w-3/5 p-6"
                variants={fadeIn("up",0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once:false, amount : 0.7}}
                >
            <h2  className=" md:text-7xl text-4xl font-bold text-white mb-6 leading-snug ">Develop your skills without diligence</h2>
            <p className="text-[#EBEBEB] text-2xl mb-8">
              A good example of a paragraph contains a topic sentence, details
              and a conculsion. Lorem ipsum
              adipisicing elit.
            </p>
            <div className="space-x-5 space-y-4">
              <button className="btn">Get Started</button>
              <button className="btn">Dicount</button>
            </div>
              
               </motion.div>

            </div>
        </div>
    </div>
    </>
)
}

export default Home