export const getCharacters = async ({ params }) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${params.page}`);
    const data = await res.json();

    return {
        characters: data.results,
        info: data.info
    };
}