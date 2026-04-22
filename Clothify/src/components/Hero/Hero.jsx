import React from 'react'
import image1 from '../../assets/hero/SoppingGirl.png'
import image2 from '../../assets/hero/Sale.png'
import image3 from '../../assets/hero/Family.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion'

const Hero = () => {
        
  const ImageList = [
    {
      id:1,
      image:image1,
      title:"Upto 30% Off On All Women's wear",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id:2,
      image:image2,
      title:"Upto 70% Off On All products sale",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      id:3,
      image:image3,
      title:"Upto 50% Off On All Mean's wear",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ];

  // animation variants
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  const imgVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <>
    <div className='relative overflow-hidden min-h-[500px]
     sm:min-h-[650px] bg-gray-100 flex items-center justify-center
     dark:bg-gray-950 dark:text-white duration-200'>

      <div className='h-[700px] w-[700px] bg-primary/40 
      -top-1/2 right-0 absolute rounded-3xl -z-9 rotate-45'></div>
      
      <div className="container pb-8 md:pb-0">
      
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000 }}
          loop={true}
        >

          {ImageList.map((item) => (
            <SwiperSlide key={item.id}>
              <div>
                <div className='grid grid-cols-1 sm:grid-cols-2'>

                  {/* TEXT */}
                  <div className='flex flex-col gap-4 justify-center pt-12 sm:pt-0 sm:text-left text-center
                  order-2 sm:order-1 relative z-10'>

                    <motion.h1
                      variants={textVariant}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1 }}
                      className='text-5xl sm:text-6xl lg:text-7xl font-bold'>
                      {item.title}
                    </motion.h1>

                    <motion.p
                      variants={textVariant}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.2 }}
                      className='text-sm'>
                      {item.description}
                    </motion.p>

                    <motion.div
                      variants={textVariant}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1, delay: 0.4 }}
                    >
                      <button className="bg-gradient-to-r from-primary
                      to-secondary hover:scale-105 duration-200
                      text-white py-2 px-6 rounded-full mt-4">
                        Order Now
                      </button>
                    </motion.div>

                  </div>

                  {/* IMAGE */}
                  <div className='order-1 sm:order-2'>
                    <motion.div
                      variants={imgVariant}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 1 }}
                      className='relative z-10'>
                      <img 
                        src={item.image} 
                        alt="Hero"
                        className='w-[300px] h-[300px] sm:h-[450px]
                        sm:scale-105 lg:scale-110 object-contain mx-auto' 
                      />
                    </motion.div>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
    </>
  )
}

export default Hero