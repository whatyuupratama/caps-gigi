import React from 'react';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedListDemo } from '@/components/fragments/molecule/AnimatedListDemo';
const Fitur = () => {
  return (
    <div
      id='fitur-section'
      className='w-full h-auto flex justify-center items-center text-center text-white relative'
    >
      <div className='flex flex-col text-center'>
        <div className='text-center flex flex-col'>
          <span className='text-5xl font-bold text-[#87003d] mb-4'>
            Apa Yang Kami Tawarkan?
          </span>
          <span className='w-1/2 mx-auto text-black '>
            Kami menyediakan beragam fitur yang dapat membantu orang tua dalam
            mengenali dan mencegah gigi berlubang pada anak.
          </span>
        </div>

        <div className='flex flex-col w-screen bg-[#87003d] h-auto py-16 px-5 mt-16 gap-15 '>
          <div className='flex justify-center '>
            <div className='flex justify-between gap-12 items-center max-w-2/3 '>
              <div className='flex flex-col w-1/2 items-start gap-3'>
                <span className='text-3xl font-bold'>
                  Cek Risiko Gigi Berlubang
                </span>
                <span className='text-start text-xl w-full md:w-4/5'>
                  Ketahui seberapa tinggi risiko gigi berlubang pada gigi susu
                  anak Anda sejak dini.
                </span>

                <Link href='/gigi-detection' passHref>
                  <ShimmerButton
                    className='text-sm'
                    background='#87003d'
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
        <div className='flex justify-center bg-[#87003d] border-t-2 border-dashed border-t-white'>
          <div className='flex w-full justify-between gap-12 items-center max-w-2/3'>
            <Image
              src={'/talen2.png'}
              alt='Logo'
              width={400}
              height={400}
              className='transform -scale-x-100 '
            ></Image>
            <div className='flex flex-col w-1/2 items-start gap-3'>
              <span className='text-3xl font-bold'>
                {' '}
                Edukasi Seputar Gigi Susu
              </span>
              <span className='text-start text-xl w-full md:w-4/5'>
                Yuk, pelajari cara menjaga gigi susu agar anak tetap sehat dan
                tumbuh sempurna!
              </span>
              <Link href='/edukasi-gigi-susu' passHref>
                <ShimmerButton
                  className='text-sm'
                  background='#87003d'
                  shimmerSize='0.1em'
                >
                  Pelajari Lebih Lanjut
                </ShimmerButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fitur;
