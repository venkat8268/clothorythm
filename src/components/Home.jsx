import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate()
    const user = useSelector((store) => store.user)
    
    return (
        <></>
    )
}

export default Home