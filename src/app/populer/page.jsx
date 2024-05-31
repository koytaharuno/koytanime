"use client"

import AnimeList from "@/components/animelist/main"
import HeaderMenu from "@/components/utilities/headermenu"
import Pagination from "@/components/utilities/pagination"
import { useEffect, useState } from "react"
import { getAnimeResponse } from "../../libs/api"

const Page = () => {
    const [page, setPage] = useState(1)
    const [populerAnime, setPopulerAnime] = useState([])

    const fetchData = async () => {
        const populer = await getAnimeResponse("top/anime", `page=${page}`)
        setPopulerAnime(populer)
    }

    useEffect(() => {
        fetchData()
    }, [page])

    return (
        <>
            <HeaderMenu
                title={`Anime Terpopuler #${page}`}
            />
            <AnimeList
                api={populerAnime}
            />
            <Pagination
                page={page}
                lastPage={populerAnime.pagination?.last_visible_page}
                setPage={setPage}
            />
        </>
    )
}

export default Page