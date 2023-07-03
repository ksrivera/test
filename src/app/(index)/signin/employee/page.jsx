import React from 'react'
import Link from 'next/link'
import BackToTop from '@/components/BackToTop/BackToTop'

const EmployeeSignIn = () => {
  return (
    <div>
        <section className="bg-green-100">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-emerald-900 md:text-2xl ">
                            Employee Sign In
                        </h1>
                        <htmlForm className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-emerald-900 ">Email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-emerald-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-600 block w-full p-2.5 " placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-emerald-900 ">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-emerald-900 sm:text-sm rounded-lg focus:border-green-600 focus:ring-green-500 focus:green-primary-600 block w-full p-2.5 " required=""/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-emerald-500 ">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-emerald-600 hover:underline ">htmlForgot password?</a>
                            </div>
                             <button type="submit" className="w-full mx-auto text-white items-center justify-center bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button> 


                        {/* <Link href=""> <button type="button" className="text-white bg-gradient-to-r bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3">Login</button></Link> */}

                            <p className="text-sm font-light text-gray-500">
                                <span className='pr-2'>Don’t have an account yet?</span>
                                <Link href="#" className="font-medium text-green-600 hover:underline">
                                    Sign Up
                                </Link>
                            </p>
                        </htmlForm>
                    </div>
                </div>
            </div>
        </section>
        <BackToTop/>
    </div>
  )
}

export default EmployeeSignIn