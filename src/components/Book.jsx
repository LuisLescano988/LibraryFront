import React from "react";
import { Link } from "react-router-dom";

function Book({ id, title, author, publication_year }) {
    return (
        <div className=" flex flex-col p-6">
            <div className=" text-center h-[4rem]">
                <h5 className=" truncate">{title}</h5>
                <h2>{author}</h2>
            </div>
            <Link to={`/home/${id}`} className=" bg-slate-950 text-white py-2 px-4 text-center h-10">
                DETAIL
            </Link>
        </div>
    )
};

export default Book;