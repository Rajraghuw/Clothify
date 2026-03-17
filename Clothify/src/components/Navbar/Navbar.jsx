import React from 'react'
import logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import { FaCaretDown } from 'react-icons/fa6';


const Navbar = () => {
  const DropdownLinks = [
    {
      id: 1,
      name: 'Trending products',
      link: '/#'
    },
    {
      id: 2,
      name: 'Best Selling',
      link: '/#'
    },
    {
      id: 3,
      name: 'Top Rated',
      link: '/#'
    }
  ];

  const menu = [
    {
      id: 1,
      name: 'Home',
      link: '/#'
    },
    {
      id: 2,
      name: 'Top Rated',
      link: '/#services'
    },
    {
      id: 3,
      name: 'Kids wear',
      link: '/#'
    },
    {
      id: 4,
      name: 'Means wear',
      link: '#'
    },
    {
      id: 5,
      name: 'Electronics',
      link: '/#'
    }
  ]

  return (
    <>
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>

      {/* upper navbar */}

      <div className='bg-primary/40 py-2'>
           <div className='container flex items-center justify-between'>
            <div>
                <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
                    <img src={logo} alt="Logo" className='w-10 '/>Clothify</a>
            </div>
            {/* Search bar and order button */}
            <div className='flex justify-between items-center gap-4'>
                <div className='relative group hidden sm:block'>
                    <input type="text" placeholder="Search..." 
                    className='w-[200px] sm:w-[200px] group-hover:w-[300px]
                     transition-all duration-300 rounded-full border
                      border-gray-300 px-2 py-1 focus:outline-none focus:border-2
                       focus:border-primary dark:text-white
                        dark:bg-gray-800 dark:border-gray-500'/>
                       <IoMdSearch 
                       className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'
                       />
                </div>

            {/* order button */}
            
               <button onClick={()=> alert('Ordering not available yet')} 
                className='bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white 
                py-1 px-4 rounded-full flex items-center gap-3 group
                '
                >
                <span className='group-hover:block pb-0.5 hidden transition-all duration-200'>
                  order
                </span>
                <FaCartShopping 
                className='text-xl text-white drop-shadow-sm cursor-pointer'
                />
               </button>
                
                {/* dark mode switch */}

                <div>
                  <DarkMode/>
                </div>
                
            </div>

           </div>
      </div>
</div>

      {/* lower navbar */}
 
      <div className='flex justify-center shadow-md dark:bg-gray-800 dark:text-white bg-white'>
        <ul className='sm:flex hidden gap-6 text-lg font-medium  items-center'>
          {
            menu.map((data) => (
              <li key={data.id}>
                  <a href={data.link} className='hover:text-primary px-4 inline-block duration-200'>
                    {data.name}
                  </a>
              </li>
            ))
          }
          {/* simple dropdown and links */}
          <li className='group relative cursor-pointer'>
            <a href="" className='flex items-center gap-[2px] py-2'>
              Trending
              <span>
                <FaCaretDown 
                className='transition-all duration-200 group-hover:rotate-180'

                />
              </span>
            </a>
            <div className='absolute z-[9999]
             hidden group-hover:block w-[200px] 
             rounded-md bg-white p-2 text-black
             shadow-md'
             >
              
              <ul>
                {
                  DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a href={data.link}
                       className='hover:bg-primary/20 
                       w-full rounded-md p-2 inline-block
                        duration-200'>
                        {data.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </li>

        </ul>
      </div>
    </>
  )
}

export default Navbar
