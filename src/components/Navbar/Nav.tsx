import React from 'react'
import { Button, Navbar } from 'flowbite-react'
import Image from 'next/image'

const Nav = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href='https://flowbite.com/'>
        {/* <Image
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          /> */}
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>EventIN</span>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        <div className='md:hidden'>
          <Button>Get started</Button>
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href='/navbars' active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href='/navbars'>About</Navbar.Link>
        <Navbar.Link href='/navbars'>Services</Navbar.Link>
        <Navbar.Link href='/navbars'>Pricing</Navbar.Link>
        <Navbar.Link href='/navbars'>Contact</Navbar.Link>
        <div className='hidden md:block'>
          <Button>Get started</Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Nav
