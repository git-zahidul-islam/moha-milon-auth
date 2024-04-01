import { useContext } from "react";
import { AuthContext } from "../Context/Context";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="flex items-center justify-center h-screen flex-col w-full border-2">
                <div>
                    <h1>{user.displayName}</h1>
                    <img className="w-40 h-40" src={user.photoURL} alt="" />
                    <p>{user.email || <span>Empty</span>}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;