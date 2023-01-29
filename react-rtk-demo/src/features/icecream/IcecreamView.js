import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'


export default function IcecreamView (){
  const numOfIcecream= useSelector((state)=>state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  return (
    <div>
    <h2>NUmber of icecream - {numOfIcecream} </h2>
    <button onClick={()=>dispatch(ordered())}>Order icecream</button>
    <button onClick={()=>dispatch(restocked(5))}>Restock icecreams</button>
    </div>
  )
}
