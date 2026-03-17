import React from 'react'
import image1 from '../../assets/hero/SoppingGirl.png'
import image2 from '../../assets/hero/Sale.png'
import image3 from '../../assets/hero/Family.png'
import Slider from "react-slick/lib/slider"
const Hero = () => {
        
  const ImageList = [
    {}
  ];


  console.log(Slider);
  
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
      };

  return (
    <>
    {/* background pattern */}

    <div className='relative 
    overflow-hidden min-h-[500px]
     sm:min-h-[650px] bg-gray-100 
     flex items-center justify-center dark:bg-gray-950 
     dark:text-white duration-200
     '>

      <div className='h-[700px]
       w-[700px] bg-primary/40 
       -top-1/2 right-0 absolute
        rounded-3xl -z-9 rotate-45' >
       
      </div>
     {/* hero section container */}
      
      <div className="container pb-8 dm:pb-0">
     {/* <Slider {...settings}> */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2'>
                {/* text container section */}
               <div className='flex flex-col gap-4 justify-center pt-12 sm:pt-0 sm:text-left text-center
               order-2 sm:order-1 relative z-10
               '>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold '>Lorem ipsum dolor sit.</h1>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                <div>
                    <button className="bg-gradient-to-r from-primary
                     to-secondary hover:scale-105 duration-200
                      text-white py-2 px-6 rounded-full mt-4">
                        Order Now
                    </button>
                </div>
               </div>

                {/* image container section */}
                <div className='order-1 sm:order-2'>
                    <div className='relative z-10'>
                        <img src={image1} alt="Hero Image" 
                        className='w-[300px] h-[300px] sm:h-[450px]
                         sm:scale-125 object-contain mx-auto' />
                    </div>
                </div>

            </div>
        </div>
      {/* </Slider> */}
      </div>
      </div>
    </>
  )
}

export default Hero
