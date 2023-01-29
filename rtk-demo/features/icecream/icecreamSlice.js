const { cakeActions } = require("../cake/cakeSlice")
const createSlice = require("@reduxjs/toolkit").createSlice


const initialState ={
    numOfIcecreams:5
}

const icecreamSlice= createSlice({
    name:"icecream",
    initialState,
    reducers:{
        ordered:(state)=>{
            state.numOfIcecreams--
        },
        restocked:(state,action)=>{
            state.numOfIcecreams+=action.payload
        },
    },
    // extraReducers:{
    //     ['cake/ordered']:(state)=>{
    //         state.numOfIcecreams--;
    //     },
    // },
    extraReducers:(builder)=>{
        builder.addCase(cakeActions.ordered, (state)=>{
            state.numOfIcecreams--;
        })
    }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions