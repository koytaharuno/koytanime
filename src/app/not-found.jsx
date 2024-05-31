"use client"

import { FileSearch } from "@phosphor-icons/react"

const NotFound = () => {
    return (
        <div className="flex justify-center items-center min-h-screen gap-1">
            <FileSearch size={27} className="text-color-accent" />
            <h1 className="text-color-accent">Not Found File</h1>
        </div>
    )
}

export default NotFound