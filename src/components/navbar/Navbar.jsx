'use client'


import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {
    const pathname = usePathname();
    const isUserLoggedIn = true;

  return (
    <div className='bg-emerald-300'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <div className='flex items-center'>
                <Link href="/" className='self-center text-2xl font-semibold whitespace-nowrap'><Image src='/assets/images/logo.png' width={200} height={100} alt='UCode Clinic Logo'/></Link>
            </div>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-slate-200 bg-emerald-400 rounded-lg md:hidden hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-800" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            <div className='hidden w-full md:block md:w-auto text-emerald-900' id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li>
                        <Link className='py-2 pl-3 pr-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors' href='/'>
                            <span className={pathname == '/' ? 'py-2 px-4 bg-green-200 rounded-lg text-slate-800 hover:bg-none' : 'py-2 px-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors'}>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='py-2 pl-3 pr-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors' href='/portfolio'>
                            <span className={pathname == '/portfolio' ? 'py-2 px-4 bg-green-200 rounded-lg text-slate-800 hover:bg-none' : 'py-2 px-4 hover:bg-green-200 hover:text-slate-800 rounded-lg transition-colors'}>Portfolio</span>
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
                    <li>
                        <div class="relative inline-block text-left">
                            <div>
                                <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Sign In
                                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                </svg>
                                </button>
                            </div>


                            <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div class="py-1" role="none">
                            
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                                <Link href="/" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</Link>
                                <form method="POST" action="#" role="none">
                                    <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                                </form>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar