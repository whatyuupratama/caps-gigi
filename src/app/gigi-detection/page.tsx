'use client';
import React, { useState, useEffect, CSSProperties } from 'react';
import { Ripple } from '@/components/magicui/ripple';
import Link from 'next/link';
import Button from '@/components/fragments/Button';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { IoIosArrowBack } from 'react-icons/io';
// import Infopenting from './infopenting';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const world = `Yuk, Cegah Gigi Berlubang! 🦷`;

interface Soal {
  id: string;
  pertanyaan: string;
}

const GigiDetection = () => {
  const [soal, setSoal] = useState<Soal[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: 'yes' | 'no' }>({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [apiResult, setApiResult] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:5000/soal')
      .then((res) => res.json())
      .then((data) => setSoal(data))
      .catch(() => setSoal([]));
  }, []);

  const handleSubmitToAPI = async () => {
    const payload: Record<string, number> = {};
    soal.forEach((q) => {
      payload[q.id] = answers[q.id] === 'yes' ? 1 : 0;
    });

    try {
      const res = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      setApiResult(data.hasil);
    } catch {
      setApiResult(
        'Gagal menghubungi server. Pastikan backend Flask berjalan.'
      );
    }
  };

  const handleButtonClick = () => {
    setShowInput(true);
    setCurrentQuestion(0);
  };

  const handleAnswer = (id: string, answer: 'yes' | 'no') => {
    setAnswers((prev) => ({
      ...prev,
      [id]: answer,
    }));
  };

  const isCurrentQuestionAnswered = () => {
    if (!soal.length) return false;
    return answers[soal[currentQuestion]?.id] !== undefined;
  };

  const handleNext = () => {
    if (!isCurrentQuestionAnswered()) {
      setShowAlert(true);
      return;
    }
    if (currentQuestion < soal.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
      handleSubmitToAPI();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion === 0) {
      setShowInput(false);
      setCurrentQuestion(0);
    } else if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
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

          {showInput && !showResult && soal.length > 0 && (
            <div className='mt-6'>
              <div style={questionStyle}>
                <div className='question'>
                  <div className='flex flex-col gap-3'>
                    <span className='font-bold text-4xl'>
                      {soal[currentQuestion]?.pertanyaan}
                    </span>
                    <div className='mt-2 flex justify-start gap-4'>
                      <button
                        onClick={() =>
                          handleAnswer(soal[currentQuestion].id, 'yes')
                        }
                        className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                          answers[soal[currentQuestion].id] === 'yes'
                            ? 'bg-[#A0153E] border text-white'
                            : 'bg-white hover:bg-gray-200'
                        }`}
                      >
                        Iya
                      </button>
                      <button
                        onClick={() =>
                          handleAnswer(soal[currentQuestion].id, 'no')
                        }
                        className={`px-6 py-2 rounded-sm text-black transition duration-300 cursor-pointer ${
                          answers[soal[currentQuestion].id] === 'no'
                            ? 'bg-[#A0153E] border text-white'
                            : 'bg-white hover:bg-gray-200'
                        }`}
                      >
                        Tidak
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-4'>
                <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                  <div
                    className='bg-zinc-500 h-2.5 rounded-full'
                    style={{
                      width: `${((currentQuestion + 1) / soal.length) * 100}%`,
                    }}
                  ></div>
                </div>
                <span className='text-sm mt-2'>
                  Pertanyaan {currentQuestion + 1} dari {soal.length}
                </span>
              </div>
              <div className='mt-6 flex justify-between'>
                <button
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className='px-6 py-3 text-white rounded-sm border cursor-pointer hover:bg-white hover:border-white hover:text-[#87003d] transition duration-300 flex items-center gap-2'
                >
                  <IoIosArrowBack />
                </button>
                <button
                  onClick={handleNext}
                  className={`px-6 py-2 bg-white text-black rounded-lg transition duration-300 ${
                    isCurrentQuestionAnswered()
                      ? 'cursor-pointer hover:bg-gray-200'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  {currentQuestion === soal.length - 1
                    ? 'Lihat Hasil'
                    : 'Selanjutnya'}
                </button>
              </div>
            </div>
          )}

          {showResult && (
            <div className='mt-6'>
              <span className='font-bold text-7xl'>Hasil Deteksi 🤱</span>
              <p className='mt-4 text-lg'>
                {apiResult ? apiResult : 'Memproses...'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GigiDetection;
