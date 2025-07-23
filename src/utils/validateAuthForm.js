export const checkValidation = (name, email, password) => {
    const nameRegex = name == undefined ? true : /^[a-zA-Z\s]{2,50}$/.test(name);
    
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!nameRegex) {
        return "Please enter valid name";
    }

    if(!emailRegex) {
        return "Please enter valid email";
    }

    if(!passwordRegex) {
        return "Password must be 8+ characters with uppercase, lowercase, number & symbol"
    }

    return null;
    
}