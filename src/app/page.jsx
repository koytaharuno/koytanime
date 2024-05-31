import AnimeList from "@/components/animelist/main";
import Header from "@/components/animelist/header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=10")
  let recommendedAnime = await getNestedAnimeResponse("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 10)

  return (
    <>
      {/* Populer Anime */}
      <section>
        <Header
          title="Populer Anime"
          linkTitle="See More"
          linkHref="/populer"
        />
        <AnimeList
          api={topAnime}
        />
      </section>
      {/* Populer Anime */}
      <section>
        <Header
          title="Recommendation Anime"
          linkTitle="See More"
          linkHref="/recommendation"
        />
        <AnimeList
          api={recommendedAnime}
        />
      </section>
    </>
  )
}

export default Page