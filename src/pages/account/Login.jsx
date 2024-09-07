import { SEO } from '@/components'
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input'
import useForm from '@/hooks/useForm'
import { useAuth } from '@/providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { loginUser } = useAuth();
    const { data, handleChange, errors, isLoading, setErrors, setIsLoading } = useForm({
        email: "",
        password: ""
    });

    const login = async (e) => {
        e.preventDefault();

        try {
            if (Object.values(data).every(value => value !== "") && Object.values(errors).every(value => value == "")) {
                setIsLoading(true);
                await loginUser(data);
                navigate("/")
            }
        } catch (err) {
            setErrors(prev => ({
                ...prev,
                ...err
            }))
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <SEO 
                title="Login"
                description="Access your cart"
            />

            <h1 className='text-3xl sm:text-4xl font-extrabold'>Login</h1>

            <form 
                className='grid grid-cols-1 gap-y-3 lg:grid-cols-2 lg:gap-y-0 w-11/12  xsl:w-[75vw] sm:w-[60vw] lg:w-[74vw] gap-x-6'
                onSubmit={login}
            >
                <div className='flex flex-col bg-gray-300/25 px-5 py-5 gap-y-3 lg:gap-y-5 order-2 lg:order-1'>
                    <h4 className='text-base xsl:text-lg md:text-xl font-extrabold'>New customer?</h4>

                    <div className='space-y-2 mb-2 lg:mb-0'>
                        <p className='text-gray-700 font-medium text-[.89rem] md:text-base'>Create an account with us and {"you'll"} be able to:</p>

                        <ul className='list-disc px-8 space-y-1'>
                            <li className='text-sm sm:text-md text-gray-700'>Check out faster</li>
                            <li className='text-sm sm:text-md text-gray-700'>Save multiple shipping addresses</li>
                            <li className='text-sm sm:text-md text-gray-700'>Access your order history</li>
                            <li className='text-sm sm:text-md text-gray-700'>Track new orders</li>
                        </ul>
                    </div>

                    <Button
                        type="button"
                        variant="black"
                        className="w-full flex py-3 px-5 text-md font-medium h-max rounded-lg"
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

                    <Button 
                        isLoading={isLoading}
                        disabled={isLoading}
                        className="w-full flex py-2.5 md:py-3 px-5 text-[.9rem] md:text-md font-medium h-max rounded-lg"
                    >
                        Enter Store
                    </Button>
                </div>
            </form>
        </>
    )
}

export default Login