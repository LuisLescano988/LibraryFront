import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, testToken } from "../redux/actions";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pass = useSelector(state=>state.passed)
    const [input, setInput] = useState({
        username: '',
        password: '',
    });

    function handlerChange(event) {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    useEffect(()=>{
        if(pass){
            navigate('/home')
        }
    }, [pass, navigate])

    async function handlerSubmit(event) {
        event.preventDefault();
        dispatch(loginUser(input))
        // dispatch(testToken(window.localStorage.getItem('token')))
        setInput({
            username: '',
            password: '',
        })
    }

    return (
        <div className=" flex justify-center items-center h-screen">
            <div className=" bg-white p-8 rounded shadow-lg">
                <h2 className=" text-2xl font-semibold mb-4">Login</h2>
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