import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Navigation = ({ info, tab }) => {
    const { page } = useParams();

    return (
        <div className='d-flex'>
                {
                    (info.prev == null) ? '' : (<Link className='btn btn-outline-danger d-flex align-items-center rounded-circle' to={`/${tab}/${parseInt(page) - 1}`}>{'<'}</Link>)
                }
                <div className="btn-group mx-auto" role="group" aria-label="Basic example">
                    <Link className="btn btn-primary" to={`/${tab}/1`}>1</Link>
                    <Link className="btn btn-primary" to={`/${tab}/2`}>2</Link>
                    <Link className="btn btn-primary" to={`/${tab}/3`}>3</Link>
                    {
                        (tab !== 'episodes')
                            ? (
                                <>
                                    <p className="btn btn-primary disabled m-0 px-3 py-0">...</p>
                                    <Link className="btn btn-primary" to={`/${tab}/${info.pages}`}>{`${info.pages}`}</Link>
                                </>
                            )
                            : ''
                    }
                </div>
                {
                    (info.next == null) ? '' : (<Link className='btn btn-outline-success d-flex align-items-center rounded-circle' to={`/${tab}/${parseInt(page) + 1}`}>{'>'}</Link>)
                }
            </div>
    )
}

export default Navigation