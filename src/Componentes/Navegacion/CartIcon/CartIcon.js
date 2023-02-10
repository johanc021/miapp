import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = () => {
	return (
		<div style={{ display: 'inline-block' }}>
			<FaShoppingCart style={{ fontSize: '30px' }} />
			<span style={{
				position: 'relative',
				top: '-12px',
				left: '-5px',
				background: 'red',
				color: 'white',
				borderRadius: '50%',
				width: '25px',
				height: '25px',
				textAlign: 'center',
				fontSize: '16px'
			}}>3</span>
		</div>
	);
};

export default CartIcon;