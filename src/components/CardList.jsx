import React, { useState } from 'react';
import '../style/CardList.css'
import Card from './Card';
import { cardsList } from '../data/cards.js'
import Modal from './modal/Modal';

const CardList = ({ cards, ...props }) => {

    if (!cards.length) {
        return (<h1>No cards</h1>)
}

    return (
        <div className='wrapper'>

            <div className="main">
                <Modal />
                {cards.map(card => <Card card={card} key={card.id} />)}
            </div>

        </div>
    );
};

export default CardList;