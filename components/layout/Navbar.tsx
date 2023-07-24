"use client";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link';
import UserContext from '@/lib/UserContext';
import Router from 'next/router';

import Cookies from 'js-cookie';
import { useContext } from 'react';

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "componente",
    route: "./about",
  },
  {
    label: "React",
    route:"./Pruebas",
  },
  {
    label: "Firestore",
    route:"./Firestore",
  },
];

export default function Navigation() {
  return (
    <header>
      <nav>
        <ul>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
     </header>
  )
}
