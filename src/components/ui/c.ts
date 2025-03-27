// FileUpload.tsx
// import React, { useRef, useState } from 'react';
// import { useDropzone } from 'react-dropzone';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { IconUpload } from '@tabler/icons-react';

// const FileUpload = ({
//   onChange,
// }: {
//   onChange?: (file: File | null) => void;
// }) => {
//   const [file, setFile] = useState<File | null>(null);
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   // Handle file change
//   const handleFileChange = (newFiles: File[]) => {
//     const selectedFile = newFiles[0];
//     setFile(selectedFile);
//     setPreviewUrl(URL.createObjectURL(selectedFile)); // create a preview URL for image
//     if (onChange) onChange(selectedFile); // Pass the file to the parent component
//   };

//   const { getRootProps, isDragActive } = useDropzone({
//     multiple: false,
//     noClick: true,
//     onDrop: handleFileChange,
//   });

//   const handleClick = () => {
//     fileInputRef.current?.click(); // Trigger file input on div click
//   };

//   return (
//     <div {...getRootProps()} className='w-full' onClick={handleClick}>
//       <motion.div className='p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden'>
//         <input
//           ref={fileInputRef}
//           id='file-upload-handle'
//           type='file'
//           accept='image/*'
//           className='hidden'
//           onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
//         />
//         <div className='absolute inset-0'></div>
//         <div className='flex flex-col items-center justify-center'>
//           <p className='relative z-20 font-sans font-bold text-base'>
//             Upload Rontgen Gigi
//           </p>
//           <p className='relative z-20 font-sans font-normal text-base mt-2'>
//             Seret atau klik untuk mengunggah
//           </p>

//           {file && previewUrl && (
//             <div className='relative w-full mt-10 max-w-xl mx-auto'>
//               <Image
//                 src={previewUrl}
//                 alt={file.name}
//                 width={200}
//                 height={200}
//                 objectFit='contain'
//               />
//             </div>
//           )}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default FileUpload;
