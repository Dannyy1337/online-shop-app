import React, { useState } from 'react'
import CardFilter from '../components/CardFilter';
import CardList from '../components/CardList';
import Modal from '../components/modal/Modal';
import { cardsList } from '../data/cards';
import { useCards } from '../hooks/useCards';
import '../style/App.css'
import Button from '../UI/button/Button';

function MainPage() {
    const [cards, setCards] = useState(cardsList)
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const sortedAndSearchedCards = useCards(cards, filter.sort, filter.query)

    return (
        <div className="App">
            
            <CardFilter filter={filter} setFilter={setFilter} />
            <CardList cards={sortedAndSearchedCards} setModal={setModal} modal={modal}/>


        </div>
    );
}

export default MainPage;
