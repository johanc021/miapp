import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import logo from '../Logo/Recurso 1.svg'

const Main = () => (
	<Row className="align-items-center">
		<Col className="text-center">
			<Image
				src={logo}
				style={{ height: '400px', width: '400px' }}
			/>
		</Col>
	</Row>
);

export default Main;
