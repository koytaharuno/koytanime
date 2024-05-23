"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${searchRef.current.value}`)
        }
    }

    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search"
                className="p-2 rounded-md w-full"
                ref={searchRef}
                onKeyDown={handleSearch}
            />
            <button className="absolute top-2 end-4" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch