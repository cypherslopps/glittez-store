import { useEffect, useState } from "react";

function useForm(formData) {
    const [data, setData] = useState(formData);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        setData({
            ...data,
            ...formData
        })

        const errorData = {}; 
        const errorDataArray = Object.keys(formData);
        errorDataArray.map(key => errorData[key] = "");
        
        setErrors({
            ...errors,
            ...errorData
        });
    }, []);

    const handleChange = ({ target }) => {
        const { name, value } = target;

        setData({
            ...data,
            [name]: value
        });
    }
    
    return {
        data,
        setData,
        errors,
        setErrors,
        isLoading,
        setIsLoading,
        handleChange
    }
}

export default useForm;