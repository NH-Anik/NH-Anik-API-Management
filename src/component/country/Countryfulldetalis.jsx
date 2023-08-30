import { useLoaderData } from "react-router-dom";

const Countryfulldetalis = () => {
    const data=useLoaderData();
    const {name,region,area,capital,cca2,flags}=data[0];
    return (
        <div className="m-2 flex justify-center">
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow sm:p-4 dark:bg-gray-800 dark:border-gray-700 ">
                <h5 className="text-xl font-medium text-gray-500 dark:text-gray-400">Country info</h5>  
                <ul role="list" className="space-y-5 my-7">
                    <li className="flex space-x-3 items-center">
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Name : {name.common} </span>
                    </li>
                    <li className="flex space-x-3 items-center">
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Official-Name : {name.official} </span>
                    </li>
                    <li className="flex space-x-3">
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Region : {region}</span>
                    </li>
                    <li className="flex space-x-3">
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Area : {area}</span>
                    </li> 
                    <li className="flex space-x-3">
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Capital : {capital}</span>
                    </li> 
                    <li className="flex space-x-3">
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">cca2 : {cca2}</span>
                    </li> 
                    <li className="space-x-3">
                        <label htmlFor=""className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Flags :</label>
                        <img className="mt-4" src={flags.png} alt="" />
                    </li> 
                    
                </ul>
            </div>
        </div>
    );
};

export default Countryfulldetalis;