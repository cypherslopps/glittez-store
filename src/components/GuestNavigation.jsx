import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from "prop-types";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from "@/components/ui/NavigationMenu"
import { motion, AnimatePresence } from "framer-motion";
import { Icons } from './Icons';
import { navigationLinks } from '@/lib/constants';
import { Button } from './ui/Button';
import CartButton from './CartButton';
import UserSettings from './UserSettings';
import Favicon from "../assets/images/favicon-text.png";
import Favicon2 from "../assets/images/favicon.png";
import NavigationDropdown from './NavigationDropdown';
import { Hamburger } from '.';
import AlgoliaSearchBox from './AlgoliaSearchBox';
import { X } from 'lucide-react'


const GuestNavigationLink = ({ title, route, hasDropdown }) => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = pathname === route ? "underline font-bold" : "text-gray-900/90 font-medium";
  
  return (
    <li className='relative'>
      <Link
        to={route}
        className={`flex items-center relative py-0.5 text-[.93rem] ${isActive}`}
        onClick={() => hasDropdown && setIsMenuOpen(prev => !prev)}
      >
        {title}
        {hasDropdown ? (
          <>
            <Icons.arrowRightS className={`h-[1.15rem] transition-all duration-300 text-gray-900/55 ${!isMenuOpen ? "opacity-1 scale-1 w-[1.15rem]" : "opacity-0 w-0 scale-0 pointer-events-none"} text-black/70`} />
            <Icons.arrowBottomS className={`h-[1.15rem] transition-all duration-300 text-gray-900/55 ${!isMenuOpen ? "opacity-0 scale-0 w-0 pointer-events-none" : "opacity-1 scale-1 w-[1.15rem]"} text-black/70`} />
          </>
        ) : null}
      </Link>
      
      {(hasDropdown) && (
        <NavigationDropdown 
          isMenuOpen={isMenuOpen} 
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </li>
  )
}

GuestNavigationLink.propTypes = {
  title: PropTypes.string,
  route: PropTypes.string,
  hasDropdown: PropTypes.bool
}

const GuestNavigation = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-1.5 sm:py-3 border-b border-gray-400/35 relative">
      <ul className='hidden md:flex items-center gap-x-4'>
        {navigationLinks.map(link => (
          <GuestNavigationLink 
            key={link.title}
            {...link}
          />
        ))}
      </ul>

      {/* Favicons */}
      <div>
        <Link
          to="/"
          className='hidden md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 font-extrabold text-xl md:flex md:justify-center md:items-center sm:w-[15%] h-[30%] md:w-[12%] md:h-[60%]'
        >
          <img 
            src={Favicon}
            alt="glittez store"
            className="w-full object-cover"
          />
        </Link>

        <Link
          to="/"
          className='font-extrabold text-xl flex justify-center items-center md:hidden'
        >
          <img 
            src={Favicon2}
            alt="glittez store"
            className="max-w-[10rem] h-14 object-cover"
          />
        </Link>
      </div>

      <div className='flex items-center gap-x-1.5'>
        {/* <InstantSearchBox /> */}
        <Button 
          variant="ghost"
          size="ghost"
          onClick={() => setIsSearchOpen(true)}
        >
          <Icons.search className='w-6 h-6 text-gray-600/95' />
        </Button>

        {/* User Settings */}
        <UserSettings />

        {/* Cart Button */}
        <CartButton />

        {/* Hamburger */}
        <Hamburger />
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <AnimatePresence>
          <motion.div 
            onClick={() => setIsSearchOpen(false)}
            className="fixed top-0 left-0 w-full h-full z-[5100] bg-black/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* content */}
            <motion.div 
              className="relative w-[90vw] h-[90vh] bg-white rounded-md absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] shadow-md rounded-md z-[6000]"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* close */}
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute -top-4 -right-10 z-10 w-[2rem] h-[2rem] rounded-md border border-gray-300 bg-white cursor-pointer flex items-center justify-center">
                <X className="stroke-gray-600" />
              </button>

              {/* header */}
              <header className="w-full relative px-1">
                <div className='w-full py-6'>
                  <AlgoliaSearchBox />
                </div>
              </header>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </nav>
  )
}

export default GuestNavigation