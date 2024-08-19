export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface IToDoContext {
    toDoList: ITodo[];
    styleMode: 'light' | 'dark';
    addTodo: (todo: ITodo) => void;
    removeTodo: (id?: number) => void;
    toggleStyleMode: () => void;
    toggleTodoCompleted: (id?: number) => void;
    clearCompleted: () => void;
}
export enum Breakpoints {
    mobile = '375',
    desktop = '1440',
}

export interface IInput {
    isReadOnly?: boolean;
    toDo?: ITodo;
}