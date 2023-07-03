'use client'

import BackToTop from '@/components/BackToTop/BackToTop'
import Hero from '@/components/hero/Hero'

//import "tw-elements/dist/css/tw-elements.min.css";
//import Hero from 'public/assets/images/hero_2.jpg'




export default async function Home() {
  //const { data, error, isLoading } = useSWR('/api/user', fetcher);
  
  return (
    <>
      <div><Hero/></div>    
      
      <BackToTop/>
    </>
  )
}
