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
        <div className="relative min-h-screen py-8 bg-[#f6f6f8] dark:bg-Very-Dark-Blue">
            <div>
                <img src={`./images/bg-${imageType}-${styleMode}.jpg`} alt="" className="w-full absolute top-0 z-30"/>
                <div className={`absolute top-0 w-full bg-gradient-to-t h-[200px] dark:from-Very-Dark-Blue from-[#f6f6f8] to-transparent z-40`}></div>
            </div>
            <div className="relative container mx-auto px-4 z-50 ">
                {children}
            </div>
        </div>
    )
}