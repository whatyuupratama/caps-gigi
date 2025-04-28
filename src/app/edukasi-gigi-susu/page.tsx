import React from 'react';
// import { RiHomeOfficeLine } from 'react-icons/ri';
// import Link from 'next/link';
import { GridPatternDemo } from '@/components/fragments/molecule/GridPatternDemo';
import Image from 'next/image';
import Navbar from '@/components/navbar';
const Proses = () => {
  return (
    <>
      <Navbar />
      <div className='w-screen h-dvh flex items-center justify-center py-16 relative overflow-hidden '>
        <GridPatternDemo className='absolute inset-0 w-full h-full' />

        <div className='container relative z-10 mx-auto px-4 md:px-8 '>
          <div className='flex flex-col md:flex-row items-center md:items-start justify-center gap-8'>
            {/* Image Section */}
            <div className='flex-shrink-0'>
              <div className='relative w-full h-full rounded-xl overflow-hidden'>
                <Image
                  src='/edukasi.png'
                  alt='Logo'
                  objectFit='cover'
                  width={200}
                  height={200}
                />
              </div>
            </div>
            <div className='text-center md:text-left max-w-lg'>
              <p className='text-lg md:text-xl mb-6 text-gray-600 flex items-center'>
                Hai tot
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Proses;
