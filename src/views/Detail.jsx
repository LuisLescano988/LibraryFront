import React, { useEffect, useState } from "react";
import { editBook, getDetail } from '../redux/actions'
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Detail () {
    const { id } = useParams();
    const dispatch = useDispatch();
    const bookDetail = useSelector((state) => state.detail);
    const [input, setInput] = useState({
        title: "",
        author: "",
        publication_year: ""
    });

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, handlerSubmit]);

    function handlerChange(event) {
        setInput({ ...input, [event.target.name]: event.target.value });
    };
    
    function handlerSubmit(event) {
        event.preventDefault();
        dispatch(editBook(input,id));
        setInput({
            title: "",
            author: "",
            publication_year: ""
        });
        return alert("Book edited successfully!")
    }

    return (
        <div>
            <div>
                <button>
                    <Link to="/home">Back to home</Link>
                </button>
            </div>
            <div>
                <h4>{bookDetail.title}</h4>
                <h2>{bookDetail.author}</h2>
                <h2>{bookDetail.publication_year}</h2>
            </div>
            <form onSubmit={(event) => handlerSubmit(event)} className=" flex flex-row">
                    <div>
                        <label className=" text-gray-600 mx-1">Title:</label>
                        <input
                            type="text"
                            placeholder="Enter a title"
                            className="  border rounded px-3 py-2 mx-2 hover:border-blue-500"
                            value={input.title}
                            name="title"
                            onChange={(event) => handlerChange(event)}
                        />
                    </div>
                    <div>
                        <label className=" text-gray-600 mx-1">Author:</label>
                        <input
                            type="text"
                            placeholder="Enter an author name"
                            className=" border rounded px-3 py-2 mx-2 hover:border-blue-500"
                            value={input.author}
                            name="author"
                            onChange={(event) => handlerChange(event)}
                        />
                    </div>
                    <div>
                        <label className=" text-gray-600 mx-1">Year:</label>
                        <input
                            type="number"
                            placeholder="Enter a publication year"
                            className=" border rounded px-3 py-2 mx-2 hover:border-blue-500"
                            value={input.publication_year}
                            name="publication_year"
                            onChange={(event) => handlerChange(event)}
                        />
                    </div>
                    <button type="submit" className=" bg-slate-950 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Post new book</button>
                </form>
        </div>
    )
};

export default Detail;