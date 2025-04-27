// import React from 'react';
// import { AiOutlineHome } from 'react-icons/ai';
// import { FaLinkedin } from 'react-icons/fa';
// import Link from 'next/link';
// import Image from 'next/image';
// import { users } from '@/app/developer-items/users';

// const Items = () => {
//   return (
//     <div className='w-screen h-screen flex flex-col justify-center items-center text-white bg-[#87003d] overflow-auto'>
//       <h1 className='text-4xl font-bold mb-8 text-center'>
//         Cohort DBS Foundation`s Coding Camp 2025 - Road to Future Workforce
//       </h1>
//       <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
//         {users.map((user) => (
//           <div
//             key={user.id}
//             className='flex flex-col items-center text-center gap-4'
//           >
//             <Image
//               src={user.image}
//               alt={user.name}
//               width={150}
//               height={150}
//               className='object-cover rounded-full border-4 border-white w-[150px] h-[150px]'
//             />
//             <div>
//               <span className='block text-xl font-semibold'>{user.name}</span>
//               <span className='block text-lg font-bold'>{user.role}</span>
//             </div>
//             <a
//               href={user.linkedin}
//               target='_blank'
//               rel='noopener noreferrer'
//               className='text-white transition duration-300 flex items-center gap-2 transform hover:scale-105 active:scale-95'
//             >
//               <FaLinkedin /> LinkedIn
//             </a>
//           </div>
//         ))}
//       </div>
//       <div className='mt-8'>
//         <Link href={'/'}>
//           <button className='px-6 py-3 text-[#87003d] bg-white rounded-md border border-white hover:bg-[#87003d] hover:text-white transition duration-300 flex items-center gap-2 cursor-pointer'>
//             <AiOutlineHome /> Halaman Utama
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Items;
