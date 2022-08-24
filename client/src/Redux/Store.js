import {configureStore} from '@reduxjs/toolkit'
import SearchHotelSlice from './User/SearchHotelSlice'

export const store =configureStore({
    reducer: {
        searchData:SearchHotelSlice
    }
})