import React from 'react';
import '../style/Card.css'
import Button from '../UI/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { backetData } from '../data/backet';
import Modal from './modal/Modal';

const Card = (props) => {
    let navigate = useNavigate()

    const goModelPage = () => {
        navigate(`/${props.card.model}`)
    }

    function addToBacket() {
        backetData.push(props.card)
        console.log(backetData)
    }


    return (
        <div className='card'>
            <h1 className='card__item'>img</h1>
            <h2 className='card__item'>{props.card.title}</h2>
            <h3 className='card__item'>{props.card.price}</h3>

            <Button onClick={addToBacket}> send to b</Button>
            <Button onClick={() => props.setModal(true)}>test</Button>

            <Modal visible={props.modal} setVisible={props.setModal}>
                <div className="basket__modal">
                    <h2>Your order:</h2><br />
                    {backetData.map(basket_item =>
                        <div className="basket__items" key={basket_item.id}>
                            <p>{basket_item.title}</p>
                            <p>{basket_item.price}</p>
                        </div>
                    )}
                </div>
                <Button onClick={() => props.setModal(false)}>close</Button>
                <Link to='/paymond' backetData={backetData}>pay</Link>
            </Modal>
            <Button onClick={goModelPage}>
                model
            </Button>
            <h4 className='card__item'>{props.card.desc}</h4>
            <p>{props.card.id}</p>
        </div>
    );
};

export default Card;