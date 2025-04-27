'use client';
import React, { useState, useEffect } from 'react'; // Import useEffect
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import framer-motion for animations
import { LiaPeopleCarrySolid } from 'react-icons/lia';
import Image from 'next/image';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll

  // Use effect to track scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.div
      className={`fixed top-0 left-0 w-full h-[100px] z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-md bg-white' : 'shadow-none bg-white' // Conditional styling based on scroll
      }`}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
    >
      <div className='mx-auto flex justify-between items-center max-w-7xl h-full px-4 sm:px-6'>
        <Link href='/' className='text-3xl md:text-5xl font-bold'>
          {/* <span className='text-5xl'>🦷</span> */}
          <Image src='/gigii.png' alt='Logo' width={70} height={70}></Image>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className='block lg:hidden'>
          <button
            onClick={toggleMenu}
            className='text-5xl focus:outline-none' // Added focus outline removal
          >
            {isMenuOpen ? '✖️' : '☰'}
          </button>
        </div>

        {/* Desktop Menu Items */}
        <motion.div
          className='lg:flex gap-5 items-center hidden'
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className='flex items-center text-center  gap-5'>
            <Link href='/'>
              <span
                className='py-2 px-4 cursor-pointer rounded-sm bg-[#9e2146] text-white hover:bg-[#7c1835] transition-colors duration-200'
                onClick={() => {
                  const element = document.getElementById('home-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Home
              </span>
            </Link>
            <span
              className='py-2 px-4 cursor-pointer rounded-md text-black hover:text-[#9e2146] transition-colors duration-200'
              onClick={() => {
                const element = document.getElementById('fitur-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Fitur
            </span>
          </div>
        </motion.div>

        {/* Desktop Buttons */}
        <div className=' gap-2 hidden lg:flex'>
          {/* <Link href={'/auth/login'}>
            {' '}
            <Button value='Masuk' variant='red' />
          </Link>

          <Button value='Daftar' variant='white' /> */}
          <div className='font-bold  text-[#9e2146] cursor-pointer '>
            <Link href={'/developer-items'} className='flex gap-2 items-center'>
              {' '}
              <LiaPeopleCarrySolid className='text-4xl ' />
              <span>Developer</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
    </motion.div>
  );
};

export default Navbar;
