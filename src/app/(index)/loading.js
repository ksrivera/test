import React from 'react'
import Image from 'next/image'

export const metadata = {
  title: 'Home | UCode Clinic',
  description: 'UCode Clinic Home Page',
}

const LoadingPage = () => {
  return (
    <div className='max-w-screen-xl h-screen mx-auto flex items-center justify-center'>
        <Image
          src="/assets/images/loading.svg"
          height={100}
          width={100}
          alt="loading icon"
        />
    </div>
  )
}

export default LoadingPage;