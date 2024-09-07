import { Link } from 'react-router-dom'
import { Button } from './ui/Button'
import { SEO } from '.'

const NotFound = () => {
  return (
    <div className='pb-12 -mt-10 flex flex-col items-center'>
        <SEO 
            title="404 | Page Not Found"
            description="Page Not Found"
        />
        <h1 className='text-[14rem] font-extrabold text-gray-800 tracking-tighter'>404</h1>

        <div className='flex flex-col items-center -mt-6 gap-y-1.5'>
            <h4 className='text-2xl font-bold'>Page not found</h4>
            <p className='text-gray-700 text-[.98rem] -mt-1'>
                You can return to the main page or
                <Link 
                    to="/contact" 
                    className="underline text-blue-700 font-medium inline-block ml-1"
                >
                    Contact us
                </Link>
            </p>
            <Button 
                size="lg"
                className="rounded-xl mt-0.5"
            >
                Go to homepage
            </Button>
        </div>
    </div>
  )
}

export default NotFound