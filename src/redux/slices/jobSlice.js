import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const token = JSON.parse(localStorage.getItem('token'))
export const fetchJobs = createAsyncThunk('jobSlice/fetchJobs',async()=>{
    let resp = await fetch('https://alrayademo-back.appssquare.com/api/admin/job-titles',{
            method:'GET',
            headers:{
                Accept : 'application/json',
                'Content-Type':'application/json',
                'X-Language' :'en',
                Authorization : `Bearer ${token.token}`
            }
        })
        resp = await resp.json()
        return resp.data

    // ==========
//    const data = await axios.get('https://alrayademo-back.appssquare.com/api/admin/job-titles',{
//         headers:{
//             Accept : 'application/json',
//             'Content-Type':'application/json',
//             'X-Language' :'en',
//             Authorization : `Bearer ${token.token}`
//         }
//     }).then((res)=>res.data)
//     return data
}
)


const jobSlice = createSlice({
    name:'jobSlice',
    initialState:[],
    extraReducers:(builder)=>{
        builder.addCase(fetchJobs.fulfilled,(state,action)=>{
            return  [...state, action.payload]
        })
    }
})

// export const {}
export default jobSlice.reducer
