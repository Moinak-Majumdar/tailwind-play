import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
    return (
        <nav className='h-fit py-3 min-w-full pr-4 pl-4 md:pl-10 lg:pl-16 xl:pl-36 2xl:pl-44 md:pr-32 2xl:pr-44 flex flex-wrap items-center justify-between z-40  bg-slate-950 text-slate-200'>
            <Link href='/' className='font-bold text-lg text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-cyan-500'>Tailwind Play</Link>
            <Link href='/find' className='font-semibold'>Find</Link>
            {/* <Link href="https://play.tailwindcss.com" target="_BLANK" className="ease-linear duration-300 underline font-semibold">Tailwind play</Link> */}
        </nav>
    )
}