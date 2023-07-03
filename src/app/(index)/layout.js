import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import ToasterProvider from '@/components/ToasterProvider/ToasterProvider'
//import AuthProvider from '@/components/AuthProvider/AuthProvider'


export const metadata = {
  title: 'Home | UCode Clinic',
  description: 'UCode Clinic Home Page'
};

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
