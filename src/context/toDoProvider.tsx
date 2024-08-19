import { useState } from "react"
import { ToDoContext } from "./toDoContext"
import { ITodo } from "../interfaces/interfaces"

export default function ToDoProvider({ children }: { children: React.ReactNode }) {

    const storageStyleMode = localStorage.getItem('styleMode')
    const storageToDoList = JSON.parse(localStorage.getItem('toDoList') || '[]')

    if (storageStyleMode === 'dark') {
        document.body.classList.add('dark')
    }

    /* STATES */
    const [toDoList, setToDoList] = useState<ITodo[]>(storageToDoList)
    const [styleMode, setStyleMode] = useState<'light' | 'dark'>(storageStyleMode === 'light' || storageStyleMode === 'dark' ? storageStyleMode : 'light')
    const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

    const toggleStyleMode = () => {
        document.body.classList.toggle('dark')
        const style = styleMode === 'light' ? 'dark' : 'light'
        localStorage.setItem('styleMode', style)
        setStyleMode(style)
    }

    const addTodo = (todo: ITodo) => {
        const newTodoList = [...toDoList, todo]
        setToDoList(newTodoList)
        setStorageToDoList(newTodoList)
    }

    const removeTodo = (id?: number) => {
        const newToDoList = toDoList.filter((todo) => todo.id !== id)
        setToDoList(newToDoList)
        setStorageToDoList(newToDoList)
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
        setStorageToDoList(newToDoList)
    }

    const clearCompleted = () => {
        const newToDoList = toDoList.filter((todo) => !todo.completed)
        setToDoList(newToDoList)
        setStorageToDoList(newToDoList)
    }

    const setStorageToDoList = (toDoList: ITodo[]) => {
        localStorage.setItem('toDoList', JSON.stringify(toDoList))
    }

    const filterToDoList = ({ filter }: { filter: 'all' | 'active' | 'completed' }) => {
        setFilter(filter)
        switch (filter) {
            case 'active':
                {
                    const newToDoList = storageToDoList.filter((todo: ITodo) => !todo.completed)
                    console.log("🚀 ~ filterToDoList ~ newToDoList:", newToDoList)
                    setToDoList(newToDoList)
                    break
                }
            case 'completed':
                {
                    const newToDoList = storageToDoList.filter((todo: ITodo) => todo.completed)
                    setToDoList(newToDoList)
                    break
                }
            default:
                setToDoList([...storageToDoList])
        }
    }


    return (
        <ToDoContext.Provider value={
            {
                /* states */
                toDoList,
                styleMode,
                filter,

                /* functions */
                toggleStyleMode,
                addTodo,
                removeTodo,
                toggleTodoCompleted,
                clearCompleted,
                filterToDoList
            }
        }>
            {children}
        </ToDoContext.Provider>
    )
}