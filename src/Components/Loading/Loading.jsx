import { motion } from "framer-motion"
import "./loading.css"
const Loading = () => {
	return(
	  <motion.section
	  initial={{y: 0}}
	  animate={{
	  	y: 1800,
	  	transition:{
	  		delay: 2.4,
	  		duration: 3
	  	},
	  }}
	  className="w-full fixed h-screen z-50 flex justify-center items-center bg-cream">
	     <div className="text-redB font-[RightGrotesk] uppercase font-bold text-5xl text-center">
			       <h1 className="pb-14">creating </h1>
			    <div className="leading-[0] absolute mt-[-3.8rem] ml-[-7rem] p-3">
						    <motion.h1
						    initial={{opacity: 1}}
						    animate={{
						    	opacity: 1,
						    	transition:{
						    		duration: .4,
						    		delay: .3
						    	},
						    	transitionEnd:{
						    		display:'none'
						    	},
						    }}
						    className="mt-[1.2rem]"><i className="fa-solid fa-cart-shopping fa-2xs"></i>  e-commerce</motion.h1>
				        <motion.h1
				         initial={{opacity: 0}}
						    animate={{
						    	opacity: 1,
						    	transition:{
						    		duration: .4,
						    		delay: .7
						    	},
						    	transitionEnd:{
						    		display:'none'
						    	},
						    }}
				         className="mt-[1.2rem]"><i className="fa-brands fa-react fa-xs"></i>  website</motion.h1>
						    <motion.h1
						     initial={{opacity: 0}}
						    animate={{
						    	opacity: 1,
						    	transition:{
						    		duration: .4,
						    		delay: 1.1
						    	},
						    	transitionEnd:{
						    		display:'none'
						    	},
						    }}
						     className="mt-[1.2rem]"><i className="fa-solid fa-laptop-code fa-xs"></i>  app</motion.h1>
						    <motion.h1
						     initial={{opacity: 0}}
						    animate={{
						    	opacity: 1,
						    	transition:{
						    		duration: .4,
						    		delay: 1.5
						    	},
						    	transitionEnd:{
						    		display:'none'
						    	},
						    }}
						    className="mt-[1.2rem]" ><i className="fa-solid fa-server fa-2xs"></i>  data base</motion.h1>
						    <motion.h1
						    initial={{opacity: 0}}
						    animate={{
						    	opacity: 1,
						    	transition:{
						    		duration: .4,
						    		delay: 1.9
						    	},
						    	transitionEnd:{
						    		display:'none'
						    	},
						    }}
						    className="mt-[1.2rem]"><i class="fa-regular fa-eye fa-xs"></i>  visual identities</motion.h1>
	              <motion.h1
						    initial={{opacity: 0}}
						    animate={{
						    	opacity: 1,
						    	transition:{
						    		duration: .4,
						    		delay: 2.3
						    	},
						
						    }}
						    className="ml-[1.5rem] mt-[1.2rem]"  ><i class="fa-solid fa-pen-ruler fa-xs"></i>  lasting design</motion.h1>
			    </div>
			       <h1>all season</h1>
	     </div>
	  </motion.section>
	)
}
export default Loading