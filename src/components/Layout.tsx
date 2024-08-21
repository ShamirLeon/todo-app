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
        <div className="relative min-h-screen py-8 md:py-24 bg-[#f6f6f8] dark:bg-Very-Dark-Blue transition-colors overflow-hidden">
            <div className="absolute w-full top-0 aspect-[15/8] md:aspect-[48/10] lg:aspect-[48/10] xl:aspect-[48/10] 2xl:aspect-[48/10]">
                <img
                    key={imageSrc}
                    src={imageSrc}
                    className="w-full absolute top-0 z-30 transition-opacity duration-1000 ease-in-out opacity-0 animate-fadeIn"
                    onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                />
                <div className={`absolute top-0 w-full h-full bg-gradient-to-t dark:from-Very-Dark-Blue from-[#f6f6f8] to-transparent z-40 transition-colors`}></div>
            </div>
            <div className="relative container mx-auto px-4 z-50 md:max-w-[800px]">
                {children}
            </div>
        </div>
    )
}