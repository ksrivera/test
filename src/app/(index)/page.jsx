'use client'

import BackToTop from '@/components/BackToTop/BackToTop'
import Hero from '@/components/hero/Hero'

export default async function Home() {
  //const { data, error, isLoading } = useSWR('/api/user', fetcher);
  
  return (
    <>
      <div><Hero/></div>    
      <BackToTop/>
    </>
  )
}
