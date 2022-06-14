import React from 'react';
import Button from '../UI/button/Button';
import { backetData } from '../data/backet'

const Paymend = (props) => {

    const basket = backetData

    console.log(basket)

    function clearBasket() {
        window.location.reload(false);
    }

    return (
        <div className='paymend'>
            <div className="paymend__sector">
                <div className="paymend__sector-forms">
                    <form action="">
                        <h3>First Name:</h3>
                        <input type="text" placeholder='Enter you First Name' />
                    </form>
                    <form>
                        <h3>Second Name:</h3>
                        <input type="text" placeholder='Enter you Second Name' />
                    </form>
                    <form action="">
                        <h3>Card Information:</h3>
                        <input type="text" placeholder='Enter you Card Information' />
                    </form>
                </div>
                <h3 className='total__count'>Total: {basket.reduce((prev, current) => {
                    return prev + parseInt(current.price)
                }, 0)}$</h3>
            </div>
            <Button onClick={clearBasket}>Confirm</Button>
        </div>
    );
};

export default Paymend;