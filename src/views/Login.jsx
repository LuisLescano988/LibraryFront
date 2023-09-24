import { Link } from "react-router-dom";

function Login () {
    return (
        <div className=" flex justify-center items-center h-screen">
            <div className=" bg-white p-8 rounded shadow-lg">
                <h2 className=" text-2xl font-semibold mb-4">Login</h2>
                <form action="">
                    <div className=" mb-4">
                        <label htmlFor="" className=" block text-gray-600">Username</label>
                        <input type="text" required className=" border rounded px-3 py-2 w-full"/>
                    </div>
                    <div className=" mb-4">
                        <label htmlFor="" className=" block text-gray-600">Password</label>
                        <input type="password" required className=" border rounded px-3 py-2 w-full"/>
                    </div>
                    <button type="submit" className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Login</button>
                    <div className=" mt-4">
                        <p>Don't have an account?<Link to={'/signup'} className=" text-blue-950 underline ml-2">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;