'use client';
import React, { useState, useEffect } from 'react'; // Import useEffect
import Button from '@/components/fragments/Button';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'; // Import framer-motion for animations

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
          <span className='text-5xl'>🦷</span>
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
              <span className='py-2 px-4 cursor-pointer rounded-sm bg-[#9e2146] text-white hover:bg-[#7c1835] transition-colors duration-200'>
                Home
              </span>
            </Link>
            <span className='py-2 px-4 cursor-pointer rounded-md text-black hover:text-[#9e2146] transition-colors duration-200'>
              Fitur
            </span>
            <Link href='/about'>
              <span className='py-2 px-4 cursor-pointer rounded-md text-black hover:text-[#9e2146] transition-colors duration-200'>
                Tentang Skips
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Desktop Buttons */}
        <div className=' gap-2 hidden lg:flex'>
          <Button value='Masuk' variant='red' />
          <Button value='Daftar' variant='white' />
        </div>
      </div>

      {/* Mobile Menu Items */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className='lg:hidden absolute top-full left-0 w-full bg-white py-4 px-4 shadow-md flex flex-col items-center gap-2'
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <Link href='/'>
              <span className='block py-2 px-4 cursor-pointer rounded-sm bg-[#9e2146] text-white hover:bg-[#7c1835] transition-colors duration-200 w-full text-center'>
                Home
              </span>
            </Link>
            <span className='block py-2 px-4 cursor-pointer rounded-md text-black hover:text-[#9e2146] transition-colors duration-200 w-full text-center'>
              Fitur
            </span>
            <Link href='/about'>
              <span className='block py-2 px-4 cursor-pointer rounded-md text-black hover:text-[#9e2146] transition-colors duration-200 w-full text-center'>
                Tentang Skips
              </span>
            </Link>
            <Button value='Masuk' variant='red' />
            <Button value='Daftar' variant='white' />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
