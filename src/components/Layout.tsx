/* General imports */
import { useContext, useEffect, useState } from "react"

/* Context Imports */
import { ToDoContext } from "../context/toDoContext"

/* Interfaces Imports */
import { Breakpoints } from "../interfaces/interfaces"

export default function Layout({ children }: { children: React.ReactNode }) {
    const { styleMode } = useContext(ToDoContext)
    const [imageSrc, setImageSrc] = useState('')
    const imageType = window.innerWidth > parseInt(Breakpoints.mobile) ? 'desktop' : 'mobile'

    useEffect(() => {
        const newImageSrc = `./images/bg-${imageType}-${styleMode}.jpg`
        setImageSrc(newImageSrc)
    }, [styleMode, imageType])

    return (
        <div className="relative min-h-screen py-8 bg-[#f6f6f8] dark:bg-Very-Dark-Blue transition-colors">
            <div >
                <img
                    key={imageSrc}
                    src={imageSrc}
                    className="w-full absolute top-0 z-30 transition-opacity duration-1000 ease-in-out opacity-0 animate-fadeIn"
                    onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                />
                <div className={`absolute top-0 w-full bg-gradient-to-t h-[200px] dark:from-Very-Dark-Blue from-[#f6f6f8] to-transparent z-40 transition-colors`}></div>
            </div>
            <div className="relative container mx-auto px-4 z-50 ">
                {children}
            </div>
        </div>
    )
}