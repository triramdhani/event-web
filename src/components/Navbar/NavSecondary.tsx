import { NAV_LIST } from '@/data/NAV_LIST'
import Link from 'next/link'
import Router from 'next/router'
import React, { useState } from 'react'
import GetStartedBtn from '../btn/GetStartedBtn'

const Navbar5 = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className='w-full bg-white text-gray-500 body-font  shadow-sm'>
        {/* :DESKTOP MENU */}
        <div className='container mx-auto flex justify-between items-center py-3 px-4 md:px-0'>
          {/* ::Site logo and Name */}
          <Link href='/' className='  flex  justify-start lg:w-1/5 font-medium items-center text-gray-900 md:mb-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-10 h-10 text-white p-2 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
              />
            </svg>
            <span className='ml-3 text-xl text-green-500 font-semibold antialiased'>EventIn</span>
          </Link>
          {/* ::Avatar */}
          {/* <div className="hidden sm:flex lg:w-2/5 ml-auto md:ml-0 mr-4 md:mr-0 justify-end cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div> */}
          {/* ::Burger icon standard */}
          <div className='md:hidden flex gap-1'>
            <GetStartedBtn />
            <button
              className=' rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500'
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 rounded-md text-green-500 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-green-500 hover:to-yellow-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>

          {/* ::Navbar */}
          <nav className='hidden md:flex lg:w-3/5  flex-wrap items-center md:justify-end text-base tracking-wide'>
            {NAV_LIST.map((list) => {
              return (
                <Link key={list.nama} href={list.path} className='mr-8 hover:text-gray-800'>
                  {list.nama}
                </Link>
              )
            })}
            <GetStartedBtn />
          </nav>
        </div>
      </header>
      {/* :MOBILE MENU */}

      {isOpen && (
        <div className='flex flex-col gap-2 w-11/12 rounded m-auto  py-4 px-3 md:hidden bg-gray-100  font-semibold text-base uppercase'>
          {NAV_LIST.map((list) => {
            return (
              <Link
                key={list.nama}
                href={list.path}
                className=' px-3 py-2 rounded-md bg-blue-600 text-white hover:text-white hover:bg-green-700'
              >
                {list.nama}
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Navbar5
