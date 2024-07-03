import { Link, useLocation } from 'react-router-dom'
import { Icons } from './Icons';

const BreadCrumbs = () => {
  const { pathname } = useLocation();
  const paths = pathname.split("/");

  return (
    <ul className='flex items-center gap-x-1.5 pb-6'>
      <li>
        <Link
          to="/"
          className='flex items-center gap-x-2 hover:underline hover:cursor-pointer font-medium text-[.94rem]'
        >
          <Icons.home className='w-5 h-5 text-gray-700 -mt-1 -mr-1' />
          Main Page
          <Icons.arrowRightS 
            strokeWidth={1} 
            className='w-4 h-4 text-gray-600'
          />
        </Link>
      </li>
      
      {paths.filter(path => path !== "").map((path, idx) => (
        <li 
          key={path}
          className='capitalize flex items-center gap-x-1.5 text-gray-600/80 text-[.94rem]'
        >
          {path}
          {(idx + 1) !== (paths.length - 1) ? (
            <Icons.arrowRightS 
              strokeWidth={1} 
              className='w-4 h-4 text-gray-600' 
            />
          ) : null}
        </li>
      ))}
    </ul>
  )
}

export default BreadCrumbs