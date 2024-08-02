import Loading from "./Components/Loading/Loading"
import Home from "./Components/home/Home"
import Spesifikasi from "./Components/spesifikasi/Spesifikasi"
import Tipe from "./Components/Tipe/Tipe"
import Why from "./Components/why/Why"
import Footer from "./Components/footer/Footer"
import Kelebihan from "./Components/kelebihan/Kelebihan"
import './App.css'
import React,{useEffect, useState} from "react"
import "aos/dist/aos.css"


function App() {
	
	const [konsepBg, setKonsepBg] = useState(false)
	
  const changeBackground = () => {
    if(window.scrollY >= 2100 ) {
    	setKonsepBg(true)
    } else{
    	setKonsepBg(false)
    }
   }

  window.addEventListener('scroll', changeBackground)
  return (
  <>
  <div className={konsepBg ? 'bgActive' : 'bgAja'}>
  < Loading/>
  < Home/>
  < Kelebihan/>
  < Tipe/>
  < Spesifikasi/>
  < Why/>
  < Footer/>
  </div>
  
  </>
  )
}

export default App
