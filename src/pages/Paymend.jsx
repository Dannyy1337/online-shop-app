import React from 'react';
import Button from '../UI/button/Button';

const Paymend = (props) => {

    return (
        <div className='paymend'>
            <form action="">
                <h3>First Name:</h3>
                <input type="text" placeholder='Enter you First Name' />
                <h3>Second Name:</h3>
                <input type="text" placeholder='Enter you Second Name' />
                <h3>Card Information:</h3>
                <input type="text" placeholder='Enter you Card Information' />
            </form>
            <h3>Total:</h3>
            <Button>Confirm</Button>

        </div>
    );
};

export default Paymend;