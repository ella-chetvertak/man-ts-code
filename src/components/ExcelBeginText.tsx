import React, { FC } from "react"
import { Link } from "react-router-dom";

import tableInfo from '../assets/tableInfo.png'
import googleSheets from '../assets/googleSheets.png'
import howToOpen from '../assets/howToOpen.png'
import howLooks from '../assets/howLooks.png'
import howLooksBlank from '../assets/howLooksBlank.png'
import ConnectedCell from '../assets/connected.png'
import IncoherentCell from '../assets/incoherent.png'
import HighlightAll from '../assets/highlightAll.png'
import SaveDoc from '../assets/saveDoc.png'
import Browse from '../assets/browse.png'
import BackButton from '../assets/backButton.png'

import { ReactComponent as Arrow } from '../assets/arrow.svg'

window.addEventListener('scroll', function(e) {
	const arrowPulled = document.querySelector('.scroll-up-down')

    if (window.pageYOffset > 70) {
		arrowPulled?.classList.add('show')
    } else {
		arrowPulled?.classList.remove('show')
	}
});

const ExcelBeginText: FC = () => {
	function scrolled() {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	}

	return (
		<div className="justify-column-div unmargin">
			<h2>Електронні таблиці</h2>

			<p>Нині для роботи з даними часто застосовують електронні таблиці.</p>
			<p className="key-info">Електронна таблиця — це комп’ютерне подання прямокутної 
			таблиці, клітинки якої можуть містити дані або формули 
			опрацювання даних</p>

			<p>Розбір електронної таблиці (рис. 1.1)</p>
			<div className="image-table-wrapper">
				<img alt="table-info" src={tableInfo} />
				<p>Рис. 1.1</p>
			</div>

			<p className="border-top-p">З клітинок формуються рядки і стовпці електронної таблиці. Іноді 
			електронною таблицею називають програму, призначену для опрацювання ЕТ. Ми називатимемо її табличним процесором.</p>
			<p className="key-info">Табличний процесор — прикладна програма для опрацювання 
			даних, поданих в електронних таблицях.</p>
			<p>Існують різні табличні процесори. Одним із них є табличний процесор Microsoft Excel (рис. 18.2, далі — Excel), який 
			входить до складу комерційного пакета Microsoft Office. Учні 
			та вчителі можуть безкоштовно користуватися табличним 
			процесором у складі пакета програм Office 365.</p>
			<p className="border-left-p width-75">Завдяки відомим вам хмарним технологіям 
			із ЕТ можна працювати в онлайн-режимі, 
			створивши на Google Диску Google-таблицю 
			(рис. 18.3). Користування Google-таблицею 
			є безкоштовним і не потребує додаткового 
			програмного забезпечення. Не викликає 
			проблем копіювання чи переміщення даних із комп’ютерних таблиць до хмарних 
			Google-таблиць і навпаки.</p>

			<p>Google Sheets (рис. 1.2)</p>
			<div className="image-table-wrapper middle-img">
				<img alt="google-sheets" src={googleSheets} />
				<p>Рис. 1.2</p>
			</div>

			<h2>Запуск Excel і створення документа</h2>
			<p>Для запуску Excel в ОС Windows 10 потрібно клацнути: Пошук → набрати 'Excel' → Відкрити Excel.</p>
			<p>Щоб швидко запустити програми, слід розмістити ярлики 
			Microsoft Excel безпосередньо в меню Пуск, на панелі завдань або на робочому столі командами контекстного меню програми.</p>

			<div className="image-table-wrapper">
				<img alt="how to open excel" src={howToOpen} />
				<p>Рис. 1.3</p>
			</div>

			<p>Версії Excel від 2010 до 2019 року випуску різняться незначно. 
			Навчившись користуватись Excel 
			2013, ви орієнтуватиметесь і в решті версій. 
			Після запуску Excel на екрані 
			з’являється перелік останніх документів і вікно онлайн-пошуку 
			шаблонів (рис. 1.4).</p>

			<div className="image-table-wrapper">
				<img alt="how excel looks" src={howLooks} />
				<p>Рис. 1.4</p>
			</div>

			<p>Знайшовши потрібний шаблон, можна відкрити заповнений вибраними даними документ.</p>
			<p>Для створення документа з порожньою таблицею після запуску 
			Excel потрібно клацнути зображення з написом Нова книга (Blank workbook). Після цього 
			відкриється вікно програми (рис. 1.5).</p>

			<div className="image-table-wrapper">
				<img alt="how blank worbook looks" src={howLooksBlank} />
				<p>Рис. 1.5</p>
			</div>

			<h2>Інтерфейс користувача</h2>

			<p>Інтерфейс Excel подібний до інтерфейсу програм Word та PowerPoint. Пригадаємо відомі вам загальні елементи вікна офісних програм (рис. 1.5):</p>
			<ul className="border-left-p">
				<li>2 — вкладка Файл (Офіс);</li>
				<li>4 — панель швидкого доступу;</li>
				<li>8 — стрічка інструментів;</li>
				<li>10 — меню вкладок;</li>
				<li>12 — група інструментів;</li>
				<li>13 — рядок заголовка;</li>
				<li>15 — кнопка довідки;</li>
				<li>16 — кнопки керування вікном;</li>
				<li>17, 23 — смуги вертикального та горизонтального прокручування;</li>
				<li>22 — рядок стану;</li>
				<li>24 — кнопки режиму перегляду;</li>
				<li>25 — елементи масштабування.</li>
			</ul>
			<p>Вікно містить також специфічні елементи, притаманні лише Excel:</p>
			<ul className="border-left-p">
				<li>1 — номери рядків, позначені натуральними числами;</li>
				<li>11 — заголовки (номери) стовпців, позначені зазвичай однією або кількома латинськими літерами;</li>
				<li>20 — вкладка аркуша; вкладок може бути кілька; </li>
				<li>21 — кнопка створення нового аркуша.</li>
			</ul>
			<p>Про інші об’єкти ЕТ йтиметься далі.</p>

			<h2>Робота з об’єктами електронної таблиці</h2>
			<p>Об’єктами ЕТ є клітинка, діапазон, рядок, стовпець, аркуш, книга тощо. З ними можна виконувати низку операцій: редагування, форматування, копіювання, видалення тощо.</p>

			<h3 className="bold">Виділення клітинок і діапазонів клітинок</h3>
			<p className="border-left-p">Перед початком роботи з необхідним об’єктом ЕТ його потрібно виділити.</p>
			<p>Виділення клітинки найчастіше здійснюється одинарним (для 
			уведення даних чи форматування) або подвійним (для редагування 
			наявних даних) клацанням або введенням адреси чи імені клітинки 
			в поле Ім’я (рис. 1.5 позначка 18, про це — далі).</p>
			<p>Якщо потрібно опрацьовувати дані кількох клітинок одночасно, 
			то працюють із діапазоном.</p>

			<p className="key-info">Діапазон — це сукупність клітинок, які можна опрацьовувати 
			як єдине ціле.</p>
			<p>Розрізняють зв’язні й незв’язні діапазони.</p>
			<p><span className="bold">Зв’язним</span> називають прямокутний діапазон, який можна виділити 
			переміщенням вказівника з натиснутою лівою кнопкою миші (далі — 
			ЛКМ). Щоб <span className="bold">виділити прямокутний діапазон</span>, потрібно перетягнути вказівник від однієї кутової клітинки до діагонально протилежної або ж 
			клацнути кутову клітинку, а потім із натиснутою клавішею Shift — 
			діагонально протилежну. Виділений діапазон позначається сірим кольором, окрім клітинки, з якої почалося виділення (рис. 1.6).</p>
			<p><span className="bold">Незв’язним</span> називають діапазон, який складається з кількох діапазонів і/або клітинок. Щоб <span className="bold">виділити незв’язний діапазон</span>, потрібно, 
			утримуючи клавішу Ctrl, виділити кілька клітинок і/або зв’язних діапазонів (рис. 1.7).</p>
			<p>Для <span className="bold">зняття виділення діапазону</span> клітинок достатньо клацнути на 
			будь-якій клітинці ЕТ.</p>

			<div className="image-table-wrapper display-flex-img">
				<div className="margin-right-div" >
					<img alt="connected cell" src={ConnectedCell}/>
					<p>Рис. 1.6</p>
				</div>
				<div>
					<img alt="incoherent cell" src={IncoherentCell}/>
					<p>Рис. 1.7</p>
				</div>
			</div>

			<p className="border-left-p">Виділення рядків і стовпців</p>
			<p>Для <span className="bold">виділення одного рядка 
			(стовпця)</span> потрібно клацнути на його 
			заголовку (номері).</p>
			<p><span className="bold">Декілька суміжних рядків (стовпців) виділяють</span> перетягуванням вказівника по їхніх заголовках (номерах). Під 
			час виділення у сірому прямокутнику 
			зазначається кількість рядків — R 
			і стовпців — С, що входять до виділеного діапазону (рис. 18.9).</p>
			<p>Для виділення усієї ЕТ потрібно у лівому верхньому кутку таблиці 
			клацнути значок <img alt="highight all" src={HighlightAll}/> або натиснути сполучення клавіш Ctrl + A.</p>

			<h2>Збереження таблиці</h2>
			<p>Як і інші документи, ЕТ для подальшого використання слід зберегти. Для цього потрібно виконати знайомі вам дії.</p>
			<ol>
				<li>На панелі швидкого доступу клацнути значок Зберегти <img alt="save the document" src={SaveDoc}/> або на вкладці ФАЙЛ вибрати команду Зберегти (або Зберегти як...).</li>
				<li>Зазначити місце збереження — одну з наявних у списку папок 
				або вибрати іншу папку, скориставшись кнопкою <img className="browse-img" alt="browse to save the document" src={Browse}/> Огляд (Browse).</li>
				<li className="kostyl-marker">
					<p>Увести назву файла у поле Ім’я файлу і натиснути кнопку Зберегти.</p>
					<p>Для збереження наявного документа в іншу папку та/або з іншим іменем слід вибрати команду Зберегти як...</p>
					<p>Для повернення в режим редагування з будь-якого кроку збереження потрібно натиснути кнопку <img className="small-img" alt="back button from file excel" src={BackButton} /> або клавішу Esc.</p>
				</li>
			</ol>
			<Link className="link-route test-route" to="/ReactMAN/excel-begin-quest"><button className="test-button">Посилання на тест</button></Link>
			<button className="scroll-up-down hide" onClick={scrolled}><Arrow className='arrow-pulled-sec turned' /></button>
		</div>
	)
}

export default ExcelBeginText