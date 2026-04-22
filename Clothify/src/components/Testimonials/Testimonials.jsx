
import React from 'react'
import SliderImport from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { div } from 'framer-motion/client';

const Testimonials  =() => {

    const Slider = SliderImport.default

     const TestimonialsData = [
        {
          id:1,
          name:"Vector",
          text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim praesentium quae, corrupti recusandae impedit illum autem maiores porro qui. Cupiditate.",
          img:"https://picsum.photos/101/101"

        },
         {
          id:2,
          name:"Lucifer",
          text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim praesentium quae, corrupti recusandae impedit illum autem maiores porro qui. Cupiditate.",
          img:"https://picsum.photos/102/102"

        },
         {
          id:3,
          name:"Virat Kohli",
          text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim praesentium quae, corrupti recusandae impedit illum autem maiores porro qui. Cupiditate.",
          img:"https://picsum.photos/104/104"

        },
         {
          id:4,
          name:"Sachin Tendulkar",
          text:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim praesentium quae, corrupti recusandae impedit illum autem maiores porro qui. Cupiditate.",
          img:"https://picsum.photos/103/103"

        },
        
     ]

    const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide:2
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
       
      },
    },

    
  ],
};
console.log(Slider);

  return (
    <>
    <div className='p-10 mb-10'>
        <div className='container'>
            {/* header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary'>What our customers are saying</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonials</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Discover our latest collection of high-quality products at unbeatable prices.</p>
            </div>
            {/* Testimonials cards */}
            <div data-aos="zoom-in">
            <Slider {...settings}>
                {
                    TestimonialsData.map((Data) => (
                     <div className='my-6'>
                        <div key={Data.id}
                     className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:background-gray-800 bg-primary/10 relative'>
                        <div className='mb-4'>
                            <img src={Data.img} alt="" className='rounded-full w-20 h-20'/>
                        </div>
                        <div className='flex flex-col items-center gap-4'>
                          <div className='space-y-3'>
                          <p className='text-xs text-gray-500'>{Data.text}</p>
                          <h1 className='text-xl font-bold text-black/80 dark:text-light'>{Data.name}</h1>
                          </div>
                        </div>
                        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                     </div>
                     </div>
                    ))
                }

            </Slider>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonials
