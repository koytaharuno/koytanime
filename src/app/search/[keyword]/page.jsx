import AnimeList from "@/components/animelist/main";
import Header from "@/components/animelist/header";
import { getAnimeResponse } from "@/libs/api";

const Page = async ({ params }) => {
    const { keyword } = params
    const decodeKeyword = decodeURI(keyword)
    const search = await getAnimeResponse("anime", `q=${decodeKeyword}`)

    return (
        <>
            <section>
                <Header
                    title={`Pencarian untuk ${decodeKeyword}...`}
                />
                <AnimeList
                    api={search}
                />
            </section>
        </>
    )
}

export default Page