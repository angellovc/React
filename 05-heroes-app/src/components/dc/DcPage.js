import React from 'react';
import HeroesList from '../heroes/HeroesList';

const DcPage = () => {
    return (
        <div>
            <h2>DC</h2>
            <hr />
            <HeroesList publisher="DC Comics" />
        </div>
    )
}

export default DcPage
