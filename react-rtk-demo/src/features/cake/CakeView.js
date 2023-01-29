import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice.js'


export default function IcecreamView (){
  const numOfIcecream= useSelector((state)=>state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
    <h2>NUmber of icecream - {numOfIcecream} </h2>
    <button onClick={()=>dispatch(ordered())}>Order cake</button>
    <button onClick={()=>dispatch(restocked(5))}>Restock cakes</button>
    </div>
  )
}
