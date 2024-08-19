import { useState } from "react"
import { ToDoContext } from "./toDoContext"
import { ITodo } from "../interfaces/interfaces"

export default function ToDoProvider({ children }: { children: React.ReactNode }) {

    const [toDoList, setToDoList] = useState<ITodo[]>([])
    const [styleMode, setStyleMode] = useState<'light' | 'dark'>('light')

    const toggleStyleMode = () => {
        document.body.classList.toggle('dark')
        setStyleMode(styleMode === 'light' ? 'dark' : 'light')
    }
    const addTodo = (todo: ITodo) => {
        setToDoList([...toDoList, todo])
    }
    const removeTodo = (id?: number) => {
        const newToDoList = toDoList.filter((todo) => todo.id !== id)
        setToDoList(newToDoList)
    }

    const toggleTodoCompleted = (id?: number) => {
        const newToDoList = toDoList.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo
        })
        setToDoList(newToDoList)
    }

    const clearCompleted = () => {
        const newToDoList = toDoList.filter((todo) => !todo.completed)
        setToDoList(newToDoList)
    }


    return (
        <ToDoContext.Provider value={
            {
                toDoList,
                styleMode,
                toggleStyleMode,
                addTodo,
                removeTodo,
                toggleTodoCompleted,
                clearCompleted
            }
        }>
            {children}
        </ToDoContext.Provider>
    )
}