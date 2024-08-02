import nikeV from "../../assets/NikeV.mp4"
import { motion, useScroll, useTransform } from "framer-motion"
import "aos/dist/aos.css"
import './home.css'
const Home = () => {
	const {scrollYProgress} = useScroll()
  const up = useTransform(scrollYProgress, [0,1],[0,-3000])
  
	return(
	  <section className="w-full h-screen bg-cream font-[NeueMontreal] ">
	     <nav className="w-full h-[3rem] z-40  bg-black-rgba fixed flex justify-between p-2 backdrop-blur-[4px]">
	       <div className="pl-20">
			        <span>azhar</span>
	       </div>
	       <div className="capitalize pr-80">
			        <span className="p-4">infinity rn4</span>
			        <span className="p-4">Type</span>
			        <span className="p-4">Spesifikasi</span>
			        <span className="p-4">Why Infinity rn4?</span>
	       </div>
	     </nav>

	     <motion.div
	  initial={{y: 100}}
	  animate={{
	  	y: 0,
	  	transition:{
	  		delay: 2.3,
	  		duration: 1
	  	},
	  }}
	     className="pl-[5.9rem] z-30 text-3xl pt-16 font-medium">
	        <span className="z-30">
The Nike ReactX InfinityRN 4 is a sports shoe that is soft and <br/>stable but not fun. The new ReactX midsole doesn't provide much <br/>energy return and is only suitable for light running/recovery.This <br/> 4th version has been completely revamped: it's a little softer, more <br/> comfortable, and more durable but the weight has increased by <br/>an ounce.</span>
	     </motion.div>
	    
	    <div className="font-[RightGrotesk] uppercase text-9xl text-left  ml-[19rem]">
			       <h1 className="z-30">nike</h1>
			       <h1 className="z-30">infinity</h1>
			       <h1 className="z-30">rn 4</h1>
	       <div className="w-80 mt-[-25rem] ml-[20.5rem] z-30 rounded h-20">
			       <motion.video
			       style={{y : up}}
			       src={nikeV} autoPlay loop muted/>
	       </div>
	    </div>
	    <motion.div
	   initial={{y: 100}}
	  animate={{
	  	y: 0,
	  	transition:{
	  		delay: 2.3,
	  		duration: 1
	  	},
	  }}
	    className="flex flex-col justify-end fixed mt-[-17.1rem] z-20 ml-[61rem] rounded border-[1px] p-2 px-16 bg-black-rgba backdrop-blur-sm">
	      <span className="absolute ml-[-2.5rem] mb-3"><i class="fa-solid fa-arrow-up-right-from-square fa-2xl"></i> </span>
	      <span className="text-xl z-40">Infinity RN4</span>
	      <span className="text-lg font-[SupplyLight]">About The Product</span>
	    </motion.div>
	    <div className="flex ">
	     <nav className="w-[7.5%] h-[3.1rem] z-10  border-gray-900 mt-[-18.6rem] fixed bg-black-rgba  flex  p-2 backdrop-blur-[4px]">
	     </nav>
	     <nav className="w-[26%] h-[3.1rem] z-10  border-gray-900 mt-[-18.6rem] fixed bg-black-rgba ml-[61rem] flex p-2 backdrop-blur-[4px]">
	     </nav>
	     </div>
	     <nav className="w-[68.4%] ml-[6rem]  z-20 h-[2.6rem] border-t-[1px] border-x-[1px] border-redB  rounded-t-lg mt-[-18.4rem] fixed bg-transparent flex justify-end p-2"> 
	     </nav>
	  </section>
	)
}
export default Home