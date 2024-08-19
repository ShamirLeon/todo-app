/* General imports */
import { useContext } from "react"

/* Context Imports */
import { ToDoContext } from "../context/toDoContext"

/* Interfaces Imports */
import { Breakpoints } from "../interfaces/interfaces"

export default function Layout({ children }: { children: React.ReactNode }) {
    const { styleMode } = useContext(ToDoContext)   
    const imageType = window.innerWidth > parseInt(Breakpoints.mobile) ? 'desktop' : 'mobile'

    return (
        <div className="relative min-h-screen py-8">
            <img src={`./images/bg-${imageType}-${styleMode}.jpg`} alt="" className="w-full absolute z-[-1] top-0"/>
            <div className="container mx-auto  px-4">
                {children}
            </div>
        </div>
    )
}