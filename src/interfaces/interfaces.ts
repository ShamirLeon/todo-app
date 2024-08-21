export interface ITodo {
    id: number;
    title: string;
    completed: boolean;
}

export interface IToDoContext {
    /* STATES */
    toDoList: ITodo[];
    styleMode: 'light' | 'dark';
    filter: 'all' | 'active' | 'completed';
    /* FUNCTIONS */
    addTodo: (todo: ITodo) => void;
    removeTodo: (id?: number) => void;
    toggleStyleMode: () => void;
    toggleTodoCompleted: (id?: number) => void;
    clearCompleted: () => void;
    filterToDoList: ({ filter }: { filter: 'all' | 'active' | 'completed' }) =>void;
}
export enum Breakpoints {
    mobile = '425',
    desktop = '1440',
}

export interface IInput {
    isReadOnly?: boolean;
    toDo?: ITodo;
}