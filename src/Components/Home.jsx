import { useContext } from "react";
import { AuthContext } from "../Context/Context";

const Home = () => {
    const { loading } = useContext(AuthContext)
    
    return loading && <span className="loading loading-bars loading-lg"></span>
};

export default Home;