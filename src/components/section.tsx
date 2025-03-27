import React from 'react';
import Image from 'next/image';
import { GridPatternDemo } from '@/components/fragments/molecule/GridPatternDemo';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import Link from 'next/link';

const Section = () => {
  return (
    <div className='w-screen min-h-screen flex items-center justify-center py-16 relative overflow-hidden '>
      <GridPatternDemo className='absolute inset-0 w-full h-full' />

      <div className='container relative z-10 mx-auto px-4 md:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
          <div className='w-full'>
            <div className='relative w-full h-64 sm:h-72 md:h-96 lg:h-96 aspect-w-1 aspect-h-1 rounded-xl overflow-hidden shadow-lg'>
              <Image
                src='/anak2.jpg'
                alt='Logo'
                layout='fill'
                objectFit='cover'
                className='bg-white'
              />
            </div>
          </div>
          <div className='text-center md:text-left'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-gray-900'>
              Deteksi Pertumbuhan Gigi Bungsu
            </h2>
            <p className='text-lg md:text-xl mb-6 text-gray-600'>
              Cari tahu cara mendeteksi pertumbuhan gigi bungsu menggunakan
              hasil ronsen. Mengetahui kapan gigi bungsu mulai tumbuh sangat
              penting untuk kesehatan mulut Anda. Dapatkan informasi lebih
              lanjut untuk mencegah masalah yang mungkin timbul!
            </p>
            <div className='mt-8'>
              <Link href='/gigi-detection' passHref>
                <ShimmerButton
                  className='text-sm font-medium'
                  background='#A0153E'
                  shimmerSize='0.1em'
                >
                  Yuk, Deteksi
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
