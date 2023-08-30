
import { Link, useNavigate } from 'react-router-dom';
const Singelcountry = ({country}) => {
    const{name,cca2}=country;

    const navigate=useNavigate()

    const handelChang=(code)=>{
       navigate(`/Countryfulldetalis/${code}`)
    }
    
    return (
        <div className="m-2">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700 ">
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Country info</h5>  
                <ul role="list" className="space-y-5 my-7">
                    <li className="flex space-x-3 items-center">
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Name : {name.common} </span>
                    </li>
                    <li className="flex space-x-3">
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">cca2 : {cca2}</span>
                    </li> 
                </ul>
                <button onClick={()=>handelChang(cca2)} type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">See more Details</button>
            </div>
        </div>
    );
};

export default Singelcountry;