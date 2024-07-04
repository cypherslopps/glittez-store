import { Link, useLocation } from 'react-router-dom'
import PropTypes from "prop-types";
import { dashboardNavigationLinks } from '@/lib/constants';
import { Icons } from './Icons';
import { Button } from './ui/Button';

const DashboardSidebarLink = ({ Icon, title, route }) => {
  const { pathname } = useLocation();
  const activeStyle = pathname === route ? "bg-white border border-gray-200 font-bold text-default" : "";
  const activeIconStyle = pathname === route ? "text-red-500" : "text-black/70"

  return (
    <li>
      <Link 
        className={`flex items-center gap-x-2 ${activeStyle} text-black/70 py-2 px-2.5 rounded-lg text-md`}
        to={route}
      >
        <Icon className={`w-5 h-5 -mt-0.5 ${activeIconStyle}`} />
        {title}
      </Link>
    </li>
  )
}

DashboardSidebarLink.propTypes = {
  Icon: PropTypes.node,
  title: PropTypes.string,
  route: PropTypes.string
}

const DashboardSidebar = () => {
  return (
    <div className="h-screen bg-dashboardSidebar border-r border-gray-300/55 sticky top-0 left-0 px-3 pt-5 pb-3 flex flex-col justify-between">
     <div>
        <Link 
          to="/dashboard"
          className="font-extrabold text-lg flex items-center gap-x-1"
        >
          <span className='w-6 h-6 rounded-full bg-red-400 border border-red-700 inline-block' />
          GLITTEZ
        </Link>

        <div className='mt-3.5 space-y-1'>
          <span className='font-semibold text-black/55 text-[.89rem]'>Menu</span>

          <ul>
            {dashboardNavigationLinks.map(link => (
              <DashboardSidebarLink 
                key={link.title}
                {...link}
              />
            ))}
          </ul>
        </div>
      </div>

      <footer className='bg-white py-4 px-3.5 rounded-md border border-gray-300/55'>
          <ul className='flex flex-col gap-y-3.5'>
            <li>
              <Link
                to="/dashboard/settings"
                className='flex items-center gap-x-2 text-md text-black/70 font-medium'
              >
                <Icons.settings className="w-5 h-5" />
                Settings
              </Link>
            </li>

            <li>
              <Button
                variant="none"
                size="none"
                className='w-full flex justify-start gap-x-2 text-md text-black/70'
              >
                <Icons.logoutL className="w-5 h-5" />
                Log out
              </Button>
            </li>
          </ul>
      </footer>
    </div>
  )
}

export default DashboardSidebar