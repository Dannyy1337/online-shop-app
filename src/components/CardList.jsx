import React, { useState } from 'react';
import '../style/CardList.css'
import Card from './Card';
import Modal from './modal/Modal';

const CardList = ({ cards, setModal, modal, ...props }) => {



    if (!cards.length) {
        return (<h1>No cards</h1>)
    }

    return (
        <div className='container'>

            <div className="main">
                <Modal />
                {cards.map(card => <Card card={card} key={card.id} setModal={setModal} modal={modal} />)}
            </div>

        </div>
    );
};

export default CardList;