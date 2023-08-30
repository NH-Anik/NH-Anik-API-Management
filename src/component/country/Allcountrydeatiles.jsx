import { useLoaderData } from "react-router-dom";
import Singelcountry from "./Singelcountry";

const Allcountrydeatiles = () => {
    const allCountry = useLoaderData();
    return (
        <div className="container mx-auto">
            <h6 className='text-4xl text-center my-4'>Data show from free rest-countries API</h6>
            <h1 className="text-center text-4xl mb-5">All country : <span className="text-red-700">{allCountry.length}</span></h1>
                <div className="flex flex-wrap">
                    {
                        allCountry.map((country,index)=> <Singelcountry key={index} country={country}/>)
                    }
           </div>
        </div>
    );
};

export default Allcountrydeatiles;