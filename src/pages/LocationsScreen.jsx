import React from 'react'
import { useLoaderData, useNavigation} from 'react-router-dom'
import Navigation from '../components/ui/Navigation';
import Location from '../components/ux/Location';

const LocationsScreen = () => {
    const { locations, info } = useLoaderData();
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
                            <Navigation info={info} tab={'locations'} />
                            <div className="row d-flex justify-content-center">
                                {
                                    locations.map((item) => <Location data={item} key={item.id} />)
                                }
                            </div>
                        </>
                    )

            }
        </div>
    )
}

export default LocationsScreen;