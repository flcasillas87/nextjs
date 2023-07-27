import Sidebar from '@/layout/sidebar'
import './globals.css'
//import Navigation from '@/components/layout/Navbar'
//import Header from '@/components/layout/Header'
import AppFooter from '@/layout/AppFooter'
//import Header from '@/components/layout/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Sidebar />
        {children}
        <AppFooter />
      </body>
    </html>
  )
}
