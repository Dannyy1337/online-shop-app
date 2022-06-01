import React from 'react';
import Button from '../UI/button/Button';

const Paymend = (props) => {

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
                <h3 className='total__count'>Total: n$</h3>
            </div>
            <Button>Confirm</Button>
        </div>
    );
};

export default Paymend;