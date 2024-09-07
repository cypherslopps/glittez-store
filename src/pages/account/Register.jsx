import { SEO } from '@/components'
import { Button } from '@/components/ui/Button';
import { Input, Select } from '@/components/ui/Input'
import { useCities, useCountries, useStates } from '@/hooks/useCountries';
import useForm from '@/hooks/useForm'
import { errorEntries } from '@/lib/utils';
import { useAuth } from '@/providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Register = () => {
    const navigate = useNavigate();
    const { registerUser } = useAuth();
    const { data, setData, handleChange, isLoading, setIsLoading, errors, setErrors } = useForm({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        address_1: "",
        address_2: "",
        zip_code: "",
        country: "",
        state: "",
        city: "",
        password: "",
        password_confirmation: ""
    });
    const { countries } = useCountries();
    const states = useStates(data.country);
    const cities = useCities(data.country, data.state)
    console.log(countries, states, cities)

    const register = async (e) => {
        e.preventDefault();

        try {
            if (Object.values(data).every(value => value !== "")) {

                setIsLoading(true);
                
                await registerUser(data);
                toast("User successfully registered");

                setData(prev => ({
                    ...prev,
                    firstname: "",
                    lastname: "",
                    email: "",
                    phone: "",
                    address_1: "",
                    address_2: "",
                    zip_code: "",
                    country: "",
                    state: "",
                    city: "",
                    password: "",
                    password_confirmation: ""
                }));

                setTimeout(() => {
                    navigate(-1);
                }, 300);
            }
        } catch (err) {
            errorEntries(err, setErrors);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <SEO 
                title="Register"
                description="Access a world of unlimited products."
            />

            <h1 className='text-3xl sm:text-4xl font-extrabold'>Register</h1>

            <form 
                onSubmit={register}
                className='w-11/12 xsl:w-[75vw] sm:w-[70vw] lg:w-[74vw]'
            >

                <div className='space-y-5'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-3.5'>
                        <Input 
                            type="text"
                            name="firstname"
                            label="First Name"
                            value={data.firstname}
                            onChange={handleChange}
                            error={errors.firstname}
                        />

                        <Input 
                            type="text"
                            name="lastname"
                            label="Last Name"
                            value={data.lastname}
                            onChange={handleChange}
                            error={errors.lastname}
                        />    

                        <Input 
                            type="email"
                            name="email"
                            label="Email"
                            value={data.email}
                            onChange={handleChange}
                            error={errors.email}
                        />    
                        
                        <Input 
                            type="phone"
                            name="phone"
                            label="Phone"
                            value={data.phone}
                            onChange={handleChange}
                            error={errors.phone}
                        />    

                        <Select 
                            type="text"
                            name="country"
                            label="Country"
                            options={countries}
                            value={data.country}
                            onChange={handleChange}
                            error={errors.country}
                        />

                        <Select 
                            name="state"
                            label="State"
                            options={states}
                            value={data.state}
                            onChange={handleChange}
                            error={errors.state}
                        />

                        <Select 
                            name="city"
                            label="City"
                            options={cities}
                            value={data.city}
                            onChange={handleChange}
                            error={errors.city}
                        />

                        <Input 
                            type="text"
                            name="address_1"
                            label="Address 1"
                            value={data.address_1}
                            onChange={handleChange}
                            error={errors.address_1}
                        />

                        <Input 
                            type="text"
                            name="address_2"
                            label="Address 2"
                            value={data.address_2}
                            onChange={handleChange}
                            error={errors.address_2}
                        />

                        <Input 
                            type="number"
                            name="zip_code"
                            label="ZIP Code"
                            value={data.zip_code}
                            onChange={handleChange}
                            error={errors.zip_code}
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
                            name="password_confirmation"
                            label="Confirm Password"
                            value={data.password_confirmation}
                            onChange={handleChange}
                            error={errors.password_confirmation}
                        />    
                    </div>
                    
                    <Button 
                        isLoading={isLoading}
                        disabled={isLoading}
                        className="w-full sm:w-max mx-auto flex py-2.5 md:py-3 px-5 text-md font-medium h-max rounded-sm"
                    >
                        Create an account
                    </Button>
                </div>
            </form>
        </>
    )
}

export default Register