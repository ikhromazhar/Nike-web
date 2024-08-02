import snike1 from "../../assets/snike1.jpg"
import snike2 from "../../assets/snike2.jpg"
import snike3 from "../../assets/snike3.jpeg"
const Why = () => {
	return(
			<section className="h-screen font-[SupplyLight]">
			  <div className=" flex absolute pl-24">
					   <img className="w-60 h-80" src={snike1} alt=""/>
					   <img className="w-80 h-auto mt-[2.5rem]" src={snike2} alt=""/>
					   <img className="w-60 h-80 mt-[5rem]" src={snike3} alt=""/>
			  </div>
			     <span className="mt-[30rem] pl-60 absolute text-4xl">Who should buy the Nike Infinity RN4?</span>
			     <div>
			        <span className="mt-[35rem] font-[NeueMontreal] pl-60 absolute text-2xl">If you love the Infinity Run series, you'll love this new version as it no longer <br/>has a heel clip so there's no more pronounced arch. If you are looking for an <br/>alternative to the Pegasus and Structure series in Nike's lineup, the <br/>InfinityRN 4 could be an option.</span>
			     </div>
			     
	    <div className="flex flex-col justify-end sticky top-[9.1rem] z-10 ml-[61rem] rounded border-[1px] p-2 px-16 bg-black-rgba backdrop-blur-sm">
	      <span className="absolute ml-[-2.8rem] mb-3"><i class="fa-solid fa-question fa-2xl"></i> </span>
	      <span className="text-xl">Why?</span>
	      <span className="text-lg font-[SupplyLight]">Why Infinity RN4.</span>
	    </div>
			</section>
	)
}
export default Why