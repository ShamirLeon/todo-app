import { useContext } from "react"

import { ToDoContext } from "../context/toDoContext"
import Input from "./Input"

export default function ToDoList() {

    const { toDoList, clearCompleted } = useContext(ToDoContext)
    const remainingTasks = toDoList.filter((todo) => !todo.completed).length

    return (
        <div>
            {
                toDoList.map((todo) => {
                    return (
                        <Input key={todo.id} isReadOnly toDo={todo} />
                    )
                })
            }
            {
                toDoList.length ? (
                    <div className="flex justify-between text-Light-Grayish-Blue">
                        <span>{remainingTasks} items left</span>
                        <button onClick={() => clearCompleted()}>Clear completed</button>
                    </div>
                ) : (
                    <div className="text-Light-Grayish-Blue">No tasks</div>
                )
            }

        </div>
    )
}