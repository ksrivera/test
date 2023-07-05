export const metadata = {
    title: 'About | UCode Clinic',
    description: 'UCode Clinic Admin Dashboard Page'
  };
  
  const EulaLayout = ({ children }) => {
      return (
          <html lang="en" className="bg-green-200 h-screen">
            <body>
                {children}
            </body>
          </html>
      );
  }
  
  export default EulaLayout;