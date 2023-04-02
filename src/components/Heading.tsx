import { useState, FC } from "react"
import { useEffect } from "react"

import { Link } from "react-router-dom";

import { ReactComponent as Arrow } from '../assets/arrow.svg'

import { IHeading } from "../modules";

const Heading: FC<IHeading> = (props: IHeading) => {
	const [asideOpen, setAsideOpen] = useState(false);
	const [pulledOpen, setPulledOpen] = useState(false);

	let aside = document.getElementsByTagName('aside');

	function displayAside(event: React.MouseEvent) {
		const button = event.target as HTMLElement

		if (!asideOpen) {
			setAsideOpen(true);
			aside[0].classList.add('active-aside');
			button.classList.add('burger-active');
		} else {
			setAsideOpen(false);
			aside[0].classList.remove('active-aside');
			button.classList.remove('burger-active');
		}
	}

	useEffect(() => {
		document.body.addEventListener('mouseup', (event: MouseEvent) => {
			if (window.screen.width <= 992) {
			const pathAside = event.composedPath().includes(document.getElementsByClassName('aside-bar')[0]);
			const pathClose = event.composedPath().includes(document.getElementsByClassName('burger')[0]);
			const pathNav = event.composedPath().includes(document.getElementsByClassName('flex-nav')[0]);
			const pathPulled = event.composedPath().includes(document.getElementsByClassName('pulled-in-heading')[0]);
			
			const targ = event.target as HTMLElement
		
			if ((!pathClose && !pathAside) || targ.className === 'link-route') {
				setAsideOpen(false);
				document.getElementsByClassName('aside-bar')[0].classList.remove('active-aside');
				document.getElementsByClassName('burger')[0].classList.remove('burger-active');
			}  
			if (!pathNav && !pathPulled) { 
				setPulledOpen(false);
				const arrowPulled = document.getElementsByClassName('arrow-pulled') as HTMLCollectionOf<HTMLElement>

				arrowPulled[0].style.transform = 'rotate(-90deg)'
			}
		}});
	})

	function displayPulled() {
		const arrowPulled = document.getElementsByClassName('arrow-pulled') as HTMLCollectionOf<HTMLElement>

		if (!pulledOpen) {
			setPulledOpen(true)
			arrowPulled[0].style.transform = 'rotate(0)'
		} else {
			setPulledOpen(false)
			arrowPulled[0].style.transform = 'rotate(-90deg)'
		}
	}

	return (
		<header>
			<button name="button" className='burger' onClick={(event: React.MouseEvent) => {
				displayAside(event)
				event.preventDefault()
			}} >
				<span className='burger-inner'></span>
			</button>
			<span className="pulled-in-heading" onClick={displayPulled}>Основне<Arrow className='arrow-pulled' /></span>
			<nav className={pulledOpen ? 'flex-nav' : 'header-nav'}>
				<span><Link className="link-route" to="/ReactMAN/news">новини</Link></span>
				<span><Link className="link-route" to="/ReactMAN/faq">faq</Link></span>
				<span><Link className="link-route" to="/ReactMAN/contacts">контакти</Link></span>
			</nav>
			{props.children}
		</header>
	)
}

export default Heading
