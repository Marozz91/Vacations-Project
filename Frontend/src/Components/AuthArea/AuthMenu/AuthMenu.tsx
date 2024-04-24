import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../Redux/Store";
import "./AuthMenu.css";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";

function AuthMenu(): JSX.Element {

    const user = useSelector((state: RootState) => state.auth.user);
    const navigate = useNavigate();

    const logoutUser = () => {
        authService.logout();
        navigate("/home");
        notifyService.success("We will miss you...");

    }

    return (
        <div className="AuthMenu">
            {
                !user && <>
                    <span>Hello Guest </span> |
                    <NavLink to="/login"> Login</NavLink> |
                    <NavLink to="/register"> Register</NavLink>
                </>
            }
            {
                user && <>
                    <span>Hello, {user.firstName} {user.lastName}</span> |
                    <span onClick={logoutUser} className="link"> Logout</span>
                </>
            }
        </div>
    );
}

export default AuthMenu;
