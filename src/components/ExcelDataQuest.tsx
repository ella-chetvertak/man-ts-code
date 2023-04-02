import React, {useEffect, FC} from 'react';
import { Formik, Field, Form } from 'formik';

import backButtonBigger from '../assets/backButtonBigger.png'
import closeButtonBigger from '../assets/closeButtonBigger.png'
import confirmButtonBigger from '../assets/confirmButtonBigger.png'
import saveButtonBigger from '../assets/saveButtonBigger.png'

import textTurner from '../assets/textTurner.png'
import fillingData from '../assets/fillingData.png'
import formulaBarArrow from '../assets/formulaBarArrow.png'

import firstDataVar from '../assets/firstDataVar.png'
import secondDataVar from '../assets/secondDataVar.png'
import thirdDataVar from '../assets/thirdDataVar.png'
import fourthDataVar from '../assets/fourthDataVar.png'

import jusLalC from '../assets/jusLalC.png'
import jusLalR from '../assets/jusLalR.png'
import jusRalT from '../assets/jusRalT.png'
import jusRalC from '../assets/jusRalC.png'

import jusLalCDat from '../assets/jusLalCDat.png'
import jusLalRDat from '../assets/jusLalRDat.png'
import jusRalTDat from '../assets/jusRalTDat.png'
import jusRalCDat from '../assets/jusRalCDat.png'

import formatPainter from '../assets/formatPainter.png'

import { ReactComponent as Arrow } from '../assets/arrow.svg'

import { CustomImportRadio, CustomImportCheckbox, QuestionalTr } from './ExcelBeginQuest'

