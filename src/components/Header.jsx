import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
            } else {
                dispatch(removeUser())
            }
        });
    }, [])

    
    function handleSignOut() {
        signOut(auth).then(() => {            
            dispatch(removeUser());
            navigate('/login');
        }).catch((error) => {
            alert(error.message);
        });
    }
    
    const user = useSelector((store) => store.user)

    return (
        <div className="absolute bg-gradient-to-b from-black/25 to-transparent w-full flex justify-between items-center px-4">
            <div className=" text-3xl px-4 py-6 font-bold text-orange-50 ">Clothorythm</div>
            <div className="flex">
            {
                user && <div className="font-extrabold">{user.displayName}</div>
            }
            {
                user && <div className="cursor-pointer ms-4" onClick={handleSignOut}>Sign Out</div>
            }
            </div>
        </div>
    )
}

export default Header;