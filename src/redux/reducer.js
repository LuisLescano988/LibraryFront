import{
    TEST_TOKEN,
    GET_ALL_BOOKS,
    GET_BOOK_DETAIL,
    EDIT_BOOK
} from './actionTypes';

const initialState = {
    books: [],
    detail: [],
    passed: false
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_ALL_BOOKS:
            return {
                ...state,
                books: payload
            }
        case GET_BOOK_DETAIL:
            return{
                ...state,
                detail: payload
            }
        case TEST_TOKEN:
            return {
                ...state,
                passed: payload
            }

            default: return state
    }
}