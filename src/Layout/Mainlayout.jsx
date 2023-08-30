
import { Outlet } from "react-router-dom";
import Navberlay from "../component/Navberlay";
import Footerlay from './../component/Footerlay';


const Mainlayout = () => {
    return (
        <div>
            <Navberlay />
            <Outlet />
            <Footerlay />
        </div>
    );
};

export default Mainlayout;