'use client'; // Komponen ini dieksekusi di sisi klien

import React, { useState } from 'react';
import { FileUpload } from '@/components/ui/file-upload'; // Pastikan path sudah benar
import Link from 'next/link';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { Ripple } from '@/components/magicui/ripple';

const words = `Deteksi Risiko Pertumbuhan Gigi Bungsu 🦷`;

const GigiDetection = () => {
  const [file, setFile] = useState<File | null>(null);
  const handleFileChange = (uploadedFile: File | null) => {
    setFile(uploadedFile);
  };

  return (
    <div className='min-h-screen bg-[#96063b] flex justify-center items-center'>
      <Ripple />
      <div className='flex flex-col md:flex-row justify-between w-full max-w-6xl px-6 py-8'>
        <div className='relative z-10 flex flex-col gap-6 text-white text-center md:text-left w-full md:w-1/2'>
          <Link href='/' passHref>
            <span className='text-lg font-semibold hover:text-gray-200 hover:underline flex items-center gap-2'>
              <FaArrowLeftLong /> Halaman Utama
            </span>
          </Link>

          <TextGenerateEffect words={words} />
          <p className='text-sm font-medium mt-4'>
            Deteksi sekarang untuk mencegah komplikasi gigi bungsu Anda.{' '}
            <b>
              Program ini memerlukan hasil ronsen gigi untuk pemeriksaan dan
              penilaian risiko lebih akurat.
            </b>
          </p>

          {file && (
            <div className=' flex justify-start'>
              <Link href='/gigi-detection' passHref>
                <ShimmerButton
                  className='text-sm'
                  background='#A0153E'
                  shimmerSize='0.1em'
                >
                  Yuk,Deteksi
                </ShimmerButton>
              </Link>
            </div>
          )}
        </div>

        <div className='w-full md:w-1/2 mt-8 md:mt-0'>
          <FileUpload onChange={handleFileChange} />
        </div>
      </div>
    </div>
  );
};

export default GigiDetection;
