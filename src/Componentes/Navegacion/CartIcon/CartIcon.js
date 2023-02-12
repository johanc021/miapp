import React from 'react';
import { BsCart3 } from "react-icons/bs";

const CartIcon = () => {
	return (
		<div style={{ display: 'inline-block' }}>
			<BsCart3 style={{ fontSize: '25px' }} />
			<span style={{
				position: 'relative',
				top: '-12px',
				left: '-5px',
				background: 'red',
				color: 'white',
				borderRadius: '25%',
				width: '25px',
				height: '25px',
				textAlign: 'center',
				fontSize: '17px'
			}}>3</span>
		</div>
	);
};

export default CartIcon;