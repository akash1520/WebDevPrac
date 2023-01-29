import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

export default function UserView() {
    const [fetch,setFetch]=useState(false)
    const dispatch = useDispatch()
    const user=useSelector((state)=>state.user)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[fetch])

  return (
    <div>
        <h2>List of users</h2>
        <button onClick={()=>{setFetch(!fetch)}}>Fetch</button>
        {user.loading && <div>Loading....</div>}
        {!user.loading && user.error ? <div>Error:{user.error}</div>:null}
        {!user.loading && user.users.length ? (
            <ul>
                {user.users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        ):null}
    </div>
  )
}


