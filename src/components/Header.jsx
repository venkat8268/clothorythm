import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName}))
            } else {
                dispatch(removeUser())
            }
        });
    })

    return (
        <div className=" absolute text-3xl px-4 py-6 font-bold text-orange-50">Clothorythm</div>
    )
}

export default Header;