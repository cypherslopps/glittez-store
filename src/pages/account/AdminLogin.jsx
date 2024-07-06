import { SEO } from '@/components'
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input'
import useForm from '@/hooks/useForm'
import axios from '@/lib/axios';
import { errorEntries } from '@/lib/utils';
import { validateEmail, validatePassword } from '@/lib/validation';
import { useAuth } from '@/providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate();
    const { loginUser } = useAuth();
    const { data, handleChange, isLoading, setIsLoading, errors, setErrors } = useForm({
        email: "",
        password: ""
    });

    const login = async (e) => {
        e.preventDefault();

        try {
            if (Object.values(data).every(value => value !== "") && Object.values(errors).every(value => value == "")) {
                setIsLoading(true);
                await loginUser(data);
                navigate("/dashboard")
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
        <main className='flex flex-col items-center justify-center h-screen space-y-6'>
            <SEO 
                title="Admin Login"
                description="Access dashboard"
            />

            <h1 className='text-3xl font-extrabold'>Admin Login</h1>

            <form 
                onSubmit={login}
                className='flex flex-col w-[34vw] gap-y-3'
            >
                <div className='space-y-3.5'>
                    <Input 
                        type="text"
                        name="email"
                        label="Email"
                        value={data.email}
                        onChange={handleChange}
                        onBlur={({ target }) => validateEmail(target.value, setErrors)}
                        error={errors.email}
                    />    

                    <Input 
                        type="password"
                        name="password"
                        label="Password"
                        value={data.password}
                        onChange={handleChange}
                        onBlur={({ target }) => validatePassword(target.value, setErrors)}
                        error={errors.password}
                    />    
                </div>

                <Button 
                    className="w-full flex py-3 px-5 text-md font-medium h-max rounded-lg"
                    isLoading={isLoading}
                >
                    Submit
                </Button>
            </form>
        </main>
    )
}

export default AdminLogin