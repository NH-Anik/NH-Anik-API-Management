
import Logregilayout from './../component/Logregilayout';
import Footerlay from './../component/Footerlay';
import { Outlet } from 'react-router-dom';
const Reglayout = () => {
    return (
        <div>
            <Logregilayout />
            <Outlet />
            <Footerlay />
        </div>
    );
};

export default Reglayout;