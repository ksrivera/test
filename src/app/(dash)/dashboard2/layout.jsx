import AuthProvider from '@/components/AuthProvider/AuthProvider';


export const metadata = {
  title: 'Dashboard| UCode Clinic',
  description: 'UCode Clinic Dashboard Page'
};



const DashboardLayout = ({ children }) => {
    return (
        <html lang="en" className="bg-green-200 h-screen">
          <body>
           
              {children}
            
          </body>
        </html>
    );
}

export default DashboardLayout;