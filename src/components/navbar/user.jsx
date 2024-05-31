import Link from "next/link"
import { authUserSession } from "@/libs/auth"

const UserActionButton = async () => {
    const user = await authUserSession()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

    return (
        <div className="flex gap-2 justify-between">
            {
                user ? <Link href="/user/dashboard" className="text-color-dark py-1">Dashboard</Link> : null
            }
            <Link href={actionURL} className="text-color-accent bg-color-dark py-1 px-7 rounded">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton