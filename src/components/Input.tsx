/* Imports Context */
import { useContext, useState } from 'react';
import { ToDoContext } from '../context/toDoContext';

/* Imports Images */
import CheckIcon from '../assets/images/icon-check.svg';
import CrossIcon from '../assets/images/icon-cross.svg';

/* Imports Interfaces */
import { IInput } from '../interfaces/interfaces';

export default function Input({ isReadOnly, toDo }: IInput) {
    const checkStyles = "grid place-items-center border border-Light-Grayish-Blue h-[24px] aspect-square rounded-[50%] transition-colors "
    const { addTodo, toDoList, toggleTodoCompleted, removeTodo } = useContext(ToDoContext)
    const currentToDo = toDoList.find(todo => todo.id === toDo?.id)
    const indexCurrentToDO = toDoList.findIndex((todo) => todo?.id === currentToDo?.id)
    const [animationDelay, setAnimationDelay] = useState(indexCurrentToDO * 0.1)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setAnimationDelay(0)
        const input = e.currentTarget[0] as HTMLInputElement
        const newTodo = {
            id: toDoList[toDoList.length - 1]?.id + 1 || 1,
            title: input.value,
            completed: false
        }
        if (input.value.trim() === '') return
        addTodo(newTodo)

        input.value = ''
    }


    const checkRoundedStyle = () => {
        if (!isReadOnly) return 'rounded-md border-none'
        if (indexCurrentToDO == 0) return 'rounded-t-md'
        return ''
    }

    const animateEnter = () => {
        if (isReadOnly) return `animate-enter`
    }

    return (
        <form onSubmit={handleSubmit} >
            <div
                id={`to_do${currentToDo?.id}`}
                className={`flex gap-4 bg-white py-3 px-4 border-b border-b-Very-Light-Grayish-Blue dark:bg-Very-Dark-Grayish-Blue ${isReadOnly ? 'opacity-0' : null} ${checkRoundedStyle()} ${animateEnter()}`}
                style={{ animationDelay: `${animationDelay}s` }}>

                <div onClick={() => toggleTodoCompleted(currentToDo?.id)} className={`${!currentToDo?.completed ? checkStyles : checkStyles + 'bg-gradient-to-r from-custom-start to-custom-end transition-colors'}`}>
                    {
                        currentToDo?.completed && (
                            <img src={CheckIcon} className='aspect-square w-[11px]' />
                        )
                    }
                </div>
                {
                    !isReadOnly ? (
                        <input type="text" placeholder="Create a new todo..." className="w-full bg-transparent text-Very-Dark-Blue dark:text-white outline-none border-none" />
                    ) : (
                        <div className='flex justify-between items-center w-full dark:bg-Very-Dark-Grayish-Blue'>
                            <span className={currentToDo?.completed ? 'line-through text-Light-Grayish-Blue transition-colors' : 'dark:text-white transition-colors'}>{currentToDo?.title}</span>
                            <button onClick={() => removeTodo(currentToDo?.id)}>
                                <img src={CrossIcon} alt=" " className='w-4' />
                            </button>
                        </div>
                    )
                }
            </div>
        </form>
    )
}