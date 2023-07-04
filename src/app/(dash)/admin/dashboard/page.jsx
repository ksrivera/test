import React from 'react'
import Link from 'next/link'

const AdminPage = () => {
  return (
    <div>
        <section className="bg-green-700 grid h-screen content-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 justify-center items-center">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-slate-100 md:text-5xl lg:text-6xl">Hi Admin, User Authentication is Required</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-480">You need to login in order to view this page.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <Link href="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:ring-green-300">
                        Go to UCode Clinic Home Page
                        <svg aria-hidden="true" className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </Link>
                    <Link href="/admin/login" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center bg-slate-100 hover:bg-slate-200 text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 ">
                        Sign In
                    </Link>  
                </div>
            </div>
        </section>
    </div>
  )
}

export default AdminPage