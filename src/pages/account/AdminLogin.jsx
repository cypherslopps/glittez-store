import { SEO } from '@/components'
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input'
import useForm from '@/hooks/useForm'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate();
    const { data, handleChange, errors } = useForm({
        email: "",
        password: ""
    });

    return (
        <main className='flex flex-col items-center justify-center h-screen space-y-6'>
            <SEO 
                title="Admin Login"
                description="Access dashboard"
            />

            <h1 className='text-3xl font-extrabold'>Admin Login</h1>

            <form className='flex flex-col w-[34vw] gap-y-3'>
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

                <Button className="w-full flex py-3 px-5 text-md font-medium h-max rounded-lg">
                    Enter Store
                </Button>
            </form>
        </main>
    )
}

export default AdminLogin