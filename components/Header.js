import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import HeaderLink from './HeaderLink';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { Avatar } from '@mui/material';
// import { useState } from 'react';
import { useTheme } from 'next-themes';
import { motion } from "framer-motion";

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
};

function Header() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme, theme } = useTheme();

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    return (
        <header className='sticky top-0 z-40 bg-white dark:bg-[#1D2000] flex items-center justify-around py-1.5 px-3 focus-within:shadow-lg'>
            {/* Left */}
            <div className='flex items-center space-x-2 w-full max-w-xs'>
                {mounted && (
                    <>
                        {resolvedTheme === "dark" ? (
                            <Image src="https://www.pngrepo.com/png/50649/180/atom.png" width={45} height={45} alt='logo-dark' />
                        ) : (
                            <Image src="https://www.pngrepo.com/png/135854/180/science.png" width={55} height={55} alt='logo-light' />
                        )}
                    </>
                )}

                <div className='flex items-center space-x-1 dark:md:bg-gray-600 py-2.5 px-4 rounded w-full'>
                    <SearchRoundedIcon />
                    <input type='text' placeholder='Search' className='hidden md:inline-flex bg-transparent text-sm focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow' />
                </div>
            </div>
            {/* Right */}
            <div className='flex items-center space-x-6'>
                <HeaderLink Icon={HomeRoundedIcon} text='Inicio' feed active />
                <HeaderLink Icon={GroupIcon} text='Mis contactos' feed />
                <HeaderLink Icon={BusinessCenterIcon} text='Eventos' feed hidden />
                <HeaderLink Icon={ChatIcon} text='Conversaciones' feed />
                <HeaderLink Icon={NotificationsIcon} text='Notificaciones' feed />
                <HeaderLink Icon={Avatar} text='Mi perfil' feed avatar hidden />
                <HeaderLink Icon={AppsOutlinedIcon} text='Organizar' feed hidden />

                {/* Dark mode */}
                {mounted && (
                    <div
                        className={`bg-gray-700 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer flex-shrink-0 relative ${resolvedTheme === "dark" ? "justify-end" : "justify-start"}`}
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                    >
                        <span className='absolute left-0'>☀️</span>
                        <motion.div className='w-5 h-5 bg-white rounded-full z-40' layout transition={spring} />
                        <span className='absolute right-0.5'>🌙</span>
                    </div>
                )}

            </div>
        </header>
    )
}

export default Header