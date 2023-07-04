import BackToTop from '@/components/BackToTop/BackToTop'
import React from 'react'

export const metadata = {
    title: 'Events | UCode Clinic',
    description: 'UCode Clinic Events Page',
  }

const EventsPage = () => {
  return (
    <div>
        <section className="bg-emerald-200">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-emerald-900 md:text-5xl lg:text-6xl ">Events and Articles</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-emerald-700 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-700 transition">
                        Get started
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.5d86 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-emerald-100 text-gray-900 rounded-lg border border-gray-300 hover:bg-emerald-300 focus:ring-2 hover:text-white focus:ring-emerald-100 transition">
                        Learn more
                    </a>  
                </div>
            </div>
        </section>


        <div className='pt-10'></div>
                
        <div className="max-w-screen-xl mx-auto grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-emerald-100">
            <figure className="flex flex-col items-center justify-center p-8 text-center border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                    <h3 className="text-lg font-semibold text-gray-900 ">Very easy this was to integrate</h3>
                    <p className="my-4">If you care for your time, I hands down would go with this.</p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                    {/* <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/> */}
                    <div className="space-y-0.5 font-medium text-left">
                        <div>Bonnie Green</div>
                        <div className="text-sm text-gray-500 ">Developer at Open AI</div>
                    </div>
                </figcaption>    
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 rounded-tr-lg">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                    <h3 className="text-lg font-semibold text-gray-900">Solid foundation for any project</h3>
                    <p className="my-4">Designing with Figma components that can be easily translated to the utility classNamees of Tailwind CSS is a huge timesaver</p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                    {/* <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"/> */}
                    <div className="space-y-0.5 font-medium  text-left">
                        <div>Roberta Casas</div>
                        <div className="text-sm text-gray-500 ">Lead designer at Dropbox</div>
                    </div>
                </figcaption>    
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                    <h3 className="text-lg font-semibold text-gray-900">Mindblowing workflow</h3>
                    <p className="my-4">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application</p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                    {/* <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"/> */}
                    <div className="space-y-0.5 font-medium ">
                        <div>Jese Leos</div>
                        <div className="text-sm text-gray-500 ">Software Engineer at Facebook</div>
                    </div>
                </figcaption>    
            </figure>
            <figure className="flex flex-col items-center justify-center p-8 text-center  border-gray-200 rounded-b-lg md:rounded-br-lg">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
                    <h3 className="text-lg font-semibold text-gray-900 ">Efficient Collaborating</h3>
                    <p className="my-4">You have many examples that can be used to create a fast prototype for your team</p>
                </blockquote>
                <figcaption className="flex items-center justify-center space-x-3">
                    {/* <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"/> */}
                    <div className="space-y-0.5 font-medium ">
                        <div>Joseph McFall</div>
                        <div className="text-sm text-gray-500 0">CTO at Google</div>
                    </div>
                </figcaption>    
            </figure>
        </div>
        <BackToTop />
    </div>
    
  )
}

export default EventsPage