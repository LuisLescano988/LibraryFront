import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook, editBook } from "../redux/actions";

function Book({ id, title, author }) {
    const dispatch = useDispatch()

    function handlerEdit() {
        dispatch(editBook(id))
    }

    function handlerDelete() {
        dispatch(deleteBook(id))
    }

    return (
        <div className=" flex flex-col bg-slate-100 py-6 px-10 text-center h-full  p-8 rounded shadow-lg">
            <Link to={`/home/${id}`} className=" ">
                <h5 className=" text-black font-semibold text-2xl">{title}</h5>
            </Link>
            <h2>{author}</h2>
            <button onClick={handlerEdit}>Edit</button>
            <button onClick={handlerDelete}>X</button>
        </div>
    )
};

export default Book;