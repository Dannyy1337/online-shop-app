import React from 'react';
import '../style/Card.scss'
import Button from '../UI/button/Button';
import { Link, useNavigate } from 'react-router-dom';
import { backetData } from '../data/backet';
import Modal from './modal/Modal';
import { models } from '../data/models';

const Card = (props) => {
    let navigate = useNavigate()

    const goModelPage = () => {
        navigate(`/${props.card.model}`)
    }

    function addToBacket() {
        backetData.push(props.card)
        alert(`Canvas "${props.card.title}" add to your order.`)
        console.log(backetData)

    }


    return (
        <div className='card'>
            <img className='card__img' src={require(`../assets/card_img/${props.card.img}.png`)} alt="" />
            <div className="sector">
                <h2 className='card__item'>Canvas <br /> <span className='card__item-title'>"{props.card.title}"</span></h2>
                <div className='card__sec'>
                    <button className='card__btn-model' onClick={goModelPage}>
                        {props.card.model}
                    </button>
                    <h3 className='card__item'>{props.card.price}</h3>
                </div>

                <p className='card__item'>{props.card.desc}</p>
                <button className='card__btn-buy' onClick={addToBacket}>BUY</button>
            </div>

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
                <Link to='/main/paymend' backetData={backetData}>pay</Link>
            </Modal>

        </div>
    );
};

export default Card;