import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import { FaCaretDown, FaBars, FaTimes } from 'react-icons/fa';
import { FaUser } from "react-icons/fa";

const Navbar = ({ handleOrderPopup }) => {

  const [isOpen, setIsOpen] = useState(false);

  const DropdownLinks = [
    { id: 1, name: 'Trending products', link: '/#' },
    { id: 2, name: 'Best Selling', link: '/#' },
    { id: 3, name: 'Top Rated', link: '/#' }
  ];

  const menu = [
    { id: 1, name: 'Home', link: '/#' },
    { id: 2, name: 'Top Rated', link: '/#services' },
    { id: 3, name: 'Kids wear', link: '/#' },
    { id: 4, name: 'Means wear', link: '#' },
    { id: 5, name: 'Electronics', link: '/#' }
  ]

  return (
    <>
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>

      {/* upper navbar */}
      <div className='bg-primary/40 py-2'>
        <div className='container flex items-center justify-between'>

          <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
            <img src={logo} alt="Logo" className='w-10 '/>Clothify
          </a>

          <div className='flex items-center gap-4'>

            {/* Search */}
            <div className='relative group hidden sm:block'>
              <input type="text" placeholder="Search..." 
                className='w-[200px] group-hover:w-[300px]
                transition-all duration-300 rounded-full border
                border-gray-300 px-2 py-1 focus:outline-none
                focus:border-primary dark:bg-gray-800 dark:border-gray-500'/>
              <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>
            </div>

            {/* Order Button */}
            <button onClick={()=> alert("Order placed successfully!")} 
              className='bg-gradient-to-r from-primary to-secondary text-white 
              py-1 px-4 rounded-full flex items-center gap-3 group'>
              
              <span className='group-hover:block hidden'>order</span>

              <FaCartShopping className='text-xl text-primary bg-white rounded-full p-1'/>
            </button>

            <DarkMode/>

            {/* Login */}
            <button 
              onClick={() => handleOrderPopup(true)}
              className="bg-gradient-to-r from-primary to-secondary 
              text-white py-1 px-4 rounded-full flex items-center gap-2">
              <FaUser />
              <span className="hidden sm:block">Login</span>
            </button>

            {/* Hamburger */}
            <div className='sm:hidden'>
              <FaBars className='text-2xl cursor-pointer' onClick={() => setIsOpen(true)} />
            </div>

          </div>
        </div>
      </div>
    </div>

    {/* lower navbar */}
    <div className='flex justify-center shadow-md dark:bg-gray-800 dark:text-white bg-white'>
      <ul className='sm:flex hidden gap-6 text-lg font-medium items-center'>
        {
          menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className='hover:text-primary px-4 duration-200'>
                {data.name}
              </a>
            </li>
          ))
        }

        {/* Dropdown */}
        <li className='group relative cursor-pointer'>
          <div className='flex items-center gap-[2px] py-2'>
            Trending
            <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
          </div>

          <div className='absolute z-[9999] hidden group-hover:block w-[200px] 
          rounded-md bg-white p-2 text-black shadow-md'>
            
            <ul>
              {DropdownLinks.map((data) => (
                <li key={data.id}>
                  <a href={data.link}
                    className='hover:bg-primary/20 w-full rounded-md p-2 inline-block duration-200'>
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>

    {/* Sidebar */}
    <div className={`fixed top-0 left-0 h-full w-[260px] bg-white dark:bg-gray-900 z-50 shadow-md transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>

      <div className='flex justify-between items-center p-4 border-b'>
        <h2 className='font-bold text-lg'>Menu</h2>
        <FaTimes onClick={() => setIsOpen(false)} className='cursor-pointer'/>
      </div>

      <ul className='flex flex-col gap-4 p-4'>
        {menu.map((item) => (
          <li key={item.id}>
            <a href={item.link} 
              className='block px-2 py-2 rounded-md transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:translate-x-1'>
              {item.name}
            </a>
          </li>
        ))}

        <button 
          onClick={() => {
            setIsOpen(false);
            handleOrderPopup(true);
          }}
          className="mt-4 bg-gradient-to-r from-primary to-secondary text-white py-2 rounded-full">
          Login
        </button>
      </ul>
    </div>

    {/* Overlay */}
    {isOpen && (
      <div 
        className='fixed inset-0 bg-black/40 z-40'
        onClick={() => setIsOpen(false)}
      />
    )}
    </>
  )
}

export default Navbar