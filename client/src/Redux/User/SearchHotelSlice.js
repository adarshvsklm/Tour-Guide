import { faL } from "@fortawesome/free-solid-svg-icons";
import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    rooms: 1,
    adults: 2,
    children: 0,
    popOver:false,
    // Pid:''
 }

 export const SearchHotelSlice = createSlice({
    name : 'SearchData',
    initialState,
    reducers: {
        setSearchData:(state,action)=>  {
            console.log(action.payload)
             state.rooms = action.payload.rooms ?action.payload.rooms:state.rooms
            state.adults = action.payload.adults ?action.payload.adults:state.adults
            state.children = action.payload.children ?action.payload.children:state.children
            state.popOver = action.payload.popOver ?action.payload.popOver: null
            // state.Pid = action.payload.Pid ? action.payload.Pid:null
         }

    }

 })

 export default SearchHotelSlice.reducer
 export const {setSearchData} = SearchHotelSlice.actions