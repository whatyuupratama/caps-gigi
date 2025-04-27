import React from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import Button from '@/components/fragments/Button';
import Link from 'next/link';

const Registrasi = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='w-full max-w-7xl rounded-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8'>
        <div className='w-full md:w-1/2 flex justify-center'>
          <Image
            src='https://i.pinimg.com/736x/52/a7/43/52a7435facd190a2c559731f089a794c.jpg'
            alt='image'
            width={400}
            height={350}
            className='rounded-lg object-cover'
            loading='lazy'
            blurDataURL='https://i.pinimg.com/736x/52/a7/43/52a7435facd190a2c559731f089a794c.jpg'
          />
        </div>
        <div className='w-full md:w-1/2 flex flex-col gap-6'>
          <div className='text-center md:text-left'>
            <h1 className='text-4xl font-bold text-[#9f033c]'>
              Masuk Sekarang
            </h1>
            <p className='mt-2 text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              atque totam earum enim dolorem, asperiores dolore?
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <div>
              <p className='text-gray-700 font-medium'>Email</p>
              <Input
                placeholder='Masukkan email yang terdaftar'
                className='p-4 border rounded-lg w-full'
              />
            </div>

            <div>
              <p className='text-gray-700 font-medium'>Password</p>
              <Input
                placeholder='Masukkan password'
                type='password'
                className='p-4 border rounded-lg w-full'
              />
            </div>
            <Button value='Registrasi' variant='red'></Button>
            <p>
              Sudah punya akun?
              <Link href={'auth/registerasi'} className={'text-[#9f033c]'}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrasi;
