'use client'

import Link from 'next/link'
import { useSession } from 'next-auth/react';

import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";



import AdminDashNavbar from '@/components/AdminNavbar/AdminDashNavbar';
import AdminSidebar from '@/components/AdminSidebar/AdminSidebar';
import PieComponent from '@/components/PieComponent/PieComponent';
import CardComponent from '@/components/CardComponent/CardComponent';


const data = [
  {
    name: "CET",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "CAS",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "CITHM",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "CBA",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "CPA",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AdminPage = () => {
    const { data: session } = useSession();

  return (
    <div>
        {session ? (
            <div>
               <div className="dbord mt-24 pt-10 pb-10 px-6 bg-green-400 rounded-3xl">
     
     <h1 className="text-gray-800 text-2xl font-semibold leading-9">
          Welcome {session?.user?.name}
        </h1>
        <AdminDashNavbar/>
        <AdminSidebar/>
        <CardComponent/>
   
      {/* For the Chart */}

      <div className="perentline flex mt-6 w-full gap-8">
        <div className="linechartz basis-[70%] border bg-white shadow-md  rounded-md">
          <div className="bg-gray-100 linezchart flex items-center justify-between py-4 px-5 border-b border-gray-300 mb-5">
            <h2>Enrollment Overview</h2>
           
          </div>
          <LineChart
            width={1150}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#82ca9d"
            />
          </LineChart>
        </div>
        {/* End of Line Chart */}

        {/* Start of Pie Chart */}
        <div className="basis-[30%] border bg-white shadow-md rounded-md">
          <div className="bg-gray-100 flex items-center justify-between py-4 px-5 border-b border-gray-300 mb-5">
            <h2>Population by Courses</h2>
           
          </div>
          <div className="pl-7">
            <PieComponent />
          </div>
        </div>
      </div>

      {/* End of Pie Chart */}


    </div>
            </div>
        ) : (
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
        )}

    </div>
  )
}

export default AdminPage