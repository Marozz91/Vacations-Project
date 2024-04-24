import { Route, Routes } from "react-router-dom";
import RouteNotFound from "../RouteNotFound/RouteNotFound";
import Home from "../../HomeArea/Home/Home";
import Vacations from "../../VacationsArea/Vacations/Vacations";
import Register from "../../AuthArea/Register/Register";
import Login from "../../AuthArea/Login/Login";
import VacationsAdmin from "../../VacationsArea/VacationsAdmin/VacationsAdmin";
import EditVacation from "../../VacationsArea/EditVacation/EditVacation";
import "./Routing.css";
import AddVacation from "../../VacationsArea/AddVacation/AddVacation";
import VacationsGraph from "../../VacationsArea/VacationsGraph/VacationsGraph";

function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route path="/vacations" element={<Vacations />} />
            <Route path="/vacations-graph" element={<VacationsGraph />} />
            <Route path="/vacations-admin" element={<VacationsAdmin />} />
            <Route path="/vacations/add" element={<AddVacation />} />
            <Route path="/vacations/edit/:id" element={<EditVacation />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={<RouteNotFound />} />
        </Routes>
    );
}

export default Routing;
