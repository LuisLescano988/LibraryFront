import React, { useEffect } from "react";
import { getDetail } from '../redux/actions'
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Detail () {
    const { id } = useParams();
    const dispatch = useDispatch();
    const bookDetail = useSelector((state) => state.detail);

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch, id]);

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
        </div>
    )
};

export default Detail;