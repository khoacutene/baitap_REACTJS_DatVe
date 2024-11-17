import { configureStore } from "@reduxjs/toolkit";
import ShoppingPhoneReducer from "./../_pages/HomeTemplate/ShoppingPhonePage/duck/reducer"
import bookingTicketReducer from "./../_pages/HomeTemplate/HomePage/duck/reducer"
import listMovieReducer from "./../_pages/HomeTemplate/ListMoviePage/duck/reducer"
const store = configureStore({
    reducer: {
        ShoppingPhoneReducer,
        bookingTicketReducer,
        listMovieReducer,
    }
})

export default store;