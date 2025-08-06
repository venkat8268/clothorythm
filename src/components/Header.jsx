import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import useYoutubeApiVideos from "../components/hooks/useYoutubeApiVideos"

const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useYoutubeApiVideos();

    // create a custom hook for handling this and fix onAuthStateChanged bug
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
                navigate('/')
            } else {
                dispatch(removeUser())
                navigate('/login')
            }
        });
        
        return () => unsubscribe()
    }, [])




    function handleSignOut() {
        signOut(auth).then(() => {
            dispatch(removeUser());
        }).catch((error) => {
            alert(error.message);
        });
    }

    const user = useSelector((store) => store.user)

    return (
        <div className="absolute w-full flex justify-between items-center px-4 z-100">
            <div className=" text-3xl px-4 py-6 font-bold text-orange-950 ">Clothorythm</div>
            <div className="flex text-orange-950">
                {
                    user && <div className="font-extrabold">
                        {/* {user.displayName} */}
                        Venkatesh
                    </div>
                }
                {
                    user && <div className="cursor-pointer ms-4" onClick={handleSignOut}>Sign Out</div>
                }
                {
                    !user && <Link to={'/login'} className="me-4">Login</Link>
                }
            </div>
        </div>
    )
}

export default Header;