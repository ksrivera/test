/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/htmlForms'),
    ],
  }
  ```
*/

'use client'

import { useState } from "react"
import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";


export default function Register() {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const registerUser = async e => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/auth/register', data)
        .then(() => toast.success('User has been registered!'))
        .catch(() => toast.error('Something went wrong!'));

    }

    return (
      <>
        {/* <div classNameName="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div classNameName="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              classNameName="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 classNameName="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register to UCode Clinic
            </h2>
          </div>
  
          <div classNameName="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <htmlForm classNameName="space-y-6" onSubmit={(registerUser)}>
            <div>
                <label htmlhtmlFor="name" classNameName="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
                <div classNameName="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={data.value}
                    onChange={ e => setData({ ...data, name: e.target.value })}
                    required
                    classNameName="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlhtmlFor="email" classNameName="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div classNameName="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={ e => setData({ ...data, email: e.target.value })}
                    required
                    classNameName="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div classNameName="flex items-center justify-between">
                  <label htmlhtmlFor="password" classNameName="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div classNameName="text-sm">
                    <a href="#" classNameName="font-semibold text-indigo-600 hover:text-indigo-500">
                      htmlForgot password?
                    </a>
                  </div>
                </div>
                <div classNameName="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={data.password}
                    onChange={ e => setData({ ...data, password: e.target.value })}
                    required
                    classNameName="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  classNameName="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </htmlForm>
  
            <p classNameName="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <a href="#" classNameName="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p>
          </div>
        </div> */}

        <div>
        <section className="bg-green-100">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-emerald-900 md:text-2xl ">
                            Student Registration
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={(registerUser)}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-emerald-900">Full Name</label>
                                <input name="name"
                                  type="name"
                                  value={data.name}
                                  onChange={ e => setData({ ...data, name: e.target.value })}
                                  required 
                                  className="bg-gray-50 border border-gray-300 text-emerald-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-600 block w-full p-2.5" placeholder="Juanito Juanita"/>
                            </div>
                            <div>
                                <label htmlFor="email" 
                                className="block mb-2 text-sm font-medium text-emerald-900 ">Email</label>
                                <input name="email"
                                  type="email"
                                  value={data.email}
                                  onChange={ e => setData({ ...data, email: e.target.value })}
                                  required className="bg-gray-50 border border-gray-300 text-emerald-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-600 block w-full p-2.5" placeholder="name@email.com"/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-emerald-900">Password</label>
                                <input id="password"
                                  name="password"
                                  type="password"
                                  autoComplete="current-password"
                                  value={data.password}
                                  onChange={ e => setData({ ...data, password: e.target.value })}
                                  required placeholder="•••••••••••••••" 
                                  className="bg-gray-50 border border-gray-300 text-emerald-900 sm:text-sm rounded-lg focus:border-green-600 focus:ring-green-500 focus:green-primary-600 block w-full p-2.5"/>
                            </div>
                            <button type="submit" className="w-full mx-auto text-white items-center justify-center bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                              Sign Up
                            </button> 
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
      </>
    )
  }
  