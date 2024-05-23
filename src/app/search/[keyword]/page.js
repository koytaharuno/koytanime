import AnimeList from "@/components/animelist/main";
import Header from "@/components/animelist/header";

const Page = async ({ params }) => {
    const keyword = params.keyword
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}anime?q=${keyword}`)
    const searchAnime = await response.json()

    return (
        <>
            <section>
                <Header title={`Pencarian untuk ${keyword}`} />
                <AnimeList api={searchAnime} />
            </section>
        </>
    )
}

export default Page