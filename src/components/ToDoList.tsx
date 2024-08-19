import { useContext } from "react"

import { ToDoContext } from "../context/toDoContext"
import Input from "./Input"

export default function ToDoList() {

    const { toDoList, clearCompleted, filter, filterToDoList } = useContext(ToDoContext)
    const remainingTasks = toDoList.filter((todo) => !todo.completed).length

    const setTextColorByFilter = (value: 'all' | 'active' | 'completed') => {
        return filter === value ? 'text-Bright-Blue' : 'text-Light-Grayish-Blue'
    }

    const filterList = (e: React.MouseEvent<HTMLButtonElement>) => {
        filterToDoList({ filter: e.currentTarget.value as 'all' | 'active' | 'completed' })
    }

    return (
        <div className="mt-7">
            {
                toDoList.map((todo) => {
                    return (
                        <Input key={todo.id} isReadOnly toDo={todo} />
                    )
                })
            }
            {
                toDoList.length ? (
                    <>
                        <div className="flex justify-between text-Light-Grayish-Blue bg-white py-3 px-4 rounded-b-md dark:bg-Very-Dark-Grayish-Blue">
                            <span>{remainingTasks} items left</span>
                            <button onClick={() => clearCompleted()}>Clear completed</button>
                        </div>
                    </>

                ) : (
                    <div className="text-Light-Grayish-Blue">No tasks</div>
                )
            }
            <div className="flex gap-3 justify-center bg-white dark:bg-Very-Dark-Grayish-Blue py-3 px-4 rounded-md mt-7 text-Dark-Grayish-Blue">
                <button value='all' className={setTextColorByFilter("all")} onClick={(e) => filterList(e)}>All</button>
                <button value='active' className={setTextColorByFilter("active")} onClick={(e) => filterList(e)}>Active</button>
                <button value='completed' className={setTextColorByFilter("completed")} onClick={(e) => filterList(e)}>Completed</button>
            </div>

        </div>
    )
}