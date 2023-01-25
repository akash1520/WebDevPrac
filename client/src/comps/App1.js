import { useEffect, useState } from "react";



export default function App1(){
const [arr,setArr]=useState([])
const [h,setH] = useState("");

   useEffect(()=>{ console.log(arr)})

    return(
    <>
        {arr.map((item)=><h1>{item}</h1>)}
    
        <input type="text" onChange={(e)=>{setH(e.target.value)}} value={h}/>
        <button onClick={()=>{setArr([...arr,h])}} >submit</button>
    </>)
}