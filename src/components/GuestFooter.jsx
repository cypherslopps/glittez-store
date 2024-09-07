import { footerLinks } from "@/lib/constants";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { Icons } from "./Icons";
import Favicon from "../assets/images/favicon-text.png";

const GuestFooterLink = ({ title, route }) => {
  return (
    <li>
      <Link
        to={route}
        className="text-gray-700 text-[.96rem] hover:text-black hover:underline transition-all duration-200"
      >
        {title}
      </Link>
    </li>
  )
}

GuestFooterLink.propTypes = {
  title: PropTypes.string,
  route: PropTypes.string
}

const GuestFooter = () => {
  return (
    <footer className='flex items-center bg-gray-200/40 px-4 md:px-8 lg:px-14 py-8'>
      <div className='w-[95%] lg:w-11/12 grid grid-cols-1 lg:grid-cols-[43%_1fr] justify-between gap-y-12 lg:gap-y-0 lg:gap-x-28'>
        <div className='flex flex-col gap-y-2'>
          <Link
            to="/"
            className='text-2xl font-extrabold text-black -ml-5'
          > 
            <img 
              src={Favicon}
              alt="favicon"
              className="w-[60%] xsl:w-[30%] sm:w-[35%] lg:w-[55%] h-[5rem] object-cover"
            />
          </Link>
          <p className='text-sm leading-6 sm:pr-8 lg:pr-0 xsl:text-[.96rem] xsl:leading-7 mt-4 lg:mt-0 lg:leading-normal lg:text-[.92rem] text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum animi, quisquam sint consequatur illum quas. Lorem ipsum dolor sit amet, dolorum delectus soluta aliquid sapiente quisquam placeat et recusandae molestiae quibusdam dolorem.</p>

          <ul className="flex items-center gap-x-2 mt-2.5 lg:mt-1">
            <li>
              <Link 
                to="https://x.com/glittez_store"
                target="_blank"
                className="transition-all duration-300 hover:text-blue-500"
              >
                <Icons.twitter className="w-7 h-7 lg:w-6 lg:h-6" />
              </Link>
            </li>

            <li>
              <Link 
                to="https://instagram.com/glittez_store"
                target="_blank"
                className="transition-all duration-300 hover:text-rose-500"
              >
                <Icons.instagram className="w-7 h-7 lg:w-6 lg:h-6" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap xsl:flex-nowrap justify-between lg:justify-start gap-y-6 lg:gap-x-[4.5rem]">
          {footerLinks.map(({ title, links }) => (
            <div 
              key={title}
              className="space-y-1"
            >
              <h4 className="uppercase text-[.94rem] font-extrabold">{title}</h4>

              <ul className="space-y-1">
                {links.map(link => (
                  <GuestFooterLink 
                    key={link.title}
                    {...link}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default GuestFooter