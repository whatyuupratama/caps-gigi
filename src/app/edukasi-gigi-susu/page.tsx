import React from 'react';
import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
const Proses = () => {
  return (
    <>
      <div className='w-screen h-screen bg-[#87003d] flex items-center justify-center text-white'>
        <div className=' bg-opacity-80 px-10 py-8 rounded-xl max-w-3xl w-full flex flex-col items-center'>
          <h1 className='font-bold text-5xl mb-4 text-start'>
            Fitur Edukasi Gigi Susu Sedang Dikembangkan 🚧
          </h1>
          <p className='text-lg text-justify leading-relaxed'>
            Terima kasih atas ketertarikan dan kepercayaan Anda terhadap layanan
            kami. Saat ini, fitur edukasi gigi susu masih dalam tahap
            pengembangan untuk memberikan pengalaman terbaik dan informasi yang
            bermanfaat bagi Anda dan keluarga.
          </p>
          <Link href='/' className='mt-4 w-full text-start'>
            <div className='mt-6'>
              <button className='px-6 py-3 text-white rounded-sm border cursor-pointer hover:bg-white hover:border-white hover:text-[#87003d] transition duration-300 flex items-center gap-2'>
                <IoIosArrowBack /> Halaman Utama
              </button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Proses;
