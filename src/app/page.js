import AnimeList from "@/components/animelist/main";
import Header from "@/components/animelist/header";

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}top/anime?limit=8`)
  const populerAnime = await response.json()

  return (
    <>
      {/* Populer Anime */}
      <section>
        <Header
          title="Populer Anime"
          linkTitle="See More"
          linkHref="/populer"
        />
        <AnimeList api={populerAnime} />
      </section>
    </>
  )
}

export default Page