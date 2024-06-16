import React from 'react'
import style from './Hero.module.css'
function Hero() {
  return (
     <main  className={style.container}>
         <div className={style.frame1}>
            <h1 className={style.headline}> YOUR FEET DESERVE THE BEST</h1>
            <p >YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div>
                <button>Shop now</button>
                <button>Catogery</button>
            </div>
            <p className={style.para}>Also Available On</p>
            <div className={style.siteImage}>
                <img src="./Image/flipkart.png" alt="" />
                <img src="./Image/amazon.png" alt="" />
            </div>
         </div>
         
     

     <img src="/Image/hero-image.png" alt="" />
    </main>
  )
}

export default Hero
