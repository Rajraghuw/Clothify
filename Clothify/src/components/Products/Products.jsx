import React from 'react'
import Img1 from "../../assets/woman/Img1.jpg"
import Img2 from "../../assets/woman/Img2.jpg"
import Img3 from "../../assets/woman/Img3.jpg"
import Img4 from "../../assets/woman/Img4.jpg"
import Img5 from "../../assets/woman/Img5.jpg"
import {FaStar} from "react-icons/fa6"

const Products = () => {
   
    const ProductsData = [
        {
            id: 1,
            img:Img1,
            title:"Woman Ethnic",
            rating:5.0,
            color:"white",
            aosDelay:"0"
        },
         {
            id: 2,
            img:Img2,
            title:"Woman Western",
            rating:4.5,
            color:"red",
            aosDelay:"200"
        },
         {
            id: 3,
            img:Img3,
            title:"Goggles",
            rating:4.8,
            color:"Brown",
            aosDelay:"400"
        },
         {
            id: 4,
            img:Img4,
            title:"Printed T-Shirt",
            rating:5.2,
            color:"Yellow",
            aosDelay:"600"
        },
         {
            id: 5,
            img:Img5,
            title:"Fasion T-Shirts",
            rating:4.5,
            color:"pink",
            aosDelay:"800"
        }  
    ]

  return (
    <>
    <div className='mt-14 md-12'>
      <div className='container'>
        {/* Header Section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos="fade-up" className='text-sm text-primary'>Top Selling Products For You</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Discover our latest collection of high-quality products at unbeatable prices.</p>
        </div>
        {/* Body Section */}
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4
            lg:grid-cols-5 place-items-center gap-5'>
            {/* Card Section  */}
            {
                ProductsData.map((product) => (
                 <div
                 data-aos="fade-up"
                 data-aos-delay={product.aosDelay}
                 key={product.id} className='space-y-3'>
                    <img src={product.img} alt="" 
                    className='h-[200px] w-[150px] object-cover rounded-md hover:scale-105 duration-200'
                    />
                    <div>
                        <h3 className=' font-semibold'>{product.title}</h3>
                        <p className='text-sm text-gray-600'>{product.color}</p>
                        <div className='flex items-center gap-1'>
                            <FaStar className='text-yellow-400'/>
                            <span className='text-sm text-gray-600'>{product.rating}</span>
                        </div>
                    </div>
                 </div>

                ))
            }
            </div>
            {/* view all button  */}
            <div className='flex justify-center mb-20'>
                <button data-aos="fade-up"
                 className='text-center mt-10 cursor-pointer
                 py-2 px-5 bg-primary text-white rounded-md'>View All Button</button>
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Products
