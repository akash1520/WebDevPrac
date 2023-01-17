import React, { useReducer } from 'react'

const ACTION={
  INCREMENT:'increment',
  DECREMENT:'decrement'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { age: state.age + 1 }
    case ACTION.DECREMENT:
      return {age:state.age-1}
  }
}

export default function Home() {
  const [state, dispatch] = useReducer(reducer, { age: 0 })
  return (
    <>
      <button onClick={()=>{dispatch({type:ACTION.INCREMENT})}}>+</button>
      {state.age}
      <button onClick={()=>{dispatch({type:ACTION.DECREMENT})}}>-</button>
    </>
  )
}
