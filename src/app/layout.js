import AuthProvider from '@/components/AuthProvider/AuthProvider';
import './globals.css'
import { Fira_Sans } from 'next/font/google'
import ToasterProvider from '@/components/ToasterProvider/ToasterProvider';

export const metadata = {
  title: 'Error 404 | UCode Clinic',
  description: 'UCode Clinic Page Not Found'
};

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${firaSans.className}`}>
          <AuthProvider>
            <ToasterProvider/>
            {children}
          </AuthProvider>
      </body>
    </html>
  )
}
