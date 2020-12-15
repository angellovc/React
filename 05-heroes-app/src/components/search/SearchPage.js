import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

const SearchPage = ({history}) => {
    const location = useLocation();
    const {q:query = ''} = queryString.parse(location.search);
    const [formState, setFormState, resetForm] = useForm({
         superHero: ''
     });
    const {superHero} = formState;
    const heroesFiltered = useMemo(() => getHeroesByName(query), [query])
    const handlerSearch = (event) => {
        event.preventDefault();
        history.push(`?q=${superHero}`);
        resetForm();
    }
    return (
        <div>
            <h2>Search Page</h2>
            <hr />
            <div className="row">
                <div className="col-4">
                    <h4>Search form</h4>
                    <hr />
                    <form onSubmit={handlerSearch} >
                        <input
                            type="text"
                            name="superHero"
                            value={superHero}
                            autoComplete="off"
                            placeholder="Find your hero"
                            className="form-control"
                            onChange={setFormState}
                        />
                        <button
                            type="submit"
                            className="btn mt-1 btn-block btn-outline-primary"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-8">
                    <h4>Results</h4>
                    
                    {
                        heroesFiltered.length === 0?
                            (
                                <div
                                    className="alert alert-info text-center"
                                >
                                    Hero was not found
                                </div>
                            ):
                            (
                                heroesFiltered.map(hero => <HeroCard key={hero.id} {...hero} />)
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchPage
