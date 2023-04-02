import React, { useEffect, useState, FC } from "react"
import { Link } from "react-router-dom";

import CellsInfo from '../assets/cellsInfo.png'
import CheckedFormulaBar from '../assets/checkedFormulaBar.png' 
import SpeaksOut from '../assets/speaksOut.png'
import RoundedNum from '../assets/roundedNum.png'
import StandartLook from '../assets/standartLook.png'
import GriddedNum from '../assets/griddedNum.png'
import BackActionButton from '../assets/backActionButton.png'
import FontInfo from '../assets/fontInfo.png'
import List from '../assets/list.png'
import More from '../assets/more.png'
import FormatPainter from '../assets/formatPainter.png'
import ChangeWidthHeight from '../assets/changeWidthHeight.png'

import AlignTop from '../assets/alignTop.png'
import AlignBottom from '../assets/alignBottom.png'

import justifyLeft from '../assets/justifyLeft.png'
import justifyCenter from '../assets/justifyCenter.png'
import justifyRight from '../assets/justifyRight.png'


import { ReactComponent as Arrow } from '../assets/arrow.svg'

interface ItestObj {
	cellImit: HTMLElement | null,
}

const testObj: ItestObj = {
	cellImit: null,
}

const ExcelDataText: FC = () => {
	useEffect(() => {
		const cellImCollection = document.getElementsByClassName('cell-imit') as HTMLCollectionOf<HTMLElement>
		testObj.cellImit = cellImCollection[0]
	})

	const [saverImit1, setSaverImit1] = useState<HTMLElement | undefined>(undefined)
	const [saverImit2, setSaverImit2] = useState<HTMLElement | undefined>(undefined)

  	function scrolled() {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	}
	return (
    <div className="justify-column-div unmargin">
		<p>З табличними даними можна виконувати низку операцій.</p>

      	<h2>Відкриття таблиці</h2>

		<p>Існує декілька способів відкриття створеної раніше таблиці Excel:</p>
		<ul className="marked-list">
			<li>у відповідній папці знайти документ і відкрити його;</li>
			<li>запустити Excel, клацнути потрібну назву останніх документів;</li>
			<li>у вікні Excel виконати команду Файл → Відкрити, знайти і відкрити ЕТ;</li>
			<li>у меню Пуск (якщо ярлик Excel закріплено в меню) розгорнути 
			випадний список ярлика й вибрати файл потрібної таблиці.</li>
		</ul>

		<p>У всіх наведених випадках відкриється вибрана таблиця, з якою 
		користувач може продовжити роботу.</p>

		<h2>Введення даних</h2>

		<p>У клітинках ЕТ дані можна зберігати й опрацьовувати.</p>
		<p>Якщо якусь клітинку виділити клацанням, то наявні в клітинці 
		дані буде замінено новими, що вводитимуться. Під час уведення даних 
		стають активними два значки: Скасувати і Ввід (рис. 2.1).</p>

		<div className="image-table-wrapper">
			<img alt="info about cells" src={CellsInfo} />
			<p>Рис. 2.1</p>
		</div>

		<p>Уводити й редагувати дані можна як у клітинці, так і в рядку 
		формул. Якщо у вікні рядок формул відсутній, на вкладці Вигляд слід 
		встановити позначку: <img alt="formula bar checkbox checked" src={CheckedFormulaBar} /> Рядок формул.</p>
		<p>Підтвердити введення даних можна клацанням значка Ввід (рис. 2.1) або іншої клітинки, введення даних із переходом до сусідньої клітинки праворуч — натисканням клавіші Tab, нижче — (Enter)</p>
		<p>Щоб скасувати введення щойно набраних даних потрібно натиснути клавішу Esc або клацнути значок Скасувати (рис. 2.1).</p>

		<h3 className="bold">Особливості відображення даних</h3>

		<p>Після підтвердження введення даних текст, який не вміщується 
		в клітинку, буде виступати на порожні клітинки праворуч (рис. 2.2).</p>
		
		<div className="image-table-wrapper">
			<img alt="text speaks out" src={SpeaksOut} />
			<p className="kostyl-2-0">Рис. 2.2</p>
		</div>

		<p>Якщо ж клітинка праворуч теж містить дані, то текст у клітинці, 
		що міститься ліворуч, буде сховано за її правою межею. Введені дані 
		при цьому не втрачаються, їх можна побачити у рядку формул.</p>
		<ul className="marked-list">
			<li>Дробова частина числа, яка не вміщується в клітинку, буде автоматично округлятися (рис. 2.3, а);</li>
			<li>Якщо ціла частина не поміщається в клітинці, то число подається в стандартному вигляді (рис. 2.3, б);</li>
			<li>Якщо й це не вдається, виводиться «решітка» (рис. 2.3, в).</li>
		</ul>

		<div className="image-table-wrapper display-flex-img">
			<div className="margin-right-div" >
				<img alt="rounded num" src={RoundedNum}/>
				<p>Рис. 2.3, а</p>
			</div>
			<div className="margin-right-div">
				<img alt="standart looks" src={StandartLook}/>
				<p>Рис. 2.3, б</p>
			</div>
			<div>
				<img alt="grid num" src={GriddedNum}/>
				<p>Рис. 2.3, в</p>
			</div>
		</div>

		<h2>Редагування даних</h2>
		
		<p>Часто виникає потреба в редагуванні (зміненні) табличних даних. У цілому редагування даних в електронній таблиці схоже з редагуванням даних у текстовому документі</p>
		<p className="border-left-p">Для редагування наявних у клітинці даних її потрібно виділити подвійним клацанням</p>

		<p>Для видалення символів у клітинці потрібно скористатися клавішами Backspace або Delete, для скасування останніх дій — сполученням клавіш Ctrl + Z або кнопкою Скасувати <img className="bottom-img" alt="button to back the action" src={BackActionButton} />.</p>

		<p>Доступні також операції копіювання, вирізання, вставлення даних 
		відповідними сполученнями клавіш Ctrl + С, Ctrl + Х, Ctrl + V або командами контекстного меню.</p>

		<h2>Форматування даних</h2>

		<p>Звичайно, ЕТ призначені для опрацювання даних комп’ютером, 
		проте працюють із ними користувачі-люди. Отже, для кращого сприйняття табличних даних варто приділяти увагу естетичному оформленню таблиці. Це налаштовується шляхом форматування даних</p>

		<h3>Формат шрифту</h3>

		<div className="image-table-wrapper middle-img">
			<img alt="main font info" src={FontInfo} />
			<p>Рис. 2.4</p>
		</div>

		<p>Пригадаємо призначення відомих вам інструментів форматування шрифту (рис. 2.4):</p> 
		<ul className="border-left-p">
			<li>1 — гарнітура шрифту;</li>
			<li>2 — розмір шрифту;</li>
			<li>3 — стиль накреслення шрифту;</li>
			<li>4 — встановлення меж клітинки;</li>
			<li>5 — колір заливки;</li>
			<li>6 — змінення розміру шрифту;</li>
			<li>7 — колір шрифту;</li>
			<li>8 — відкриття вікна налаштування шрифту.</li>
		</ul>
		<p>Для форматування наявних у клітинці даних достатньо клацнути 
		клітинку та вибрати потрібний інструмент. Для форматування окремих 
		текстових даних — клацнути двічі та виділити фрагмент тексту. Форматування окремих фрагментів нетекстових даних неможливе.</p>

		<h3>Вирівнювання даних у клітинці</h3>

		<p>У клітинці текст автоматично вирівнюється за лівим краєм, а числа — за правим. Щоб <span className="bold">змінити вирівнювання вмісту</span>, потрібно спочатку виділити клітинку (одинарним клацанням!) чи діапазон, а потім скористатись відповідними інструментами вкладки Основне групи Вирівнювання. Залежно від вибраних інструментів горизонтального і вертикального вирівнювання маємо 9 результатів розташування, які ви можете випробувати інтерактивно:</p>

		<div onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
			const targ = e.target as HTMLElement

			if (targ.tagName !== 'IMG') return
			if (saverImit1 !== undefined) saverImit1.style.backgroundColor = 'transparent'
			targ.style.backgroundColor = '#fff'
			setSaverImit1(targ)

		}} className="radio-cell-imit-wrapper">
			<img alt='' src={AlignTop} onClick={() => testObj?.cellImit ? testObj.cellImit.style.alignItems = 'stretch' : undefined} className="margin-imit align-top-radio"></img>
			<img alt='' src={AlignBottom} onClick={() => testObj?.cellImit ? testObj.cellImit.style.alignItems = 'center' : undefined} className="margin-imit align-center-radio"></img>
			<img alt='' src={AlignBottom} onClick={() => testObj?.cellImit ? testObj.cellImit.style.alignItems = 'flex-end' : undefined} className="margin-imit align-bottom-radio"></img>
		</div>

		<div onClick={(e) => {
			const targ = e.target as HTMLElement

			if (targ.tagName !== 'IMG') return
			if (saverImit2 !== undefined) saverImit2.style.backgroundColor = 'transparent'
			targ.style.backgroundColor = '#fff'
			setSaverImit2(targ)

		}} className="radio-cell-imit-wrapper">
			<img alt='' src={justifyLeft} onClick={() => testObj?.cellImit ? testObj.cellImit.style.justifyContent = 'stretch' : undefined} className="margin-imit justify-left-radio"></img>
			<img alt='' src={justifyCenter} onClick={() => testObj?.cellImit ? testObj.cellImit.style.justifyContent = 'center' : undefined} className="margin-imit justify-center-radio"></img>
			<img alt='' src={justifyRight} onClick={() => testObj?.cellImit ? testObj.cellImit.style.justifyContent = 'flex-end' : undefined} className="margin-imit justify-right-radio"></img>
		</div>

		<p className='cell-imit'>Дані</p>

		<h3>Орієнтація запису даних</h3>	

		<p>Іноді записи у клітинках таблиці доводиться повертати. Пригадайте сторінку журналу успішності, на якій дати записано знизу вгору.</p>

		<p>Щоб <span className="bold">повернути запис на довільний кут</span>, потрібно:</p>	

		<ol>
			<li>У списку <img className="bottom-img" alt="list" src={List} /> вибрати команду Формат вирівнювання клітинки, або 
			розгорнути вікно налаштувань значком <img alt="more button" src={More} />, або в контекстному 
			меню клітинки вибрати команду Формат клітинок;</li>
			<li>У вікні Формат клітинок відкрити вкладку Вирівнювання (рис. 19.6);</li>
			<li>У блоці Орієнтація вказати кут повороту або перетягнути маркер 
			Напис на потрібний кут і натиснути кнопку ОК.</li>
		</ol>

		<h3>Формат за зразком</h3>

		<p>Щоб застосовувати формат однієї клітинки до інших, не змінюючи 
		їхнього вмісту, потрібно виділити цю клітинку, на вкладці Основне
		клацнути кнопку Формат за зразком <img alt="format painter" className="bottom-img" src={FormatPainter} /> та протягнути вказівник-пензель по клітинках, для яких потрібно застосувати вибраний формат</p>

		<p>Для багаторазового використання форматування за зразком слід двічі клацнути кнопку <img alt="format painter" className="bottom-img" src={FormatPainter} />, а щоб вийти з цього режиму — клавішу Esc.</p>

		<h3>Зміна розмірів стовпців і рядків</h3>

		<p>Щоб <span className="bold">змінити ширину стовпця (висоту 
		рядка)</span>, достатньо перетягнути його праву 
		(нижню) межу між заголовками (номерами). При цьому виводяться поточні розміри: у пунктах і пікселях — для рядків, 
		у символах і пікселях — для стовпців при 
		звичайному режимі перегляду (рис. 2.5).</p>

		<div className="image-table-wrapper middle-img">
			<img alt="change width or height" src={ChangeWidthHeight} />
			<p>Рис. 2.5</p>
		</div>

		<Link className="link-route test-route" to="/ReactMAN/excel-data-quest"><button className="test-button">Посилання на тест</button></Link>
		<button className="scroll-up-down hide" onClick={scrolled}><Arrow className='arrow-pulled-sec turned' /></button>
    </div>
  )
}
  
export default ExcelDataText