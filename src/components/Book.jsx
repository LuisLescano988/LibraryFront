import React from "react";
import { Link } from "react-router-dom";

function Book({ id, title, author, publication_year }) {
    return (
        <Link to={`/home/${id}`} className=" bg-slate-100 py-2 px-4 text-center h-full hover:bg-slate-400 p-8 rounded shadow-lg">
            <div className=" flex flex-col p-6">
                <h5 className=" text-black font-semibold">{title}</h5>
                <h2>{author}</h2>
            </div>
        </Link>
    )
};

export default Book;