
import Logregilayout from './../component/Logregilayout';
import { Outlet } from 'react-router-dom';
import Footerlay from './../component/Footerlay';
const forgotlayout = () => {
    return (
        <div>
            <Logregilayout />
            <Outlet />
            <Footerlay />
        </div>
    );
};

export default forgotlayout;