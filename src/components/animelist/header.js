import Link from "next/link"

const Header = ({ title, linkHref, linkTitle }) => {
    return (
        <div className="p-4 flex justify-between items-center">
            <h1 className="md:text-2xl text-xl font-bold text-color-primary">{title}</h1>
            {
                linkHref && linkTitle
                    ?
                    <Link href={linkHref} className="text-blue-500 underline md:text-xl text-sm text-color-primary hover:text-color-accent">{linkTitle}</Link>
                    :
                    null
            }
        </div>
    )
}

export default Header