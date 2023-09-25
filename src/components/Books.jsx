import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllBooks } from "../redux/actions";
import Book from "./Book";

const Books = () => {
   const dispatch = useDispatch();
   const allBooks = useSelector((state) => state.books);

   const booksPerPage = 10
   const [currentPage, setCurrentPage] = useState(1);
   const prevPage = currentPage -1;
   const nextPage = currentPage +1;

   const handlerPrevPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage -1, 1));
   };

   const handlerNextPage = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages));
  };

  const handlerFirstPage = () => {
    setCurrentPage((currentPage) => currentPage - (currentPage - 1));
  };

  const handlerLastPage = () => {
    setCurrentPage((currentPage) => totalPages);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = allBooks.slice(
    indexOfFirstBook,
    indexOfLastBook
  );

  const totalPages = Math.ceil(
    (allBooks.length ? allBooks.length : 0) / booksPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [allBooks]);

   useEffect(() => {
    dispatch(getAllBooks());
   }, []);

  return(
   <div className="">
    <div className=" grid grid-cols-5 gap-4">
      {currentBooks.map((book) => (
        <Book
        key={book.id}
        id={book.id}
        title={book.title}
        />
      ))}
    </div>
    <div className=" flex justify-center bg-white">
      <div className="">
        {totalPages < 1 ? (
          <button className=" hover:text-white">0</button>
        ) : (
          <div className="flex space-x-2">
            <button onClick={handlerFirstPage} hidden={currentPage === 1 || currentPage === 2} className=" hover:text-white">First</button>
            <button onClick={handlerPrevPage} hidden={currentPage === 1} className=" hover:text-white">{prevPage}</button>
            <button disabled>{currentPage}</button>
            <button onClick={handlerNextPage} hidden={currentPage === totalPages} className=" hover:text-white">{nextPage}</button>
            <button onClick={handlerLastPage} className=" hover:text-white">Last</button>
          </div>
        )
      }
      </div>
    </div>
   </div>
  )
}

export default Books;