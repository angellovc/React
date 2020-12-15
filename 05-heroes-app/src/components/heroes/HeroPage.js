import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

const HeroPage = ({history}) => {
    const {heroId} = useParams();
    const hero = useMemo(() => getHeroById(heroId), [heroId]);
    if (!hero) {
        return <Redirect to="/" />
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;
    const handleReturn = () => {
        /* If the user have entered directly in this page of the application
        using a hyper link, for example, there wont be a node in the history
        behind this page, so executing goBack() will cause the appplication exit,
        to avoid that, the publisher variable is used to redirect the page to the 
        the page where the character came once the history does not have much more
        nodes on behind */
        if (history.length <= 2) {
            const page = publisher.split(' ');
            history.push(`/${page[0].toLocaleLowerCase()}`);
        } else {
            history.goBack();
        }
    }
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`../assets/heroes/${heroId}.jpg`}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={superhero}
                />
            </div>
            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego:</b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearance:</b>{first_appearance}</li>
                </ul>
                <div className="container mt-3">
                    <h5>Characters</h5>
                    <p>{characters}</p>
                    <button 
                        className="btn btn-info"
                        onClick={handleReturn}
                    >
                        Volver
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroPage
