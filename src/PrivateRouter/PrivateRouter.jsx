import { useContext } from "react";
import { AuthContext } from "../Context/Context";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <div className="skeleton h-32 w-8/12"></div>
    }

    if(user){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRouter;
PrivateRouter.propTypes = {
    children: PropTypes.node,
}