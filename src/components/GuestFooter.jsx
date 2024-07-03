import { footerLinks } from "@/lib/constants";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom'
import { Icons } from "./Icons";

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
    <footer className='flex items-center bg-gray-200/40 px-14 py-8'>
      <div className='w-11/12 grid grid-cols-[43%_1fr] justify-between gap-x-28'>
        <div className='flex flex-col gap-y-2'>
          <Link
            to="/"
            className='text-2xl font-extrabold text-black'
          > 
            GLITTLEZ
          </Link>
          <p className='text-[.92rem] text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias cum animi, quisquam sint consequatur illum quas. Lorem ipsum dolor sit amet, dolorum delectus soluta aliquid sapiente quisquam placeat et recusandae molestiae quibusdam dolorem.</p>

          <ul className="flex items-center gap-x-2 mt-1">
            <li>
              <Link 
                to="https://x.com/glittez_store"
                target="_blank"
                className="transition-all duration-300 hover:text-blue-500"
              >
                <Icons.twitter className="w-6 h-6" />
              </Link>
            </li>

            <li>
              <Link 
                to="https://instagram.com/glittez_store"
                target="_blank"
                className="transition-all duration-300 hover:text-rose-500"
              >
                <Icons.instagram className="w-6 h-6" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex gap-x-[4.5rem]">
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