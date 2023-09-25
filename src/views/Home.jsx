import React, { useEffect, Component, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { testToken } from "../redux/actions";
import { redirect, useNavigate } from "react-router-dom";
import Books from "../components/Books";
import BookForm from "../components/BookForm";


function Home() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const pass = useSelector(state => state.passed)
    const [reloaded, setReloaded] = useState(false)
    
    console.log(pass)

    useEffect(() => {
        dispatch(testToken(localStorage.getItem('token')))
    }, [])

    // useEffect(() => {
    //     if (!reloaded && pass !== "Passed") {
    //     //   window.location.reload();
    //       setReloaded(true);
    //     }
    //   }, []);
    
    if (pass != true) {
        navigate('/')
    }else{
        return(
            <div className=" flex flex-col items-center bg-gray-600 h-screen">
                <div className=" flex flex-row mb-6">
                    <p className=" text-white font-extrabold text-3xl">Library</p>
                    <p className=" text-sky-950 font-extrabold text-3xl">App</p>
                </div>
                <div className=" py-4 mb-10">
                <BookForm/>
                </div>
                <div className=" py-4">
                <Books/>
                </div>
            </div>
        )
    }
};

export default Home;