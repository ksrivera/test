'use client'

import Link from 'next/link'
import { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const AdminSignIn = () => {
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
                router.push('/dashboard2');
            }

            
        });
    }
  return (
    <div>
        <section class="bg-gray-50 ">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                
                <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-emerald-900 md:text-2xl ">
                            Admin Sign In
                        </h1>
                        <form class="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-emerald-900 ">Email</label>
                                <input name="email"
                                  type="email"
                                  value={data.email}
                                  onChange={ e => setData({ ...data, email: e.target.value })}
                                  required class="bg-gray-50 border border-gray-300 text-emerald-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-600 block w-full p-2.5 " placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-emerald-900 ">Password</label>
                                <input id="password"
                                  name="password"
                                  type="password"
                                  autoComplete="current-password"
                                  value={data.password}
                                  onChange={ e => setData({ ...data, password: e.target.value })}
                                  required placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-emerald-900 sm:text-sm rounded-lg focus:border-green-600 focus:ring-green-500 focus:green-primary-600 block w-full p-2.5 " required=""/>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-start">
                                    <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required=""/>
                                    </div>
                                    <div class="ml-3 text-sm">
                                    <label for="remember" class="text-emerald-500 ">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" class="text-sm font-medium text-emerald-600 hover:underline ">Forgot password?</a>
                            </div>
                             <button type="submit" class="w-full mx-auto text-white items-center justify-center bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button> 


                        {/* <Link href=""> <button type="button" class="text-white bg-gradient-to-r bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-3">Login</button></Link> */}

                            <p class="text-sm font-light text-gray-500">
                                <span className='pr-2'>Don’t have an account yet?</span>
                                <Link href="#" class="font-medium text-green-600 hover:underline">
                                    Sign Up
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AdminSignIn