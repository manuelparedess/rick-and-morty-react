export const getEpisodes = async ({ params }) => {
    const res = await fetch(`https://rickandmortyapi.com/api/episode?page=${params.page}`);
    const data = await res.json();

    return {
        episodes: data.results,
        info: data.info
    };
}