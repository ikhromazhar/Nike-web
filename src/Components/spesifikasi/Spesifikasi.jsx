const Spesifikasi = () => {
	return(
	  <section className="w-full h-screen z-0">
	   <div className="w-full h-[35rem] font-[RightGrotesk] text-left text-9xl p-32 px-24 text-redB uppercase">
       <h1>Weaknesses </h1>
       <h1>and</h1>
       <h1>Strengths</h1>
	   </div>
	    <div className="w-full z-30 flex justify-center">
			   <div className="w-[28] font-[SupplyLight] text-redB p-3 flex-col flex gap-2">
			      <span>Strengths</span>
			      <div className="flex gap-x-4">
						   <span className="border-[.1px] rounded p-1 border-redB gap-1">Less annoying curves</span>
						   <span className="border-[.1px] rounded p-1 border-redB ">Good locking</span>
			      </div>
			      <div className="flex gap-x-4">
						   <span className="border-[.1px] rounded p-1 border-redB ">More durable</span>
						   <span className="border-[.1px] rounded p-1 border-redB ">More durable</span>
						   <span className="border-[.1px] rounded p-1 border-redB ">Stable</span>
			      </div>
			   </div>
			   <div className="w-[30rem] font-[SupplyLight] text-redB p-3 flex-col flex gap-2">
			      <span>Weaknesses</span>
			      <div className="flex gap-x-4">
						   <span className="border-[.1px] rounded p-1 border-redB gap-1">ReactX lacks energy return</span>
			      </div>
			      <div className="flex gap-x-4">
						   <span className="border-[.1px] rounded p-1 border-redB ">Warm top</span>
						   <span className="border-[.1px] rounded p-1 border-redB ">Bland trip</span>
			      </div>
			   </div>
	    </div>
	    <div className="flex flex-col justify-end sticky bottom-[35.9rem] z-10 text-redB ml-[61rem] rounded border-[1px] p-2 px-16 border-redB bg-black-rgba backdrop-blur-sm">
	      <span className="absolute ml-[-2.8rem] mb-3"><i class="fa-solid fa-diagram-predecessor fa-2xl"></i> </span>
	      <span className="text-xl">Spesifikasi</span>
	      <span className="text-lg font-[SupplyLight]">Weakneses Excess.</span>
	    </div>
	  </section>
	)
}
export default Spesifikasi