import Abounted from '../assets/about1.jpg'
import Abounted2 from '../assets/about2.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'


const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-8" id='about'>

    <div className='flex flex-col md:flex-row justify-between items-center  gap-8'>{/* about part-1 */}
       {/* about img */}
        <motion.div className='md:w-1/2'
        variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount : 0.}}
        > 
            <img src={Abounted} alt="about" />
        </motion.div>
        {/* about content */}
        <motion.div className='md:w-2/5'
        variants={fadeIn("left",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount : 0.}}
        >
            <h2 className='md:text-5xl text-3xl text-primary font-bold mb-5 leading-normal'>We have been improving our product <span className='text-secondary'>for many years.</span></h2>
            <p className='text-tartiary text-lg mb-7 '>Ofrecer servicios de transporte de carga a través de unidades modernas y equipadas con tecnología de punta, que permitan satisfacer las expectativas de nuestros clientes.</p>
            <button className='btn'>Get Started</button>
        </motion.div>

    </div>


    {/* About 2 */}
    <div className='flex flex-col md:flex-row-reverse justify-between items-center  gap-8'>{/* about part-2 */}
       {/* about img */}
       <motion.div className='md:w-1/2'
        variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount : 0.}}
       > 
           <img src={Abounted2} alt="about" />
       </motion.div>
       {/* about content */}
       <motion.div className='md:w-2/5'
        variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount : 0.}}>
           <h2 className='md:text-5xl text-3xl text-primary font-bold mb-5 leading-normal'>You can Practice at any <span className='text-secondary'>time convinent for you.</span></h2>
           <p className='text-tartiary text-lg mb-7 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, repudiandae?</p>
           <button className='btn'>Get Started</button>
       </motion.div>

   </div>

</div>
  )
}

export default About