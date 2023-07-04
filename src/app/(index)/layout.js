import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import ToasterProvider from '@/components/ToasterProvider/ToasterProvider';
import { Fira_Sans } from 'next/font/google';

export const metadata = {
  title: 'Home | UCode Clinic',
  description: 'UCode Clinic Home Page'
};

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400']
})

export default function RootLayout({ children }) {
  return (
    <div className='bg-emerald-200'>
          <ToasterProvider />
          <Navbar/>
          {children}
          <Footer/>
    </div>
  )
}
