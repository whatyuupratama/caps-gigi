'use client';
import React, { useState } from 'react';
import { Ripple } from '@/components/magicui/ripple';
import Link from 'next/link';
import Button from '@/components/fragments/Button';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoIosArrowBack } from 'react-icons/io';
import { CSSProperties } from 'react';
import Infopenting from './infopenting';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
const world = `Yuk, Cegah Gigi Berlubang! 🦷`;
const GigiDetection = () => {
  const [showInput, setShowInput] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({
    question1: null,
    question2: null,
    question3: null,
    question4: null,
    question5: null,
  });
  const [showResult, setShowResult] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleButtonClick = () => {
    setShowInput(true);
    setCurrentQuestion(1);
  };

  const handleAnswer = (question: string, answer: 'yes' | 'no') => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  const handleNext = () => {
    if (!isCurrentQuestionAnswered()) {
      setShowAlert(true);
      return;
    }

    if (currentQuestion < 5) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion === 1) {
      setShowInput(false);
      setCurrentQuestion(0);
    } else if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const isCurrentQuestionAnswered = () => {
    switch (currentQuestion) {
      case 1:
        return answers.question1 !== null;
      case 2:
        return answers.question2 !== null;
      case 3:
        return answers.question3 !== null;
      case 4:
        return answers.question4 !== null;
      case 5:
        return answers.question5 !== null;
      default:
        return false;
    }
  };
  const calculateRisk = () => {
    let riskScore = 0;

    if (answers.question1 === 'yes') riskScore++; // Makan/minum manis
    if (answers.question2 === 'yes') riskScore++; // Tidur dengan botol/dot manis
    if (answers.question3 === 'no') riskScore++; // Jarang membersihkan gigi
    if (answers.question4 === 'yes') riskScore++; // Riwayat keluarga
    if (answers.question5 === 'yes') riskScore++; // Kebiasaan menggigit benda keras

    if (riskScore >= 3) {
      return 'Anak anda terindikasi risiko tinggi gigi berlubang. Konsultasikan dengan dokter gigi segera.';
    } else {
      return 'Anak anda terindikasi risiko rendah gigi berlubang. Tetap jaga kebersihan gigi dan mulut yaa.';
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const calculateProgress = () => {
    return (currentQuestion / 5) * 100;
  };

  const questionStyle: CSSProperties = {
    height: '250px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'center',
  };

  return (
    <div className='w-screen h-screen bg-[#87003d] flex justify-center items-center'>
      <div className='w-2/3 h-[55vh] bg-[#87003d] shadow-2xl rounded-xl overflow-hidden relative flex items-center justify-center px-16 py-10'>
        <Ripple />
        {showAlert && (
          <div className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#87003d] border text-white rounded-md shadow-lg p-6 z-50'>
            <p className='text-2xl font-bold '>Waduhh! 👶🏻</p>
            <p className='text-sm '>
              Sepertinya anda belum memilih jawaban untuk pertanyaan ini.
            </p>
            <div className='mt-4 flex justify-end'>
              <button
                onClick={closeAlert}
                className='px-4 py-1 cursor-pointer border border-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white'
              >
                Oke
              </button>
            </div>
          </div>
        )}
        <div className='relative z-10 flex flex-col gap-6 text-white text-center md:text-left'>
          <Link href='/' passHref>
            <span className='text-lg font-semibold hover:text-gray-200 hover:underline flex items-center gap-2'>
              <FaArrowLeftLong /> Halaman utama
            </span>
          </Link>

          {currentQuestion === 0 && !showInput && (
            <>
              <TextGenerateEffect words={world} className='w-1/2' />
              <span className='text-lg font-semibold'>
                Menjaga kesehatan gigi adalah bagian penting dari kesehatan
                secara keseluruhan. Yuk, deteksi sejak dini untuk mencegah gigi
                berlubang pada si kecil. Dapatkan tips terbaik untuk menjaga
                kesehatan gigi dan mulut buah hati Anda.
              </span>
              <div className='mt-6'>
                <Button
                  value='Mulai Deteksi'
                  variant='white'
                  className='px-10 py-3 rounded-lg font-semibold hover:border-white'
                  onClick={handleButtonClick}
                />
              </div>
            </>
          )}

          {showInput && !showResult && currentQuestion > 0 && (
            <div className='mt-6'>
              <div style={questionStyle}>
                {currentQuestion === 1 && (
                  <div className='question '>
                    <div className='flex flex-col gap-3'>
                      <span className='font-bold text-4xl'>
                        Anak anda mengonsumsi makanan atau minuman manis dalam
                        sehari?
                      </span>
                      <div className='mt-2 flex justify-start gap-4'>
                        <button
                          onClick={() => handleAnswer('question1', 'yes')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question1 === 'yes'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Iya
                        </button>
                        <button
                          onClick={() => handleAnswer('question1', 'no')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question1 === 'no'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Tidak
                        </button>
                      </div>
                      <Infopenting />
                    </div>
                  </div>
                )}

                {currentQuestion === 2 && (
                  <div className='question'>
                    <div className='flex flex-col gap-3'>
                      <span className='font-bold text-4xl'>
                        Anak anda sering tidur dengan botol susu atau dot atau
                        minuman manis lainnya
                      </span>
                      <div className='mt-2 flex justify-start gap-4'>
                        <button
                          onClick={() => handleAnswer('question2', 'yes')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question2 === 'yes'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Iya
                        </button>
                        <button
                          onClick={() => handleAnswer('question2', 'no')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question2 === 'no'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Tidak
                        </button>
                      </div>
                      <Infopenting />
                    </div>
                  </div>
                )}

                {currentQuestion === 3 && (
                  <div className='question'>
                    <div className='flex flex-col gap-3'>
                      <span className='font-bold text-4xl'>
                        Seberapa sering anda membersihkan gigi anak anda dengan
                        kain kasa, sikat gigi anak, atau cara lainnya?
                      </span>
                      <div className='mt-2 flex justify-start gap-4'>
                        <button
                          onClick={() => handleAnswer('question3', 'yes')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question3 === 'yes'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Iya
                        </button>
                        <button
                          onClick={() => handleAnswer('question3', 'no')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question3 === 'no'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Tidak
                        </button>
                      </div>
                      <Infopenting />
                    </div>
                  </div>
                )}

                {currentQuestion === 4 && (
                  <div className='question'>
                    <div className='flex flex-col gap-3'>
                      <span className='font-bold text-4xl'>
                        Apakah ada anggota keluarga dekat yang memiliki riwayat
                        gigi berlubang yang sering atau parah?
                      </span>
                      <div className='mt-2 flex justify-start gap-4'>
                        <button
                          onClick={() => handleAnswer('question4', 'yes')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question4 === 'yes'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Iya
                        </button>
                        <button
                          onClick={() => handleAnswer('question4', 'no')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question4 === 'no'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Tidak
                        </button>
                      </div>
                      <span className='text-[12px] text-zinc-200 font-semibold'>
                        Pilih jawaban yang paling sesuai untuk anak Anda.
                      </span>
                    </div>
                  </div>
                )}

                {currentQuestion === 5 && (
                  <div className='question'>
                    <div className='flex flex-col gap-3'>
                      <span className='font-bold text-4xl'>
                        Apakah anak Anda memiliki kebiasaan menggigit
                        benda-benda keras seperti mainan, pensil, atau kuku?
                      </span>
                      <div className='mt-2 flex justify-start gap-4'>
                        <button
                          onClick={() => handleAnswer('question5', 'yes')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question5 === 'yes'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Iya
                        </button>
                        <button
                          onClick={() => handleAnswer('question5', 'no')}
                          className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                            answers.question5 === 'no'
                              ? 'bg-[#A0153E] border text-white'
                              : 'bg-white hover:bg-gray-200'
                          }`}
                        >
                          Tidak
                        </button>
                      </div>
                      <span className='text-[12px] text-zinc-200 font-semibold'>
                        Pilih jawaban yang paling sesuai untuk anak Anda.
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className='mt-4'>
                <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                  <div
                    className='bg-zinc-500 h-2.5 rounded-full'
                    style={{ width: `${calculateProgress()}%` }}
                  ></div>
                </div>
                <span className='text-sm mt-2'>
                  Pertanyaan {currentQuestion} dari 5
                </span>
              </div>

              <div className='mt-6 flex justify-between'>
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className='px-6 py-3 text-white rounded-sm border cursor-pointer hover:bg-white hover:border-white hover:text-[#87003d] transition duration-300 flex items-center gap-2'
                >
                  <IoIosArrowBack /> Sebelumnya
                </button>
                <button
                  onClick={handleNext}
                  className={`px-6 py-2 bg-white text-black rounded-lg transition duration-300 ${
                    isCurrentQuestionAnswered()
                      ? 'cursor-pointer hover:bg-gray-200'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  {currentQuestion === 5 ? 'Lihat Hasil' : 'Selanjutnya'}
                </button>
              </div>
            </div>
          )}

          {showResult && (
            <div className='mt-6'>
              <span className='font-bold text-7xl'>Hasil Deteksi 🤱</span>
              <p className='mt-4 text-lg'>{calculateRisk()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GigiDetection;

// bates

// 'use client'; // Komponen ini dieksekusi di sisi klien

// import React, { useState } from 'react';
// import { FileUpload } from '@/components/ui/file-upload'; // Pastikan path sudah benar
// import Link from 'next/link';
// import { ShimmerButton } from '@/components/magicui/shimmer-button';
// import { FaArrowLeftLong } from 'react-icons/fa6';
// import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
// import { Ripple } from '@/components/magicui/ripple';

// const words = `Deteksi Risiko Pertumbuhan Gigi Bungsu 🦷`;

// const GigiDetection = () => {
//   const [file, setFile] = useState<File | null>(null);
//   const handleFileChange = (uploadedFile: File | null) => {
//     setFile(uploadedFile);
//   };

//   return (
//     <div className='min-h-screen bg-[#96063b] flex justify-center items-center'>
//       <Ripple />
//       <div className='flex flex-col md:flex-row justify-between w-full max-w-6xl px-6 py-8'>
//         <div className='relative z-10 flex flex-col gap-6 text-white text-center md:text-left w-full md:w-1/2'>
//           <Link href='/' passHref>
//             <span className='text-lg font-semibold hover:text-gray-200 hover:underline flex items-center gap-2'>
//               <FaArrowLeftLong /> Halaman Utama
//             </span>
//           </Link>

//           <TextGenerateEffect words={words} />
//           <p className='text-sm font-medium mt-4'>
//             Deteksi sekarang untuk mencegah komplikasi gigi bungsu Anda.{' '}
//             <b>
//               Program ini memerlukan hasil ronsen gigi untuk pemeriksaan dan
//               penilaian risiko lebih akurat.
//             </b>
//           </p>

//           {file && (
//             <div className=' flex justify-start'>
//               <Link href='/gigi-detection' passHref>
//                 <ShimmerButton
//                   className='text-sm'
//                   background='#A0153E'
//                   shimmerSize='0.1em'
//                 >
//                   Yuk,Deteksi
//                 </ShimmerButton>
//               </Link>
//             </div>
//           )}
//         </div>

//         <div className='w-full md:w-1/2 mt-8 md:mt-0'>
//           <FileUpload onChange={handleFileChange} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GigiDetection;
