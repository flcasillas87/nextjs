"use client";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link';
import UserContext from '@/app/modules/UserContext';
import Router from 'next/router';

import Cookies from 'js-cookie'
import { useContext } from 'react'
import {routes} from '@/data/routes'

export default function Navigation() {
  return (
    <header>
      <Nav className='justify-content-md-center'>
        <ul>
          {routes.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </Nav>
     </header>
  )
}
