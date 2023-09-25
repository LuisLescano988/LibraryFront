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
       <form onSubmit={(event) => handlerSubmit(event)}>
        <h1 className=" flex justify-center mb-2">Add a new book</h1>
        <label>Title</label>
        <input 
        type="text" 
        placeholder="Enter a title"
        className=" mx-2"
        value={input.title}
        name = "title"
        onChange={(event) => handlerChange(event)}
        />
        <label>Author</label>
        <input
        type="text"
        placeholder="Enter an author name"
        className=" mx-2"
        value={input.author}
        name="author"
        onChange={(event) => handlerChange(event)}
        />
        <label>Year</label>
        <input
        type="number"
        placeholder="Enter a publication year"
        className=" mx-2"
        value={input.publication_year}
        name="publication_year"
        onChange={(event) => handlerChange(event)}
        />
        <button type="submit" className=" bg-slate-950 text-white p-3">Post new book</button>
       </form>
    )
};

export default BookForm;