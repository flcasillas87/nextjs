import './globals.css';
import Link from "next/link";
import Navigation from '@/components/layout/Navbar';
import Tabla from '@/components/shared/Table';
import Boton from '@/components/shared/Boton';

import {useFirestoreDocData, useAuth } from 'reactfire'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>SREN</title>
      </head>
      <body>
        <Navigation />
        <Tabla />
        <Boton />
        {children}
      </body>
    </html>
  );
}
