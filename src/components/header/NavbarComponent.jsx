import React, { useState } from 'react'
import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'

export default function NavbarComponent() {
  const [navbar, setNavbar] = useState([
    {
        title: "Home",
        url: "/",
        active: true
    },
    {
        title: "About",
        url: "/about",
        active: false
    },
    {
        title: "Service",
        url: "/service",
        active: false
    },
  ]);
  const handleClick = (item) => {
    setNavbar((preValue) => {
        //set new value and keep old value
        return preValue.map((value) => {
            if(value.title === item.title) {
                return {
                    ...value,
                    active: true,
                };
            }
            else {
                return {
                    ...value,
                    active: false,
                };
            };
             
        });
    });
    
    
  };
  return (
    <>
        <Navbar fluid className='bg-gradient-to-r from-violet-300 to-fuchsia-300'>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/src/assets/react.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navbar.map((item, index) => {
            return (
                <>

                    <Navbar.Link onClick={() => {handleClick(item)}} key={index} as={Link} to={item.url} active={item.active}>
                        {item.title}
                    </Navbar.Link>
                </>
            );
        })}

      </Navbar.Collapse>
    </Navbar>
    </>
  )
}
