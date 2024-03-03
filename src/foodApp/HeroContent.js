
import React from 'react'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

  
function HeroContent() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
     };
     const headerData = [
       {
          header: " Crispy Chicken Pizza Bliss",
          desc: "Crispy crust loaded with juicy chicken, tangy tomato sauce, gooey cheese.",
          img: "../images/header/photo-1.png"
       },
       {
          header:"Craving Crunch",
          desc: "Fried Chicken: Crunchy comfort, universally cherished, satisfies cravings with smiles.",
          img: "../images/header/photo-2.png"
       },
       { 
          header: "Refill your tummy",
          desc: "Savoring delicious meals brings joy and sustenance to life.",
          img: "../images/header/photo-3.png"
       },
       { 
          header:"Noodles Odyssey!!",
          desc: "Noodle Quest: Discovering Deliciousness in Every Savory Strand",
          img: "../images/header/photo-4.png"
       },
     ]
  return (
    <div className='hero-content'>
                       <Slider {...settings}>
                
           {headerData.map((items, index)=> {
            return(
                <div className="hero-content-wrapper" key={index}>
                     <h2 className="title">{items.header} </h2>
                     <h4 className="description">{items.desc}</h4>
                     <img src={items.img}/>
                 </div>

            )
           })}
              
          
             </Slider>
    </div>
  )
}

export default HeroContent