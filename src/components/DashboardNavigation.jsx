import { Link } from 'react-router-dom'


const DashboardNavigation = () => {
  return (
    <nav className='py-3.5'>
      <div className='w-[95%] mx-auto flex items-center justify-between'>
        <Link
          to="/dashboard"
          className='w-12 h-12 rounded-full bg-red-400'
        ></Link>

        {/* Settings */}
        <div>Settings</div>
      </div>
    </nav>
  )
}

export default DashboardNavigation