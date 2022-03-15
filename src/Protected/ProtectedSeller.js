import { Navigate, Outlet } from "react-router";
import { getItem } from "../helpers/storage";
import Home from "../Screen/Home/Home";

const useAuth = () =>{
    let user = getItem('user-details');
    return user?.usertype === 2;
}

const ProtectedSeller = () =>{
    const isAuth = useAuth();
    return isAuth ? <Outlet/> :<Navigate to="/"/>
}

export default ProtectedSeller