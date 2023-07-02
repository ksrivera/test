

import BackToTop from '@/components/BackToTop/BackToTop'

import Accordion from '@/components/accordion/Accordion'
import Hero from '@/components/hero/Hero'

//import "tw-elements/dist/css/tw-elements.min.css";



//import Hero from 'public/assets/images/hero_2.jpg'


export default function Home() {
  //const { data, error, isLoading } = useSWR('/api/user', fetcher);


  return (
    <>
      <div><Hero/></div>    

      <Accordion />
      <BackToTop/>
    </>
  )
}
