import { Link } from "react-router-dom";
import { newUser } from "../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";


function SignUp() {
    const dispatch = useDispatch()
    const [input, setInput] = useState({
        username: '',
        password: '',
        email: ''
    });

    function handlerChange(event) {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    function handlerSubmit(event) {
        event.preventDefault();
        dispatch(newUser(input))
        setInput({
            username: '',
            password: '',
            email: ''
        })
    }

    return (
        <div className=" flex justify-center items-center h-screen">
            <div className=" bg-white p-8 rounded shadow-lg">
                <h2 className=" text-2xl font-semibold mb-4">Sign up</h2>
                <form onSubmit={(event) => handlerSubmit(event)}>
                    <div className=" mb-4">
                        <label htmlFor="" className=" block text-gray-600">Username</label>
                        <input 
                        type="text"
                        value={input.username}
                        name="username" 
                        onChange={(event) => handlerChange(event)} 
                        className=" border rounded px-3 py-2 w-full" />
                    </div>
                    <div className=" mb-4">
                        <label htmlFor="" className=" block text-gray-600">Password</label>
                        <input 
                        type="password"
                        value={input.password}
                        name="password"  
                        onChange={(event) => handlerChange(event)} 
                        className=" border rounded px-3 py-2 w-full" />
                    </div>
                    <div className=" mb-4">
                        <label htmlFor="" className=" block text-gray-600">Email</label>
                        <input 
                        type="text"
                        value={input.email} 
                        name="email" 
                        onChange={(event) => handlerChange(event)} 
                        className=" border rounded px-3 py-2 w-full" />
                    </div>
                    <button type="submit" className=" bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Register</button>
                    <div className=" mt-4">
                        <p>Already have an account?<Link to={'/'} className=" text-blue-950 underline ml-2">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;