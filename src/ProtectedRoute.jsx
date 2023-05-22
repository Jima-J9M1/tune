import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./components/utils/firebase/handlSubmit"


const ProtectedRoute = () =>{
    const user = isAuthenticated()
    return  user ? <Outlet />: <Navigate to="/login" replace/>
}

export default ProtectedRoute;