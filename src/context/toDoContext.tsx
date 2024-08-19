import { createContext } from "react";
import { IToDoContext } from "../interfaces/interfaces";

const initialContext: IToDoContext = {
    toDoList: [],
    addTodo: () => {},
    removeTodo: () => {},
    toggleStyleMode: () => {},
    styleMode: 'light',
    toggleTodoCompleted: () => {},
    clearCompleted: () => {}
}

export const ToDoContext = createContext<IToDoContext>(initialContext)