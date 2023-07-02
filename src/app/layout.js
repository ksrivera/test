import './globals.css'
import { Fira_Sans } from 'next/font/google'

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

          {children}

      </body>
    </html>
  )
}
