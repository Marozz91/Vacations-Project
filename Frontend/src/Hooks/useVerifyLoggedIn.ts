import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { store } from "../Redux/Store";
import notifyService from "../Services/NotifyService";


// Custom Hook
function useVerifyLoggedIn() {

    const navigate = useNavigate();

    useEffect(() => {
        const token = store.getState().auth.token;
        if (!token) {
            navigate("/home");
            notifyService.error("You must login first!");
        }
    }, []);


}
export default useVerifyLoggedIn;