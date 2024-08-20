/* Imports Context */
import { useContext } from 'react';
import { ToDoContext } from '../context/toDoContext';

/* Imports Images */
import CheckIcon from '../assets/images/icon-check.svg';
import CrossIcon from '../assets/images/icon-cross.svg';

/* Imports Interfaces */
import { IInput } from '../interfaces/interfaces';

export default function Input({ isReadOnly, toDo }: IInput) {
    const checkStyles = "grid place-items-center border border-Light-Grayish-Blue h-[24px] aspect-square rounded-[50%] transition-colors "
    const { addTodo, toDoList, toggleTodoCompleted, removeTodo } = useContext(ToDoContext)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const input = e.currentTarget[0] as HTMLInputElement
        const newTodo = {
            id: toDoList.length + 1,
            title: input.value,
            completed: false
        }
        if (input.value.trim() === '') return
        addTodo(newTodo)

        input.value = ''
    }

    const currentToDo = toDoList.find(todo => todo.id === toDo?.id)

    const checkRoundedStyle = () => {
        if (!isReadOnly) return 'rounded-md border-none'
        if(toDoList.findIndex((todo) => todo?.id === currentToDo?.id ) == 0)  return 'rounded-t-md'
       }

    return (
        <form onSubmit={handleSubmit} >
            <div className={`flex gap-4 bg-white py-3 px-4 border-b border-b-Very-Light-Grayish-Blue dark:bg-Very-Dark-Grayish-Blue ${checkRoundedStyle()}`}>
                <div onClick={() => toggleTodoCompleted(currentToDo?.id)} className={`${!currentToDo?.completed ? checkStyles : checkStyles + 'bg-gradient-to-r from-custom-start to-custom-end transition-colors'}`}>
                    {
                        currentToDo?.completed && (
                            <img src={CheckIcon} alt="" className='aspect-square w-[11px]' />
                        )
                    }
                </div>
                {
                    !isReadOnly ? (
                        <input type="text" placeholder="Create a new todo..." className="w-full bg-transparent text-Very-Dark-Blue dark:text-white outline-none border-none" />
                    ) : (
                        <div className='flex justify-between items-center w-full dark:bg-Very-Dark-Grayish-Blue'>
                            <span className={currentToDo?.completed ? 'line-through text-Light-Grayish-Blue' : 'dark:text-white'}>{currentToDo?.title} {currentToDo?.id}</span>
                            <button onClick={()=> removeTodo(currentToDo?.id)}>
                                <img src={CrossIcon} alt=" " className='w-4' /> 
                            </button>
                        </div>
                    )
                }
            </div>
        </form>
    )
}