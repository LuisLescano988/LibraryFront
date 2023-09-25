import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllBooks, postNewBook } from '../redux/actions'

function BookForm() {
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        title: "",
        author: "",
        publication_year: ""
    });

    useEffect(() => {
        dispatch(getAllBooks())
    }, []);

    function handlerChange(event) {
        setInput({ ...input, [event.target.name]: event.target.value });
        setErrors(
            validate({
                ...input,
                [event.target.name]: event.target.value,
            })
        );
    };

    function handlerSubmit(event) {
        event.preventDefault();
        if (!input.title || !input.author || !input.publication_year) {
            return alert("All fields are required")
        } else if (!/^(16\d\d|20\d\d)*$/.test(input.publication_year)) {
            return alert("Please enter a valid year between 1600 and the current year")
        } else if (input.title.length < 2 || input.title.length > 40) {
            return alert("Please enter a title between 2 and 40 characters in length.")
        } else if (input.author.length < 2 || input.author.length > 40) {
            return alert("Please enter an author name between 2 and 40 characters in length.")
        } else if (!/^[a-zA-Z ]*$/.test(input.title)) {
            return alert("Please write without numbers and symbols")
        } else if (!/^[a-zA-Z ]*$/.test(input.author)) {
            return alert("Please write without numbers and symbols")
        } else dispatch(postNewBook(input));
        setInput({
            title: "",
            author: "",
            publication_year: ""
        });
        return alert("Book published successfully!")
    }

    return (
        <div className=" flex">
            <div className=" p-8 rounded shadow-lg">
                <h1 className=" text-2xl font-semibold mb-4">Add a new book</h1>
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
        </div>
    )
};

export default BookForm;