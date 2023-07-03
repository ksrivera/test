'use client'

import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Image from "next/image"

const Hero = () => {
    
  return (
    <div className='min-h-screen flex justify-center items-center bg-hero1 bg-fixed bg-no-repeat bg-center'>
        <Parallax pages={5}>
            <ParallaxLayer offset={0.2} speed={1}>
                <section>
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Welcome to UCode School Clinic</h1>
                            <p className="max-w-2xl mb-6 font-light text-slate-900 lg:mb-8 md:text-lg lg:text-2xl">Your Health, Our Priority: Empowering Students for Success</p>

                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img className='rounded-lg' src="/assets/images/hero_1.jpg" alt="mockup"/>
                        </div>                
                    </div>
                </section> 

            </ParallaxLayer>

            <ParallaxLayer offset={1.5} speed={1}>

            <section>
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">United Nation SDG 2023</h1>
                            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-2xl text-slate-900">In 2015, countries adopted the Sustainable Development Goals (SDGs) . They embarked on a journey to achieve the 2030 Agenda to promote prosperity, address inequalities while protecting the environment. The 17 SDGs offer the most practical and effective pathway to tackle the causes of poverty, violent conflict, human rights abuses, climate change and environmental degradation.</p>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img className='rounded-lg' src="/assets/images/hero_1.jpg" alt="mockup"/>
                        </div>                
                    </div>
                </section> 

            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={1}>

                <section>
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">School Clinic Digitization</h1>
                            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-2xl text-slate-900">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img className='rounded-lg' src="/assets/images/hero_1.jpg" alt="mockup"/>
                        </div>                
                    </div>
                </section> 

            </ParallaxLayer>


            <ParallaxLayer offset={3} speed={1}>

                <section>
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">School Clinic Digitization</h1>
                            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-slate-900">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                        </div>
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img className='rounded-lg' src="/assets/images/hero_1.jpg" alt="mockup"/>
                        </div>                
                    </div>
                </section> 



            </ParallaxLayer>
            <ParallaxLayer offset={3.5} speed={1}>
                <section className="bg-transparent">
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">We didn't reinvent the wheel</h2>
                            <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
                            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
                        </div>
                    </div>
                </section>
            </ParallaxLayer>
        </Parallax> 
        <div> 
            
        {/*   <section className="bg-white">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Payments tool for software companies</h1>
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 focus:ring-primary-900">
                        Get started
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  rounded-lg ">
                        Speak to Sales
                    </a> 
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img className='rounded-lg' src="/assets/images/hero_1.jpg" alt="mockup"/>
                </div>                
            </div>
            </section> */}

        </div> 
    </div>
  )
}

export default Hero