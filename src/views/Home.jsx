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

    console.log(pass)

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        dispatch(testToken(token))
        if (pass != true) return navigate('/')
    }, [])

    function handlerLogOut() {
        window.localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div className=" flex flex-col items-center h-screen">
            <button onClick={handlerLogOut}>Log Out</button>
            <div className=" flex flex-row mb-6 mt-4">
                <p className=" text-slate-600 font-extrabold text-3xl">Library</p>
                <p className=" text-sky-950 font-extrabold text-3xl">App</p>
            </div>
            <div className=" py-4 mb-10">
                <BookForm />
            </div>
            <div className=" py-4">
                <Books />
            </div>
        </div>
    )

};

export default Home;