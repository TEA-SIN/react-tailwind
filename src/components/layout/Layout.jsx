import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../header/NavbarComponent'

export default function Layout() {
  return (
    <>
        <header>
            <NavbarComponent/>
        </header>
        <Outlet/>
    </>
  )
}
