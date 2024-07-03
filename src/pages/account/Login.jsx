import { SEO } from '@/components'
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input'
import useForm from '@/hooks/useForm'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { data, handleChange, errors } = useForm({
        email: "",
        password: ""
    });

    return (
        <>
            <SEO 
                title="Login"
                description="Access your cart"
            />

            <h1 className='text-4xl font-extrabold'>Login</h1>

            <form className='grid grid-cols-2 w-[74vw] gap-x-6'>
                <div className='bg-gray-300/25 px-5 py-5 space-y-5'>
                    <h4 className='text-xl font-extrabold'>New customer?</h4>

                    <div className='space-y-2'>
                        <p className='text-gray-700 font-medium'>Create an account with us and {"you'll"} be able to:</p>

                        <ul className='list-disc px-8 space-y-1'>
                            <li className='text-md text-gray-700'>Check out faster</li>
                            <li className='text-md text-gray-700'>Save multiple shipping addresses</li>
                            <li className='text-md text-gray-700'>Access your order history</li>
                            <li className='text-md text-gray-700'>Track new orders</li>
                        </ul>
                    </div>

                    <Button
                        type="button"
                        className="w-max mx-auto flex py-3 px-5 text-md font-medium h-max bg-black hover:bg-black/95 rounded-sm"
                        onClick={() => navigate("/user/register")}
                    >
                        Create an account
                    </Button>
                </div>
                
                <div className='py-2 space-y-3'>
                    <div className='space-y-3.5'>
                        <Input 
                            type="text"
                            name="email"
                            label="Email"
                            value={data.email}
                            onChange={handleChange}
                            error={errors.email}
                        />    

                        <Input 
                            type="password"
                            name="password"
                            label="Password"
                            value={data.password}
                            onChange={handleChange}
                            error={errors.password}
                        />    
                    </div>

                    <Button className="w-full flex py-3 px-5 text-md font-medium h-max bg-black hover:bg-black/95 rounded-sm">
                        Enter Store
                    </Button>
                </div>
            </form>
        </>
    )
}

export default Login