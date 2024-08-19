import { useContext } from "react"
import { ToDoContext } from "../context/toDoContext"

export default function Header() {
    const { styleMode, toggleStyleMode  } = useContext(ToDoContext)
    return (
        <header className="flex justify-between items-center mb-7">
            <h1 className="text-4xl font-bold tracking-[6px] text-white ">TODO</h1>
            <button className="" onClick={() => {
                toggleStyleMode()
            }}>
                <img src={styleMode === 'light' ? "./images/icon-moon.svg" : "./images/icon-sun.svg"} alt="" />
            </button>
        </header>
    )
}