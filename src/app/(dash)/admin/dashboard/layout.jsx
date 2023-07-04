export const metadata = {
  title: 'Admin Dashboard | UCode Clinic',
  description: 'UCode Clinic Admin Dashboard Page'
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