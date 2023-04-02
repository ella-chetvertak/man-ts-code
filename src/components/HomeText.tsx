import React, { FC } from 'react'
import { Link } from "react-router-dom";

import { ICard } from '../modules';

const Card: FC<ICard> = (props: ICard) => {
	return (
		<div className='home-card'>
			<span>{props.spanText}</span>
			<Link className="link-route" to={{pathname: `${props.linkTo}`}}>{props.spanTextTwo}</Link>
		</div>
	)
}

const HomeText: FC = () => {
	return (
		<React.Fragment>
			<div className='home-text-div'>
				<h2>Отримувати знання - ще легше!</h2>
				<h3>Початок твоєї подорожі:</h3>
				<div className='home-card-div'>
					<Card spanText='Інформатика' spanTextTwo='Середовище табличного процесора' linkTo='excel-begin' ></Card>
					<Card spanText='Інформатика' spanTextTwo='Робота з табличними даними' linkTo='excel-data' ></Card>
				</div>
			</div>
		</React.Fragment>
	)
}

export default HomeText