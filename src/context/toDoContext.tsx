import { createContext } from "react";
import { IToDoContext } from "../interfaces/interfaces";

const initialContext: IToDoContext = {
    toDoList: [],
    styleMode: 'light',
    filter: 'all',
    addTodo: () => {},
    removeTodo: () => {},
    toggleStyleMode: () => {},
    toggleTodoCompleted: () => {},
    clearCompleted: () => {}
}

export const ToDoContext = createContext<IToDoContext>(initialContext)