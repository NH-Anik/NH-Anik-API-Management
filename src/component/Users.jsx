import { useState,useEffect } from 'react';

const Users = () => {
      const [dataapi, setdataapi] = useState([]);
      useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/users`;
        fetch(url)
        .then(res => res.json())
        .then(data => setdataapi(data))
      }, []);
     
    return (
      <div className='container mx-auto'>
        <h1 className='text-4xl text-center my-4'>Data show from free jsonplaceholder API</h1>
        <div  className='flex flex-wrap ml-2'>
        {
            dataapi.map(data=>
                <div key={data.id} className='ml-2 mt-2'>
                    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">User info</h5>
                        
                        <ul role="list" className="space-y-5 my-7">
                            <li className="flex space-x-3 items-center">
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Name : {data.name}</span>
                            </li>
                            <li className="flex space-x-3">
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">UserName : {data.username}</span>
                            </li>
                            <li className="flex space-x-3">
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Email : {data.email}</span>
                            </li> 
                            <li className="flex space-x-3">
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Phone : {data.phone}</span>
                            </li> 
                            <li className="flex space-x-3">
                                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Website : {data.website}</span>
                            </li> 
                        </ul>
                        <button onClick={()=>{alert("here is no data")}} type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">See more Data</button>
                    </div>
                </div>
            )
        }
         </div>
      </div>
    );
};

export default Users;