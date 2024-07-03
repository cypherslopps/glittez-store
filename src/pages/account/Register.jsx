import { SEO } from '@/components'
import { Button } from '@/components/ui/Button';
import { Input, Select } from '@/components/ui/Input'
import useForm from '@/hooks/useForm'

const Register = () => {
    const { data, handleChange, errors } = useForm({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        zipCode: "",
        country: "",
        state: "",
        city: "",
        password: "",
        confirmPassword: ""
    });

    return (
        <>
            <SEO 
                title="Register"
                description="Access a world of unlimited products."
            />

            <h1 className='text-4xl font-extrabold'>Register</h1>

            <form className='w-[74vw] space-y-5'>
                <div className='grid grid-cols-2 gap-x-2 gap-y-3.5'>
                    <Input 
                        type="text"
                        name="firstName"
                        label="First Name"
                        value={data.firstName}
                        onChange={handleChange}
                        error={errors.firstName}
                    />

                    <Input 
                        type="text"
                        name="lastName"
                        label="Last Name"
                        value={data.lastName}
                        onChange={handleChange}
                        error={errors.lastName}
                    />    

                    <Input 
                        type="text"
                        name="email"
                        label="Email"
                        value={data.email}
                        onChange={handleChange}
                        error={errors.email}
                    />    

                    <Select 
                        type="text"
                        name="country"
                        label="Country"
                        options={["USA", "Belgium"]}
                        value={data.country}
                        onChange={handleChange}
                        error={errors.country}
                    />

                    <Select 
                        name="state"
                        label="State"
                        options={["GG", "Nagi"]}
                        value={data.state}
                        onChange={handleChange}
                        error={errors.state}
                    />

                    <Select 
                        name="city"
                        label="City"
                        options={["GG", "Nagi"]}
                        value={data.city}
                        onChange={handleChange}
                        error={errors.city}
                    />

                    <Input 
                        type="number"
                        name="zipCode"
                        label="ZIP Code"
                        value={data.zipCode}
                        onChange={handleChange}
                        error={errors.zipCode}
                    />

                    <Input 
                        type="password"
                        name="password"
                        label="Password"
                        value={data.password}
                        onChange={handleChange}
                        error={errors.password}
                    />    

                    <Input 
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        value={data.confirmPassword}
                        onChange={handleChange}
                        error={errors.confirmPassword}
                    />    
                </div>
                
                <Button className="w-max mx-auto flex py-3 px-5 text-md font-medium h-max bg-black hover:bg-black/95 rounded-sm">
                    Create an account
                </Button>
            </form>
        </>
    )
}

export default Register