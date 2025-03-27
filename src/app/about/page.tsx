import React from 'react';
import Navbar from '@/components/navbar';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import Link from 'next/link';
const About = () => {
  return (
    <>
      <Navbar />
      <div className='w-screen h-screen flex justify-center items-center bg-[#9f033c]'>
        <div className='text-white w-2/3 flex h-auto justify-start items-start border p-5 rounded-lg flex-col gap-4 '>
          <span className='text-5xl font-bold'> Hai 🦷</span>

          <div className='flex flex-col gap-2 justify-start font-bold'>
            <span>Nama : Wahyu Pratama</span>
            <span>NIM : 22201190</span>
            <span>Fakultas: Tehnik dan Design </span>
          </div>
          <span>
            <b>Tema Skipsi: </b>Implementasi Metode Random Forest Classifier
            untuk Memprediksi Risiko Gigi Berlubang Berdasarkan Kebiasaan dan
            Perawatan Gigi pada Anak Usia 6 Bulan - 3 Tahun
          </span>
          <span>
            <b>Alasan : </b>Saat ini, belum ada jurnal yang secara spesifik
            mengimplementasikan metode Random Forest Classifier untuk
            memprediksi risiko gigi berlubang pada anak usia 6 bulan hingga 3
            tahun.
          </span>
          <span>
            <b>Sampel Data: </b>
            <div className='flex flex-col'>
              <Link
                href={'https://ejournal.poltekkes-denpasar.ac.id/index.php/JKG'}
                className='hover:underline font-bold'
              >
                - Link Jurnal Kesehatan Gigi anak Dental Health Journal
              </Link>
              <Link
                href={
                  'https://eresources.poltekkes-smg.ac.id/storage/journal/Jurnal-Kesehatan-Gigi/Vol-7,-No-1-(2020)-Juni-2020/24d3c58fc53fe8dbb15b25c1db485984.pdf'
                }
                className='hover:underline font-bold'
              >
                - Link Jurnal Kesehatan Gigi anak Poltekes SMG
              </Link>
              <Link
                href={'https://jurnal.unpad.ac.id/jkg/article/view/18509/0'}
                className='hover:underline font-bold'
              >
                - Link Kesehatan gigi dan mulut terkait kualitas hidup anak usia
                4-5 tahun di Desa Cilayung
              </Link>
            </div>
          </span>
          <span className='flex justify-between w-full'>
            {' '}
            <span className='text-[6px]'>*karna saya sering sakit gigi</span>
            <Link href='/gigi-detection' passHref>
              <ShimmerButton
                className='text-sm'
                background='#A0153E'
                shimmerSize='0.1em'
              >
                Check Sekarang
              </ShimmerButton>
            </Link>
          </span>
        </div>
      </div>
      ;
    </>
  );
};
export default About;
