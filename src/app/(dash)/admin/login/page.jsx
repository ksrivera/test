'use client'

import Link from 'next/link'
import { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

const AdminLogin = () => {
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
        <section className="bg-green-100 ">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-emerald-900 md:text-2xl text-center">
                            <span>Admin Sign In</span>
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-emerald-900 ">Email</label>
                                <input name="email"
                                  type="email"
                                  value={data.email}
                                  onChange={ e => setData({ ...data, email: e.target.value })}
                                  required className="bg-gray-50 border border-gray-300 text-emerald-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-600 block w-full p-2.5 " placeholder="name@company.com" required=""/>
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
{/*                                 <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 " required=""/>
                                    </div>
                                    <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-emerald-500 ">Remember me</label>
                                    </div>
                                </div> */}
                                <a href="#" className="text-sm font-medium text-emerald-600 hover:underline ">Forgot password?</a>
                            </div>
                             <button type="submit" className="w-full mx-auto text-white items-center justify-center bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button> 

                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AdminLogin