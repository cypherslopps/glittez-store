export const validateEmail = (email, setErrors) => {
    const emailRegex = /^[^\d_/=//+\\)(/][\w]+@[A-Za-z]{2,}\.[A-Za-z]{2,}$/ig;

    if (!email) {
        setErrors(prev => ({
            ...prev,
            email: "Email field is required"
        }));
    } else if(!emailRegex.exec(email)) {
        setErrors(prev => ({
            ...prev,
            email: "Email is invalid"
        }));
    } else {
        setErrors(prev => ({
            ...prev,
            email: ""
        }));
    }
}

export const validateText = (value, name, regex, error, setErrors) => {
    if (!value) {
        setErrors(prev => ({
            ...prev,
            [name]: `Fill in ${name} field`
        }));
    } else if (!regex.exec(value)) {
        setErrors(prev => ({
            ...prev,
            [name]: error
        }));
    } else {
        setErrors(prev => ({
            ...prev,
            [name]: ""
        }));
    }
}

export const validatePassword = (password, setErrors) => {
    const passwordRegex = /^[\w@!#$%^&*)/(]{8,}$/ig;
    const hasSymbols = ["@", "!", "#", "$", "%", "^", "&", "*", ")", "("].some(symbol => password.includes(symbol));
    const hasFigures = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].some(figure => password.includes(figure));

    if (!password) {
        setErrors(prev => ({
            ...prev,
            password: "Password field is required"
        }));
    } else if (password.length < 8) {
        setErrors(prev => ({
            ...prev,
            password: "Password strength is weak"
        }));
    } else if (!passwordRegex.exec(password) && (!hasSymbols && !hasFigures)) {
        setErrors(prev => ({
            ...prev,
            password: "You need to add at least a symbol and a figure"
        }));
    } else {
        setErrors(prev => ({
            ...prev,
            password: ""
        }));
    }
}