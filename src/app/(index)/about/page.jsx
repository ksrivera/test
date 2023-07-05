'use client'

import BackToTop from "@/components/BackToTop/BackToTop";
import Timeline from "@/components/timeline/Timeline";

export async function generateMetadata({ params }) {
  return {
    title: 'About | UCode Clinic',
    description: 'UCode Clinic About Page',
  }
}

const EventPage = () => {
  return (
    <div className='max-w-screen-xl mx-auto pt-10 pb-10'>
      
      <Timeline/>
      <BackToTop />
    </div>
  )
}

export default EventPage