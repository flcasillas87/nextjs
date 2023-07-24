import './globals.css'
import Navigation from '@/components/layout/Navbar'
//import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Header />
        <title>SREN</title>
      </head>
      <body>
        <Navigation />
        
        <Footer />
        {children}
      </body>
    </html>
  );
}
