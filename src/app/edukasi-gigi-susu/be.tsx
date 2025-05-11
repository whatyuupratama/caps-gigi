// import React from 'react';
// import { GridPatternDemo } from '@/components/fragments/molecule/GridPatternDemo';
// import Image from 'next/image';
// import Navbar from '@/components/navbar';
// import { BackgroundBoxesDemo } from '@/components/fragments/molecule/BackgroundBoxesDemo';
// import Footer from '@/components/footer';
// import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

// const world = `Yuk, Lebih Aware Kesehatan Gigi Anak! 🦷`;
// const Proses = () => {
//   return (
//     <>
//       <Navbar />
//       <div className='w-screen h-[200vh] flex items-center justify-center py-16 relative overflow-hidden '>
//         <GridPatternDemo className='absolute inset-0 w-full h-full' />

//         <div className='container relative z-10 mx-auto px-4 md:px-8 '>
//           <div className='flex flex-col md:flex-row items-center md:items-start justify-center  gap-8'>
//             <div className='flex-shrink-0'>
//               <div className='relative w-full h-full rounded-xl overflow-hidden'>
//                 <Image
//                   src='/edukasi.png'
//                   alt='Logo'
//                   objectFit='cover'
//                   width={250}
//                   height={250}
//                 />
//               </div>
//             </div>
//             <div className='text-center flex flex-col justify-center self-center h-full md:text-left max-w-lg gap-6'>
//               {/* <p className='text-4xl font-bold text-[#9f033c]'>Infomasi</p> */}
//               <TextGenerateEffect
//                 words={world}
//                 className='w-2/2 font-extrabold '
//                 textColor='text-black'
//               />
//               <p className='text-lg md:text-xl mb-6 text-gray-600 flex items-center'>
//                 Mari pelajari cara mencegah gigi berlubang pada anak sejak dini.
//                 Di bawah ini, Anda akan menemukan informasi penting untuk
//                 menjaga kesehatan gigi si kecil.
//               </p>
//             </div>
//           </div>
//           <div className='w-full h-[100vh] bg-[#87003d] mt-26 rounded-3xl text-white relative overflow-hidden'>
//             <BackgroundBoxesDemo className='absolute inset-0 w-full h-full z-0' />
//             <div className='relative z-10 flex items-center justify-center h-full'>
//               <p className='text-2xl font-bold text-white'>
//                 Teks di depan background
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Proses;
