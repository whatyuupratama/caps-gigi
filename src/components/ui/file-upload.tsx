// import { cn } from '@/lib/utils';
// import React, { useRef, useState } from 'react';
// import { motion } from 'framer-motion'; // Menggunakan 'framer-motion' bukan 'motion/react'
// import { IconUpload } from '@tabler/icons-react';
// import { useDropzone } from 'react-dropzone';
// import Image from 'next/image';

// const mainVariant = {
//   initial: {
//     x: 0,
//     y: 0,
//   },
//   animate: {
//     x: 20,
//     y: -20,
//     opacity: 0.9,
//   },
// };

// const secondaryVariant = {
//   initial: {
//     opacity: 0,
//   },
//   animate: {
//     opacity: 1,
//   },
// };

// export const FileUpload = ({
//   onChange,
// }: {
//   onChange?: (file: File | null) => void;
// }) => {
//   const [file, setFile] = useState<File | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);

//   const handleFileChange = (newFiles: File[]) => {
//     const selectedFile = newFiles[0];

//     // Validasi file gambar
//     if (!selectedFile.type.startsWith('image/')) {
//       alert('Please upload a valid image file');
//       return;
//     }

//     setFile(selectedFile);
//     onChange?.(selectedFile);

//     // Buat URL untuk preview gambar
//     const newPreviewUrl = URL.createObjectURL(selectedFile);
//     setPreviewUrl(newPreviewUrl);
//     console.log(selectedFile);
//   };

//   const handleClick = () => {
//     fileInputRef.current?.click();
//   };

//   const { getRootProps, isDragActive } = useDropzone({
//     multiple: false, // Hanya menerima satu file
//     noClick: true,
//     onDrop: handleFileChange,
//     onDropRejected: (error) => {
//       console.log(error);
//     },
//   });

//   return (
//     <div className='w-full' {...getRootProps()}>
//       <motion.div
//         onClick={handleClick}
//         whileHover='animate'
//         className='p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden'
//       >
//         <input
//           ref={fileInputRef}
//           id='file-upload-handle'
//           type='file'
//           accept='image/*' // Hanya menerima file gambar
//           onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
//           className='hidden'
//         />
//         <div className='absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]'></div>
//         <div className='flex flex-col items-center justify-center text-center text-white'>
//           <p className='relative z-20 font-sans font-bold dark:text-neutral-300 text-base'>
//             Upload Rontgen Gigi
//           </p>
//           <p className='relative z-20 font-sans font-normal dark:text-neutral-400 text-base mt-2'>
//             Seret atau klik untuk mengunggah
//           </p>

//           <div
//             className='relative w-full mt-10 max-w-xl mx-auto'
//             style={{ aspectRatio: '4/3' }}
//           >
//             {file && (
//               <motion.div
//                 key='file-upload'
//                 layoutId='file-upload'
//                 className={cn(
//                   'relative overflow-hidden z-40 bg-white dark:bg-neutral-900 flex flex-col items-start justify-start md:h-auto p-4 mt-4 w-full mx-auto rounded-md',
//                   'shadow-sm'
//                 )}
//               >
//                 {/* Image Preview */}
//                 {previewUrl && (
//                   <div className='relative w-full h-40 md:h-48 mb-4 rounded-md overflow-hidden'>
//                     <Image
//                       src={previewUrl}
//                       alt={file.name}
//                       layout='fill'
//                       objectFit='contain' // Menggunakan 'contain' atau 'cover' sesuai preferensi
//                       className='object-center'
//                     />
//                   </div>
//                 )}

//                 <div className='flex justify-between w-full items-center gap-4'>
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     layout
//                     className='text-base text-neutral-700 dark:text-neutral-300 truncate max-w-xs'
//                   >
//                     {file.name}
//                   </motion.p>
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     layout
//                     className='rounded-lg px-2 py-1 w-fit shrink-0 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-white shadow-input'
//                   >
//                     {(file.size / (1024 * 1024)).toFixed(2)} MB
//                   </motion.p>
//                 </div>

//                 <div className='flex text-sm md:flex-row flex-col items-start md:items-center w-full mt-2 justify-between text-neutral-600 dark:text-neutral-400'>
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     layout
//                     className='px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 '
//                   >
//                     {file.type}
//                   </motion.p>

//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     layout
//                   >
//                     modified {new Date(file.lastModified).toLocaleDateString()}
//                   </motion.p>
//                 </div>
//               </motion.div>
//             )}

