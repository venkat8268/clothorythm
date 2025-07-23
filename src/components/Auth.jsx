import backgroundImage from "../assets/images/login-bg.png";
import { useRef, useState } from "react"
import { checkValidation } from "../utils/validateAuthForm";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"

// Use useRef for all inputs
// Toggle form between Login and Register

const Auth = () => {

    const [isLogin, setIsLogin] = useState(false);
    const [validationErrorMessage, setValidationErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const validationError = checkValidation(name?.current?.value == undefined ? null : name.current.value, email.current.value, password.current.value)
        setValidationErrorMessage(validationError);

        if (validationError) {
            return;
        }

        // Handle Login and Register
        
        if (isLogin) {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    setValidationErrorMessage(errorCode + " - " + errorMessage)
                });
        } else {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    setValidationErrorMessage(errorCode + " - "+ errorMessage)
                });
        }

    }

    return (
        <div
            style={{ backgroundImage: `url(${backgroundImage})` }}
            className="flex flex-col items-center justify-center h-screen w-full bg-cover bg-center   "
        >
            <form className="bg-black/75 rounded-xl w-[400px]" onSubmit={handleSubmit} >
                <h2 className="text-center mt-6 text-orange-50 font-bold text-2xl">
                    {isLogin ? 'Login' : 'Register'}
                </h2>
                <div className="p-4 flex flex-col">
                    {!isLogin && <input
                        ref={name}
                        className="bg-orange-50 text-black px-3 py-2 mx-8 my-4 rounded"
                        type="text"
                        placeholder="Name"
                    />}
                    <input
                        ref={email}
                        className="bg-orange-50 text-black px-3 py-2 mx-8 my-4 rounded"
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        ref={password}
                        className="bg-orange-50 text-black px-3 py-2 mx-8 my-4 rounded"
                        type="password"
                        placeholder="Password"
                    />

                    {
                        validationErrorMessage && <div className="text-red-500 text-sm px-3 mx-5 my-2">{validationErrorMessage}</div>
                    }

                    <button type="submit" className="border border-orange-50 bg-transparent text-orange-50 rounded mx-8 my-4 p-3 cursor-pointer hover:scale-105 duration-250">
                        {isLogin ? 'Login' : 'Register'}
                    </button>

                    <div className="border-b mx-8 my-4 border-orange-50"></div>

                    <div onClick={() => setIsLogin(!isLogin)} className="mx-8 text-orange-50 cursor-pointer text-center text-sm mb-2">{isLogin ? 'No account ? Register now' : 'Already have an account ? Login now'}</div>
                </div>
            </form>
        </div>
    );
};

export default Auth;
