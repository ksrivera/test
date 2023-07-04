'use client'

import Link from 'next/link'
import { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import BackToTop from '@/components/BackToTop/BackToTop'
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';



const StudentSignIn = () => {
    const session = useSession();
    const router = useRouter();

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const loginUser = async (e) => {
        e.preventDefault();
        signIn('credentials', { ...data, redirect: false })
        .then((callback) => {
            if (callback?.error) {
                toast.error(callback.error);
            } 
            
            if (callback?.ok && !callback?.error) {
                toast.success('Logged in successfully!');
                router.push('/student/dashboard');
            }

            
        });
    }

  return (
    <div>
        <section className='bg-green-100'>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-emerald-900 md:text-2xl">
                            Student Sign In
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={(loginUser)}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-emerald-900 pt-3">Email</label>
                                <input  id="email"
                                  name="email"
                                  type="email"
                                  value={data.email}
                                  onChange={ e => setData({ ...data, email: e.target.value })}
                                  required className="bg-gray-50 border border-gray-300 text-emerald-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-600 block w-full p-2.5 " placeholder="name@email.com" required=""/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-emerald-900 ">Password</label>
                                <input id="password"
                                  name="password"
                                  type="password"
                                  autoComplete="current-password"
                                  value={data.password}
                                  onChange={ e => setData({ ...data, password: e.target.value })}
                                  required placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-emerald-900 sm:text-sm rounded-lg focus:border-green-600 focus:ring-green-500 focus:green-primary-600 block w-full p-2.5 " required=""/>
                            </div>
                            <div className="flex items-center justify-between">
                            </div>  
                             <button type="submit" className="w-full mx-auto text-white items-center justify-center bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button> 
                             <p className='w-full flex flex-col items-center mx-auto text-lg text-green-400'>Or</p>
                             <div className='w-full mx-auto flex text-white items-center justify-center bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                                <FcGoogle className='text-2xl'/>
                                <button type="button" onClick={() => signIn('google', {callbackUrl: '/student/dashboard'})} className="pl-1"> Google</button> 
                             </div>
                             <div className='w-full mx-auto flex text-white items-center justify-center bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                                <AiFillGithub className='text-2xl'/>
                                <button type="button" onClick={() => signIn('github', {callbackUrl: '/student/dashboard'})}  className="pl-1"> GitHub</button> 
                             </div>
                             <div className='w-full mx-auto flex text-white items-center justify-center bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'>
                                <BsFacebook className='text-2xl'/>
                                <button type="button" className="pl-1"> Facebook</button> 
                             </div>
                            <p className="text-sm font-light text-gray-500">
                                <span className='pr-2'>Don’t have an account yet?</span>
                                <Link href="/register" className="font-medium text-green-600 hover:underline">
                                    Sign Up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <BackToTop />
    </div>
  )
}

export default StudentSignIn