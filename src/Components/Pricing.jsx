import { useState } from "react";
import green from '../assets/green.jpg'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'


const Pricing = () => {
    const [isYearly, setIsYearly] = useState(true);
  
    const packages = [
      {
        name: "Start",
        monthlyPrice: "19",
        yearlyprice: 199,
        descripsion:
          "loream ipsum dolor sit amet consectetur adipisicing elit.Nostrum nam itaque inventore quisquam porro max. ",
      },
      {
        name: "Advance",
        monthlyPrice: "39",
        yearlyprice: 399,
        descripsion:
          "loream ipsum dolor sit amet consectetur adipisicing elit.Nostrum nam itaque inventore quisquam porro max. ",
      },
      {
        name: "Start",
        monthlyPrice: "59",
        yearlyprice: 599,
        descripsion:
          "loream ipsum dolor sit amet consectetur adipisicing elit.Nostrum nam itaque inventore quisquam porro max. ",
      },
    ];
  
    return (
      <div className="md:px-14 p-4 max-w-s mx-auto py-10" id='pricing'>
        
      {/* pricing contant */}
        <div className="text-center">
          <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
            Here are all our plans
          </h2>
          <p className="text-tartiary md:w-1/3 mx-auto px-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            saepe aspernatur?
          </p>
        {/* toggle  */}
          <div className="mt-16">

            <label htmlFor="toggle" className="inline-flex  items-center cursor-pointer">
              <span className="mr-8 text-2xl font-semibold">Monthly</span>
              <div className="w-14 h-6 bg-secondary rounded-full transition duration-200 ease-in-out">
                <div
                  className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${ isYearly ? "bg-primary ml-8" : "bg-primary" }`}>
                 </div>
              </div>
              <span className="ml-8 text-2xl font-semibold">Yearly</span>
            </label>

            <input
              type="checkbox"
              id="toggle"
              className="hidden"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />

          </div>
         </div>

      {/* pricing cards */}
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto"
        variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount : 0.}}
        >

          {packages.map((pkg, index) => (
            <div key={index} className=" border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
            variants={fadeIn("right",0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once:false, amount : 0.}}
            >

              <h3 className="text-3xl font-bold text-center text-primary ">{pkg.name}</h3>

              <p className="text-tartiary text-center my-5">{pkg.descripsion}</p>

              <p className="mt-5 text-center text-secondary text-4xl font-bold">
                { isYearly ? `$${pkg.monthlyPrice}` : `$${pkg.yearlyprice}`} <span className="text-base text-tartiary font-medium">/ { isYearly ? "Month" : "Year"}</span>
              </p>

              <ul className="mt-4 space-y-2 px-4">
                <li className="flex items-center gap-2"> <img src={green} alt="" className="w-4 h-4" /> Videos of Lessons</li>
                <li className="flex items-center gap-2"> <img src={green} alt="" className="w-4 h-4" /> Homework Check</li>
                <li className="flex items-center gap-2"> <img src={green} alt="" className="w-4 h-4" /> Additional practical task</li>
                <li className="flex items-center gap-2"> <img src={green} alt="" className="w-4 h-4" /> Monthly conference</li>
                <li className="flex items-center gap-2"> <img src={green} alt="" className="w-4 h-4" /> Personal advice</li>
                <li className="flex items-center gap-2"> <img src={green} alt="" className="w-4 h-4" /> Consalting profesional</li>
              </ul>
  
              <div className="w-full mx-auto mt-8 flex items-center justify-center">
                <button className="btn">Get Started</button>
              </div>
              
            </div>
          ))}
         </motion.div>

      </div>
    );
  };
  
  export default Pricing