import { faL } from "@fortawesome/free-solid-svg-icons";
import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    rooms: '',
    adults: '',
    children: '',
    popOver:false,
 }

 export const SearchHotelSlice = createSlice({
    name : 'SearchData',
    initialState,
    reducers: {
        setSearchData:(state,action)=>  {
            console.log(action);
            state.rooms = action.rooms
            state.adults = action.adults
            state.children = action.children
            state.popOver = action.popOver
        }

    }

 })

 export default SearchHotelSlice.reducer
 export const {setSearchData} = SearchHotelSlice.actions