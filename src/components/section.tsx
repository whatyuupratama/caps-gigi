import React from 'react';
import Image from 'next/image';
import { GridPatternDemo } from '@/components/fragments/molecule/GridPatternDemo';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import Link from 'next/link';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
// import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
const world = `Deteksi Risiko Gigi Berlubang pada Anak `;
const Section = () => {
  return (
    <div
      id='home-section'
      className='w-screen min-h-screen flex items-center justify-center py-16 relative overflow-hidden'
    >
      <GridPatternDemo className='absolute inset-0 w-full h-full' />

      <div className='container relative z-10 mx-auto px-4 md:px-8'>
        <div className='flex flex-col md:flex-row items-center md:items-start justify-center gap-8'>
          {/* Image Section */}
          <div className='flex-shrink-0'>
            <div className='relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-xl overflow-hidden'>
              <Image
                src='/gigii.png'
                alt='Logo'
                objectFit='cover'
                width={600}
                height={600}
              />
            </div>
          </div>
          {/* Text Section */}
          <div className='text-center md:text-left max-w-lg'>
            <h2 className='text-3xl md:text-7xl font-bold mb-4 text-black flex items-center'>
              {/* Deteksi Risiko Gigi Berlubang pada Anak */}
              {/* <TextGenerateEffect words={words} className='ml-2' /> */}
              <TextGenerateEffect
                words={world}
                className='w-2/2 font-extrabold '
                textColor='text-black'
              />
            </h2>

            <p className='text-lg md:text-xl mb-6 text-gray-600'>
              Pelajari cara mendeteksi risiko gigi berlubang pada anak usia 3-6
              tahun. Mengetahui tanda-tanda awal kerusakan gigi susu sangat
              penting untuk menjaga kesehatan mulut anak Anda. Dapatkan
              informasi lebih lanjut untuk mencegah masalah gigi sejak dini!
            </p>
            <div>
              <Link href='/gigi-detection' passHref>
                <ShimmerButton
                  className='text-sm font-medium'
                  background='#87003d'
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
