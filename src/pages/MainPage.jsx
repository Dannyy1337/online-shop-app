import React, { useState } from 'react'
import CardFilter from '../components/CardFilter';
import CardList from '../components/CardList';
import Modal from '../components/modal/Modal';
import { cardsList } from '../data/cards';
import { useCards } from '../hooks/useCards';
import '../style/App.scss'
import Button from '../UI/button/Button';

function MainPage() {
    const [cards, setCards] = useState(cardsList)
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const sortedAndSearchedCards = useCards(cards, filter.sort, filter.query)

    const topDescription = `"ART DISTRIBUTOR" - a unique online store with high-quality Canvas Prints,
     several varieties of styles and types.
      Artists from all over the world create the best works just for you.
       "YOUR ART ZONE & STORE"®.`

    return (
        <div className="App">
            <div className="clean__sector">
                <span>{topDescription}</span>
            </div>
            <div className="top__sector">
                <h1>Canvas Prints</h1>
            </div>
            <div className="middle__sector">
                <Button onClick={() => { setModal(true); }}>Check Basket</Button>
                <CardFilter filter={filter} setFilter={setFilter} />

            </div>
            <CardList cards={sortedAndSearchedCards} setModal={setModal} modal={modal} />


        </div>
    );
}

export default MainPage;
