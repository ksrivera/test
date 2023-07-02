import AuthProvider from "@/components/AuthProvider/AuthProvider"
import DashboardView from "@/components/DashboardOverview/Dashboardview"
import Sidebar from "@/components/Sidebar/Sidebar"


export const metadata = {
    title: 'Dashboard | UCode Clinic',
    description: 'UCode Clinic Dashboard Page',
}

export default function RootLayout({ children }) { 
    return (
        <html lang="en">
            <body className='w-full'>
              {/*   <AuthProvider> */}
 
             

              {/*   </AuthProvider> */}
            </body>
        </html>    
    )
}
