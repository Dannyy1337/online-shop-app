import React from 'react';
import '../style/Card.css'
import Button from '../UI/button/Button';

const Card = (props) => {
    return (
        <div className='card'>
            <h1 className='card__item'>img</h1>
            <h2 className='card__item'>{props.card.title}</h2>
            <h3 className='card__item'>{props.card.price}</h3>
            <Button disabled>view more</Button>
            <h4 className='card__item'>{props.card.desc}</h4>
            <p>{props.card.id}</p>
        </div>
    );
};

export default Card;