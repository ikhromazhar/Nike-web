import nike1 from "../../assets/nike1.png"
import nike2 from "../../assets/nike2.png"
import nike3 from "../../assets/nike3.png"
import nike4 from "../../assets/nike4.png"
import nike5 from "../../assets/nike5.png"
import nike6 from "../../assets/nike6.png"
import "./tipe.css"
// import { Carousel } from "@material-tailwind/react";
import { Carousel } from "flowbite-react";


export default function Tipe() {
  return (
    <>
    <div className="w-full h-[50vh] oke">
    <span className="font-[SupplyLight] text-redB ml-[14rem]">type nike infinity rn4</span>
    <section className="w-[70%] h-screen mt-[-15rem] ml-[10rem] duration-100 ease-linear">
		      <Carousel leftControl={<i class="fa-solid fa-arrow-left"></i>}
      rightControl={<i class="fa-solid fa-arrow-right"></i>} slideInterval={15000} slideDuration={5000}>
		        <img
		          className=" duration-200 ease-linear"
		          alt="..."
		          src={nike1}
		        />
		        <img
		          className=" duration-200 ease-linear"
		          alt="..."
		          src={nike2}
		        />
		        <img
		          className=" duration-200 ease-linear"
		          alt="..."
		          src={nike3}
		        />
		        <img
		          className=" duration-200 ease-linear"
		          alt="..."
		          src={nike4}
		        />
		        <img
		          className=" duration-200 ease-linear"
		          alt="..."
		          src={nike5}
		        />
		        <img
		          className=" duration-200 ease-linear"
		          alt="..."
		          src={nike6}
		        />
            </Carousel>
				     <div className="w-[33.4%] sticky bottom-[35.9rem] text-redB flex-col justify-end fixed z-10 ml-[51rem] rounded border-[1px] p-2 px-16 border-redB bg-black-rgba backdrop-blur-sm">
					      <span className="absolute ml-[-2.8rem] mt-4"><i class="fa-solid fa-shoe-prints fa-2xl"></i> </span>
					      <span className="text-xl">Type<br/></span>
                <span className="text-lg font-[SupplyLight]">Color On Shoes</span>

					    </div>
    </section>
    </div>
      </>
      )
}