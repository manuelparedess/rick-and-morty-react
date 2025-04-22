export const getLocations = async ({ params }) => {
    const res = await fetch(`https://rickandmortyapi.com/api/location?page=${params.page}`);
    const data = await res.json();

    return {
        locations: data.results,
        info: data.info
    };
}