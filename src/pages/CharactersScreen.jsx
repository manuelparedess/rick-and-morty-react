
import { useLoaderData, useNavigation} from 'react-router-dom'
import Character from '../components/ux/Character';
import Navigation from '../components/ui/Navigation';

const CharactersScreen = () => {
    const { characters, info } = useLoaderData();
    const { state } = useNavigation();

    return (
        <div className='container mt-3'>
            {
                (state == 'loading') 
                    ? (
                        <div className="spinner d-flex justify-content-center align-items-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )
                    : (
                        <>
                            {/* IMPORTANTE: INCLUIR NAVIGATION MANDAR PAGE POR PARAMETROS */}
                            <Navigation info={info} tab={'characters'} />
                            <div className="row d-flex justify-content-center">
                                {
                                    characters.map((item) => <Character data={item} key={item.id} />)
                                }
                            </div>
                        </>
                    )

            }
        </div>
    )
}

export default CharactersScreen