import React, { useState,useEffect } from 'react'

export default function Users() {

    const [backendData,setBackendData]=useState([])

    useEffect(() => {
        fetch("/api").then(
            Response=>Response.json()
        ).then(
            (data)=>{
                setBackendData(data);
            }
        )
      }
    , [])
    

  return (
    <div>
        {
            <p>{backendData.Users.map(function(user,id){
                return (<p style={{"marginLeft":'1rem'}} key={id}>{user}</p>)
            })}</p>
            }
        
    </div>
  )
}
