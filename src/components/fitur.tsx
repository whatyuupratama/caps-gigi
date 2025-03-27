import React from 'react';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import Link from 'next/link';
import { AnimatedListDemo } from '@/components/fragments/molecule/AnimatedListDemo';
const Fitur = () => {
  return (
    <div className='w-full h-auto flex justify-center items-center text-center text-white relative'>
      <div className='flex flex-col text-center'>
        <div className='text-center flex flex-col'>
          <span className='text-5xl font-bold text-[#9f033c] mb-4'>
            Apa Yang Kami Tawarkan?
          </span>
          <span className='w-1/2 mx-auto text-black '>
            Kami menyediakan beragam fitur yang dapat membantu orang tua dalam
            mengenali dan mencegah gigi berlubang pada anak.
          </span>
        </div>
        <div className='w-full bg-[#9f033c] h-auto py-16 px-5 mt-16 flex justify-center'>
          <div className='flex justify-between gap-12 items-center max-w-2/3'>
            <div className='flex flex-col w-1/2 items-start gap-3'>
              <span className='text-3xl font-bold'>
                Alat Deteksi Gigi Berlubang
              </span>
              <span className='text-start text-xl w-full md:w-4/5'>
                Khawatir tentang kesehatan gigi anak Anda? Deteksi dini gigi
                berlubang dengan mudah di rumah. Dapatkan informasi terpercaya
                dan saran praktis untuk melindungi senyum si kecil.
              </span>
              <Link href='/gigi-detection' passHref>
                <ShimmerButton
                  className='text-sm'
                  background='#A0153E'
                  shimmerSize='0.1em'
                >
                  Selengkapnya
                </ShimmerButton>
              </Link>
            </div>
            <AnimatedListDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitur;
