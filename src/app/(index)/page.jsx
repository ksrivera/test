'use client'

import BackToTop from '@/components/BackToTop/BackToTop'
import BarChart from '@/components/BarChart/BarChart'
import Accordion from '@/components/accordion/Accordion'
import Hero from '@/components/hero/Hero'
import { useEffect } from 'react'
import useSWR from 'swr'
import { Alert } from "flowbite-react";
import { Dropdown } from "flowbite-react";
import CardComponent from '@/components/CardComponent/CardComponent'

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
