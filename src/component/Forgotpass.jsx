import { Link } from "react-router-dom";

const Forgotpass = () => {
    return (
        <div className="container mx-auto flex items-center justify-around">  
        <img className="w-[700px]" src="./2.jpg" alt="" />
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Forgot your account</h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email / phone number</label>
                        <input type="text" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="enter your email or phone number" required/>
                    </div>
                    <div className="flex items-start">
                    </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to="/login" className="text-blue-700 hover:underline dark:text-blue-500">Create account </Link>
                    </div>
                </form>
            </div>  
        </div>
    );
};

export default Forgotpass;