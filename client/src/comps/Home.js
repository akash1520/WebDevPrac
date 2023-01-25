import React, { useReducer, useState } from 'react'
import Todo from './Todo';

export const ACTION = {
  ADD_TODO: 'addtodo',
  DELETE_TODO: 'deletetodo',
  TOGGLE_TODO: 'toggletodo'
}


function reducer(todos, action) {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]

    case ACTION.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
      })
    case ACTION.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id)
    default:
      return todos
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false }
}

export default function Home() {

  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState("")


  function handlesubmit(e) {
    e.preventDefault()
    dispatch({ type: ACTION.ADD_TODO, payload: { name: name } })
    setName('')
  }

  console.log(todos)

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type={'text'} value={name} onChange={(e) => setName(e.target.value)} />
        <button type='submit'>Submit</button>
      </form>
      {
        todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
        })
      }
    </div>
  )
}






















// const ACTION={
//   INCREMENT:'increment',
//   DECREMENT:'decrement'
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTION.INCREMENT:
//       return { age: state.age + 1 }
//     case ACTION.DECREMENT:
//       return {age:state.age-1}
//   }
// }

// export default function Home() {
//   const [state, dispatch] = useReducer(reducer, { age: 0 })
//   return (
//     <>
//       <button onClick={()=>{dispatch({type:ACTION.INCREMENT})}}>+</button>
//       {state.age}
//       <button onClick={()=>{dispatch({type:ACTION.DECREMENT})}}>-</button>
//     </>
//   )
// }
