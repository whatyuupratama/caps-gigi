import React from 'react';
import { RiHomeOfficeLine } from 'react-icons/ri';
import Link from 'next/link';
const Edukasi = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[#87003d] text-white'>
      <div className='flex flex-col items-start text-start gap-6 max-w-3xl'>
        <h1 className='text-5xl font-bold'>
          Halaman Cek Gizi Sedang Dalam Tahap Pengembangan 🚧
        </h1>
        <p className='text-lg flex '>
          Kami sedang bekerja keras untuk menghadirkan informasi yang bermanfaat
          dan fitur-fitur terbaik guna mendukung kesehatan anak Anda. Silakan
          kunjungi kami kembali dalam waktu dekat untuk melihat pembaruan
          terbaru. Terima kasih atas kesabaran dan pengertian Anda.
        </p>
        <Link href={'/'}>
          <button className='px-6 py-3 text-[#87003d] bg-white rounded-md border border-[#87003d] hover:bg-[#87003d] hover:text-white hover:border-white transition duration-300 flex items-center gap-2 cursor-pointer'>
            <RiHomeOfficeLine /> Halaman Utama
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Edukasi;
