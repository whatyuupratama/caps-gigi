'use client';
import React, { useState, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { users } from '@/app/developer-items/users';

const Items = () => {
  const [hoveredUser, setHoveredUser] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % users.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setHoveredUser(users[currentIndex]?.id.toString() || null);
  }, [currentIndex]);

  return (
    <>
      <div className='w-screen h-screen flex flex-col justify-center items-center text-white bg-[#87003d] overflow-auto '>
        <div className='absolute top-0 left-0 py-6 px-6'>
          <Link href={'/'}>
            <button className='px-6 py-3 text-white border-white bg-[#87003d] rounded-md border hover:bg-white hover:text-[#87003d] transition duration-300 flex items-center gap-2 cursor-pointer'>
              <AiOutlineHome /> Halaman Utama
            </button>
          </Link>
        </div>
        <h1 className='text-6xl font-bold mb-4 text-center flex gap-3 items-center'>
          Capstone CavityCheck{' '}
          <Image src={'/gigii.png'} alt='logo' width={80} height={80}></Image>
        </h1>
        <h2 className='text-2xl font-bold mb-26 text-center  w-5/6'>
          Cohort Coding Camp Powered by DBS Foundation - Road to Future
          Workforce Bank DBS x Dicoding
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
          {users.map((user) => {
            const isHovered = hoveredUser === user.id.toString();

            return (
              <motion.div
                key={user.id}
                className={`flex flex-col items-center text-center gap-4 ${
                  isHovered ? 'z-10' : ''
                }`}
                animate={{
                  scale: isHovered ? 1.15 : 1,
                  opacity: isHovered ? 1 : 0.9,
                  y: isHovered ? -5 : 0,
                  filter: isHovered ? 'blur(0px)' : 'blur(2px)',
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0.8, 0.25, 1], // Cubic bezier untuk transisi smooth
                }}
                onMouseEnter={() => setHoveredUser(user.id.toString())}
                onMouseLeave={() => setHoveredUser(null)}
              >
                <Image
                  src={user.image}
                  alt={user.name}
                  width={150}
                  height={150}
                  className='object-cover rounded-full border-4 border-white w-[150px] h-[150px]'
                />
                <div>
                  <span className='block text-xl font-semibold'>
                    {user.name}
                  </span>
                  <span className='block text-lg font-bold'>{user.role}</span>
                </div>
                <a
                  href={user.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white transition duration-300 flex items-center gap-2 transform hover:scale-105 active:scale-95'
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Items;
