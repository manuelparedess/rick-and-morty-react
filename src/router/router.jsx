import { createBrowserRouter } from "react-router-dom";
import MainScreen from "../pages/MainScreen";
import EpisodesScreen from "../pages/EpisodesScreen";
import CharactersScreen from "../pages/CharactersScreen";
import LocationsScreen from "../pages/LocationsScreen";
import Layout from "../layout/Layout";
import NotFound from "../pages/NotFound";
import { getCharacters } from "../helpers/getCharacters";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <MainScreen />,
            },
            {
                path: '/characters/:page',
                element: <CharactersScreen />,
                loader: getCharacters
            },
            {
                path: '/episodes',
                element: <EpisodesScreen />
            },
            {
                path: '/locations',
                element: <LocationsScreen />
            }
        ]
    }
])