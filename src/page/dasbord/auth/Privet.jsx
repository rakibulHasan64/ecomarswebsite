import { useSelector } from "react-redux";
import { Outlet, Navigate, useNavigate } from "react-router";



function Privet() {

        const authuser = useSelector((state) => state.auth);

        const navgite = useNavigate();


        

        if (!authuser.isLogine) {
                return <Navigate to={'/logine'} />;
        }

        if (authuser.isLogine && authuser.user.role != "admin") {
                
                return <Navigate to={"/"} />
        }

        if (authuser.isLogine && authuser.user.role == "admin") {
                // return <Outlet />;
        
        }
        return (
                <>
                        
                        <Outlet />
                </>
                        
                
        );
} 

export default Privet;