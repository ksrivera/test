'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
  return (
    <div>
        <div className='bg-emerald-300'>
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4'>
                <div className='flex items-center'>
                    <Link href="/" className='self-center text-2xl font-semibold whitespace-nowrap'><Image src='/assets/images/logo.png' width={200} height={100} alt='UCode Clinic Logo'/></Link>
                </div>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-slate-200 bg-emerald-400 rounded-lg md:hidden hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-800" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className='hidden w-full md:block md:w-auto text-emerald-900' id="navbar-default">
                    <ul className="font-medium flex flex-col py-4 md:p-0 mt-4 border rounded-lg md:flex-row md:mt-0 md:border-0">
                        <li>
                            <Link className='py-2 pl-3 pr-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors' href='/'>
                                <span className={pathname == '/' ? 'py-2 px-4 bg-green-200 rounded-lg text-slate-800 hover:bg-none' : 'py-2 px-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors'}>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='py-2 pl-3 pr-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors' href='/signin/student'>
                                <span className={pathname == '/signin/student' ? 'py-2 px-4 bg-green-200 rounded-lg text-slate-800 hover:bg-none' : 'py-2 px-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors'}>Student</span>
                            </Link>
                        </li>
{/*                         <li>
                            <Link className='py-2 pl-3 pr-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors' href='/signin/employee'>
                                <span className={pathname == '/signin/employee' ? 'py-2 px-4 bg-green-200 rounded-lg text-slate-800 hover:bg-none' : 'py-2 px-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors'}>Staff</span>
                            </Link>
                        </li> */}
                        <li>
                            <Link className='py-2 pl-3 pr-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors' href='/register'>
                                <span className={pathname == '/register' ? 'py-2 px-4 bg-green-200 rounded-lg text-slate-800 hover:bg-none' : 'py-2 px-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors'}>Register</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='py-2 pl-3 pr-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors' href='/events'>
                                <span className={pathname == '/events' ? 'py-2 px-4 bg-green-200 rounded-lg text-slate-800 hover:bg-none' : 'py-2 px-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors'}>Events</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='py-2 pl-3 pr-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors' href='/about'>
                                <span className={pathname == '/about' ? 'py-2 px-4 bg-green-200 rounded-lg text-slate-800 hover:bg-none' : 'py-2 px-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors'}>About</span>
                            </Link>
                        </li>
                        <li>
                            <Link className='py-2 pl-3 pr-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors' href='/contact'>
                                <span className={pathname == '/contact' ? 'py-2 px-4 bg-green-200 rounded-lg text-slate-800 hover:bg-none' : 'py-2 px-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors'}>Contact Us</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar