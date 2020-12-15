import React from 'react'
import HeroesList from '../heroes/HeroesList'

const MarvelPage = () => {
    return (
        <div>
            <h2>Marvel</h2>
            <hr />
            <HeroesList publisher="Marvel Comics" />           
        </div>
    )
}

export default MarvelPage
