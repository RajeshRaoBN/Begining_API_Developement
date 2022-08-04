import React from 'react'
import './App.css'
import Greetings from './Greetings'
import Bike from './Bike'
import ParentComponent from './ParentComponent'
import Test from './Test'

export default function () {
    const todos = [
        { id: 1, text: 'Wash dishes', done: false },
        { id: 2, text: 'Do laundry', done: false },
        { id: 3, text: 'Take shower', done: false },
    ]

  return (
    <div className="App">
        <h1>Todo List</h1>

        <TodoList todos={todos} />

    </div>
  )
}

function TodoList({ todos }) {
    return (
        <div>
            <Greetings />
            <Bike />
            <ParentComponent />
            <Test />
            <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}</li>
            ))}
            </ul>
        </div>
        
    )
    // console.log(props) //{todos: Array(3)}
}