const ExcelDataQuest: FC = () => {
    function scrolled() {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	}

    useEffect(() => {
        window.scroll(0, 0)   
    })

    return (
        <div>
            <Formik
                initialValues={{
                    firstQuest: '',
                    secQuest: '',
                    thrQuest: '',
                    fourQuest: [],
                    fivQuest: [],
                    sxQuest: '',
                    sevQuest: '',
                    eighQuest: '',
                    nineQuest: '',
                    tenQuest: '',
                    elevQuest: '',
                    twelQuest: '',
                    thirQuest: '',
                    fourteenQuest: '',
                }}
                onSubmit={values => {
                    let count = 0
                    if (values.firstQuest === 'В') {count += 1}
                    if (values.secQuest === 'Б') {count += 1}
                    if (values.thrQuest === 'Г') {count += 1}
                    let four = values.fourQuest
                    let fiv = values.fivQuest

                    let timedValue = 0
                    for (let key in four) {
                        if (four[key] === 'А' || four[key] === 'В') {
                            console.log(four[key])
                            timedValue += 0.5
                        } else if (four[key] === 'Б') {
                            timedValue += 0.5
                        } else timedValue -= 0.5
                    }
                    if (timedValue > 0) {count += timedValue}

                    let timedValue2 = 0
                    for (let key in fiv) {
                        if (fiv[key] === 'А' || fiv[key] === 'Г') {
                            timedValue2 += 0.75
                        } else {timedValue2 -= 0.75}
                    }
                    if (timedValue2 > 0) {count += timedValue2}

                    if (values.sxQuest === 'Г') {count += 0.5}
                    if (values.sevQuest === 'В') {count += 0.5}
                    if (values.eighQuest === 'Б') {count += 0.5}
                    if (values.nineQuest === 'А') {count += 0.5}

                    if (values.tenQuest === 'Г') {count += 0.5}
                    if (values.elevQuest === 'А') {count += 0.5}
                    if (values.twelQuest === 'В') {count += 0.5}
                    if (values.thirQuest === 'Б') {count += 0.5}

                    if (values.fourteenQuest == 'рядок формул') {count += 2}

                    console.log(values)
                    alert(count)
                }}>
                <Form>
                    {/* FIRST */}

                    <p className='non-margin'><span className='bold'>1.</span> Як виглядає значок підтвердження введення даних, які набрано в клітинці електронної таблиці?
                    Позначте одну правильну відповідь.</p>

                    <div className='quest-group'>
                        <CustomImportRadio var='' quest='first' letter="А" source={backButtonBigger} />
                        <CustomImportRadio var='' quest='first' letter="Б" source={closeButtonBigger} />
                        <CustomImportRadio var='' quest='first' letter="В" source={confirmButtonBigger} />
                        <CustomImportRadio var='' quest='first' letter="Г" source={saveButtonBigger} />
                    </div>

                    {/* SECOND */}

                    <p className='non-margin'><span className='bold'>2.</span> Як називається вкладка вікна Формат клітинок, у якій містяться інструменти для повертання напису в клітинках на певний кут?
                    Позначте одну правильну відповідь.</p>

                    <img alt='text turner' src={textTurner}></img>

                    <div className='quest-group'>
                        <CustomImportRadio var=' Заливка' quest='sec' letter="А" />
                        <CustomImportRadio var=' Вирівнювання' quest='sec' letter="Б" />
                        <CustomImportRadio var=' Шрифт' quest='sec' letter="В" />
                        <CustomImportRadio var=' Межі' quest='sec' letter="Г" />
                        <CustomImportRadio var=' Захист' quest='sec' letter="Д" />
                    </div>

                    {/* THIRD */}

                    <p className='non-margin'><span className='bold'>3.</span> Яким буде результат дії інструмента, позначеного на рисунку, на активну клітинку електронної таблиці?
                    Позначте одну правильну відповідь.</p>

                    <img alt='filling the data' src={fillingData}></img>

                    <div className='margin-bottom-needed quest-group'>
                        <CustomImportRadio var='' quest='thr' letter="А" source={firstDataVar} />
                        <CustomImportRadio var='' quest='thr' letter="Б" source={secondDataVar}/>
                        <CustomImportRadio var='' quest='thr' letter="В" source={thirdDataVar}/>
                        <CustomImportRadio var='' quest='thr' letter="Г" source={fourthDataVar}/>
                    </div>

                    {/* FOURTH */}

                    <p className='non-margin'><span className='bold'>4.</span> У який спосіб можна відкрити нещодавно збережений файл електронної таблиці, якщо ви забули його назву та місце збереження?</p>
                    <p>Позначте всі правильні відповіді.</p>

                    <div className='margins-needed'>
                        <CustomImportCheckbox var=' Запустити Excel, клацнути потрібну назву останніх документів' quest='four' letter="А" />
                        <CustomImportCheckbox var=' У меню Пуск (якщо ярлик Excel закріплено в меню) розгорнути випадний список ярлика й вибрати файл потрібної таблиці' quest='four' letter="Б" />
                        <CustomImportCheckbox var=' Якщо якусь таблицю вже відкрито, виконати Файл 🠒 Відкрити. Знайт та відркрити потрібний файл у списку Останні книги' quest='four' letter="В" />
                        <CustomImportCheckbox var=' Переглянути всі папки, знайти потрібний документ і відкрити його подвійним клацанням' quest='four' letter="Г" />
                    </div>

                    {/* FIFTH */}

                    <p className='non-margin'><span className='bold'>5.</span> Що потрібно зробити, щоб побачити весь текст у клітинці, якщо його частина прихована даними сусідньої клітинки, розташованої праворуч?</p>
                    <p>Позначте всі правильні відповіді.</p>

                    <div className='margins-needed'>
                        <CustomImportCheckbox var=' Двічі клацнути та переглянути в ній дані' quest='fiv' letter="А" />
                        <CustomImportCheckbox var=' Виділити стовпець із зазначеною клітинкою та переглянути дані в Рядку формул' quest='fiv' letter="Б" />
                        <CustomImportCheckbox var=' Вибрати в контекстному меню клітинки відповідну команду' quest='fiv' letter="В" />
                        <CustomImportCheckbox var=' Клацнути клітинку й переглянути дані у Рядку формул' quest='fiv' letter="Г" />
                    </div>

                    {/* SIXTH */}

                    <p><span className='bold'>6.</span> Установіть відповідність між термінами (1–4) та визначеннями (А–Г).</p>

                    <div className='questional-block'>
                        <div className='margin-right-needed'>
                            <p><span className='bold'>1)</span> <img alt='' src={jusLalC} /></p>
                            <p><span className='bold'>2)</span> <img alt='' src={jusLalR} /></p>
                            <p><span className='bold'>3)</span> <img alt='' src={jusRalT} /></p>
                            <p><span className='bold'>4)</span> <img alt='' src={jusRalC} /></p>
                        </div>
                        <div>
                            <p><span className='bold'>А)</span> <img alt='' src={jusRalCDat} /></p>
                            <p><span className='bold'>Б)</span> <img alt='' src={jusRalTDat} /></p>
                            <p><span className='bold'>В)</span> <img alt='' src={jusLalRDat} /></p>
                            <p><span className='bold'>Г)</span> <img alt='' src={jusLalCDat} /></p>
                        </div>
                    </div>

                    <table className='questional-table'>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>А</td>
                                <td>Б</td>
                                <td>В</td>
                                <td>Г</td>
                            </tr>
                            <QuestionalTr ques='sx' quesNum='1' />
                            <QuestionalTr ques='sev' quesNum='2' />
                            <QuestionalTr ques='eigh' quesNum='3' />
                            <QuestionalTr ques='nine' quesNum='4' />
                        </tbody>
                    </table>

                    {/* SEVENTH */}

                    <p><span className='bold'>7.</span> Відновіть послідовність дій для багаторазового застосування в електронних таблицях інструменту <img src={formatPainter} alt='format-painter' />.</p>

                    <div className='margin-right-needed'>
                        <p><span className='bold'>А)</span> На вкладці Основне двічі клацнути кнопку <img src={formatPainter} alt='format-painter' /></p>
                        <p><span className='bold'>Б)</span> Натиснути клавішу Esc</p>
                        <p><span className='bold'>В)</span> Клацнути клітинки та/або протягнути по діапазонах вказівник-пензель для застосувати вибраного формату</p>
                        <p><span className='bold'>Г)</span> Виділити клі­тинку, формат якої буде взято за зразок</p>
                    </div>

                    <table className='questional-table'>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>А</td>
                                <td>Б</td>
                                <td>В</td>
                                <td>Г</td>
                            </tr>
                            <QuestionalTr ques='ten' quesNum='1' />
                            <QuestionalTr ques='elev' quesNum='2' />
                            <QuestionalTr ques='twel' quesNum='3' />
                            <QuestionalTr ques='thir' quesNum='4' />
                        </tbody>
                    </table>

                    {/* EIGHT */}

                    <p><span className='bold'>8.</span> Як називається текстове поле, у якому крім власне клітинки можна переглядати й редагувати наявні в клітинці дані? Відповідь запишіть малими літерами української абетки (іменник в однині).</p>

                    <img alt='text turner' src={formulaBarArrow}></img>

                    <Field type='text' className='open-quest' name="fourteenQuest" />
                    <button className='submit-button' type="submit">Відправити</button>
                </Form>
            </Formik>
            <button className="scroll-up-down hide" onClick={scrolled}><Arrow className='arrow-pulled-sec turned' /></button>
        </div>
    );
}

export default ExcelDataQuest