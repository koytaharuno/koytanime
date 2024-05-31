import Link from "next/link"
import InputSearch from "./inputsearch"
import UserActionButton from "./user"

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col justify-between p-4 gap-2 md:items-center">
                <Link href="/" className="font-bold text-2xl">KoytAnimeList</Link>
                <InputSearch />
                <UserActionButton />
            </div>
        </header>
    )
}

export default Navbar