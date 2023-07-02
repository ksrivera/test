'use client'

import { useRouter } from 'next/navigation'
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import BackToTop from '@/components/BackToTop/BackToTop';

export default function NotFound() {
    const router = useRouter();

    return (
        <div className='h-full'>
            <Navbar/>
                <div className='relative bg-notFound h-screen bg-cover bg-no-repeat bg-center'>
                    <button type='button' onClick={() => router.push('/')} className='absolute text-xl bg-green-500 hover:bg-green-600 rounded-full p-4 text-white bottom-48 left-1/2 -translate-x-1/2 transition'>Go Back to Home</button>
                </div>
            <BackToTop/>
            <Footer/>
        </div>
    )
  }