//             {!file && (
//               <motion.div
//                 layoutId='file-upload'
//                 variants={mainVariant}
//                 transition={{
//                   type: 'spring',
//                   stiffness: 300,
//                   damping: 20,
//                 }}
//                 className={cn(
//                   'relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md',
//                   'shadow-[0px_10px_50px_rgba(0,0,0,0.1)]'
//                 )}
//               >
//                 {isDragActive ? (
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className='text-neutral-600 flex flex-col items-center'
//                   >
//                     Drop it
//                     <IconUpload className='h-4 w-4 text-neutral-600 dark:text-neutral-400' />
//                   </motion.p>
//                 ) : (
//                   <IconUpload className='h-4 w-4 text-neutral-600 dark:text-neutral-300' />
//                 )}
//               </motion.div>
//             )}

//             {!file && (
//               <motion.div
//                 variants={secondaryVariant}
//                 className='absolute opacity-0 border border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md'
//               ></motion.div>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };
import { cn } from '@/lib/utils';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { IconUpload } from '@tabler/icons-react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const FileUpload = ({
  onChange,
}: {
  onChange?: (file: File | null) => void;
}) => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (newFiles: File[]) => {
    const selectedFile = newFiles[0];

    // Validasi file gambar
    if (!selectedFile.type.startsWith('image/')) {
      alert('Please upload a valid image file');
      return;
    }

    setFile(selectedFile);
    onChange?.(selectedFile);

    // Buat URL untuk preview gambar
    const newPreviewUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(newPreviewUrl);
    console.log(selectedFile);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false, // Hanya menerima satu file
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: (error) => {
      console.log(error);
    },
  });

  return (
    <div className='w-full' {...getRootProps()}>
      <motion.div
        onClick={handleClick} // Menambahkan onClick
        whileHover='animate'
        className='p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden'
      >
        <input
          ref={fileInputRef} // Menambahkan ref
          id='file-upload-handle'
          type='file'
          accept='image/*' // Hanya menerima file gambar
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className='hidden'
        />
        <div className='absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]'></div>
        <div className='flex flex-col items-center justify-center text-center text-white'>
          <p className='relative z-20 font-sans font-bold dark:text-neutral-300 text-base'>
            Upload Rontgen Gigi
          </p>
          <p className='relative z-20 font-sans font-normal dark:text-neutral-400 text-base mt-2'>
            Seret atau klik untuk mengunggah
          </p>

          <div
            className='relative w-full mt-10 max-w-xl mx-auto aspect-w-4 aspect-h-3' // Mengganti style dengan aspect ratio Tailwind
          >
            {file && (
              <motion.div
                key='file-upload' // Memastikan key unik
                layoutId='file-upload-selected'
                className={cn(
                  'relative overflow-hidden z-40 bg-white dark:bg-neutral-900 flex flex-col items-start justify-start md:h-auto p-4 mt-4 w-full mx-auto rounded-md',
                  'shadow-sm'
                )}
              >
                {/* Image Preview */}
                {previewUrl && (
                  <div className='relative w-full h-40 md:h-48 mb-4 rounded-md overflow-hidden'>
                    <Image
                      src={previewUrl}
                      alt={file.name}
                      layout='fill'
                      objectFit='contain' // Menggunakan 'contain' atau 'cover' sesuai preferensi
                      className='object-center'
                    />
                  </div>
                )}

                <div className='flex justify-between w-full items-center gap-4'>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layout
                    className='text-base text-neutral-700 dark:text-neutral-300 truncate max-w-xs'
                  >
                    {file.name}
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layout
                    className='rounded-lg px-2 py-1 w-fit shrink-0 text-sm text-neutral-600 dark:bg-neutral-800 dark:text-white shadow-input'
                  >
                    {(file.size / (1024 * 1024)).toFixed(2)} MB
                  </motion.p>
                </div>

                <div className='flex text-sm md:flex-row flex-col items-start md:items-center w-full mt-2 justify-between text-neutral-600 dark:text-neutral-400'>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layout
                    className='px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 '
                  >
                    {file.type}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    layout
                  >
                    modified {new Date(file.lastModified).toLocaleDateString()}
                  </motion.p>
                </div>
              </motion.div>
            )}

            {!file && (
              <motion.div
                layoutId='file-upload-default' //key unik
                variants={mainVariant}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                className={cn(
                  'relative group-hover/file:shadow-2xl z-40 bg-white dark:bg-neutral-900 flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md',
                  'shadow-[0px_10px_50px_rgba(0,0,0,0.1)]'
                )}
              >
                {isDragActive ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className='text-neutral-600 flex flex-col items-center'
                  >
                    Drop it
                    <IconUpload className='h-4 w-4 text-neutral-600 dark:text-neutral-400' />
                  </motion.p>
                ) : (
                  <IconUpload className='h-4 w-4 text-neutral-600 dark:text-neutral-300' />
                )}
              </motion.div>
            )}

            {!file && (
              <motion.div
                variants={secondaryVariant}
                className='absolute opacity-0 border border-dashed border-sky-400 inset-0 z-30 bg-transparent flex items-center justify-center h-32 mt-4 w-full max-w-[8rem] mx-auto rounded-md'
              ></motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
