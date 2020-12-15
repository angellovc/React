import React from 'react';
import { useSelector } from 'react-redux';
import NotePage from '../notes/NotePage';
import NothingSelected from './NothingSelected';
import Sidebar from './Sidebar';

const JournalPage = () => {

    const {active} = useSelector((state) => state.notes);

    return (
        <div
            className="animate__animated animate__fadeIn animate__faster journal__main-content"
        >
            <Sidebar />
            <main>
                {
                    active?
                        <NotePage />:
                        <NothingSelected />
                }
            </main>

        </div>
    )
}

export default JournalPage
