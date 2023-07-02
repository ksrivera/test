import AuthProvider from '@/components/AuthProvider/AuthProvider';




const DashboardLayout = ({ children }) => {
    return (
        <html lang="en" className="bg-green-200 h-screen">
          <body>
            <AuthProvider>
              {children}
            </AuthProvider>
          </body>
        </html>
    );
}

export default DashboardLayout;