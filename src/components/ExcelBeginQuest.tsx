import React, {useEffect, FC} from 'react';
import { Formik, Field, Form } from 'formik';

import excelIcon from '../assets/excelIcon.png'
import wordIcon from '../assets/wordIcon.png'
import paintIcon from '../assets/paintIcon.png'
import powerPointIcon from '../assets/powerpointIcon.png'

import cohCell from '../assets/cohCell.png'
import cohCell2 from '../assets/cohCell2.png'
import incCell from '../assets/incCell.png'
import incCell2 from '../assets/incCell2.png'

import { ReactComponent as Arrow } from '../assets/arrow.svg'

import { IButtons } from '../modules';
import { IQuest } from '../modules';

export const CustomImportRadio: FC<IButtons> = (props: IButtons) => {
    return (
        <div className="custom-radio" >
            <label className='quest-img-wrapper'>
                <Field type='radio' name={`${props.quest}Quest`} value={props.letter}/>
                <div className="custom-radio__label">{props.blocky ? '' : `${props.letter})${props.var}`}</div>
                {props.hasOwnProperty('source') ? <img className={`${props.imgType ? props.imgType : 'quest'}-img`} alt='icon' src={props.source}/> : <></> }
            </label>
        </div>
    )
}

export const CustomImportCheckbox: FC<IButtons> = (props: IButtons) => {
    return (
        <React.Fragment>
            <label className="custom-big-checkbox quest-img-wrapper">
                <Field type="checkbox" name={`${props.quest}Quest`} value={props.letter}/>
                <span className="custom-big-checkbox__checkbox"></span>
                <span className="labeltext">{props.letter}){props.var}</span>
                {props.hasOwnProperty('source') ? <img className={`${props.hasOwnProperty('imgType') ? props.imgType : 'quest'}-img`} alt='icon' src={props.source}/> : <></> }
            </label>
        </React.Fragment>
    )
}

export const QuestionalTr: FC<IQuest> = (props: IQuest) => {
    return (
        <tr className='unpadding-quest' >
            <td>{props.quesNum}</td>
            <td><CustomImportRadio blocky={true} var='' quest={`${props.ques}`} letter="А" imgType=''/></td>
            <td><CustomImportRadio blocky={true} var='' quest={`${props.ques}`} letter="Б" imgType=''/></td>
            <td><CustomImportRadio blocky={true} var='' quest={`${props.ques}`} letter="В" imgType=''/></td>
            <td><CustomImportRadio blocky={true} var='' quest={`${props.ques}`} letter="Г" imgType=''/></td>
        </tr>
    )
}

const ExcelBeginQuest: FC = () => {
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
                    if (values.firstQuest === 'Б') {count += 1}
                    if (values.secQuest === 'Б') {count += 1}
                    if (values.thrQuest === 'А') {count += 1}
                    let four = values.fourQuest
                    let fiv = values.fivQuest

                    let timedValue = 0
                    for (let key in four) {
                        if (four[key] === 'Б' || four[key] === 'В') {
                            timedValue += 0.75
                        } else {timedValue -= 0.75}
                    }
                    if (timedValue > 0) {count += timedValue}

                    let timedValue2 = 0
                    for (let key in fiv) {
                        if (fiv[key] === 'В' || fiv[key] === 'Г') {
                            timedValue2 += 0.75
                        } else {timedValue2 -= 0.75}
                    }
                    if (timedValue2 > 0) {count += timedValue2}

                    if (values.sxQuest === 'Г') {count += 0.5}
                    if (values.sevQuest === 'Б') {count += 0.5}
                    if (values.eighQuest === 'В') {count += 0.5}
                    if (values.nineQuest === 'А') {count += 0.5}

                    if (values.tenQuest === 'Б') {count += 0.5}
                    if (values.elevQuest === 'Г') {count += 0.5}
                    if (values.twelQuest === 'В') {count += 0.5}
                    if (values.thirQuest === 'А') {count += 0.5}

                    if (parseInt(values.fourteenQuest) == 16384) {count += 2}

                    console.log(values)
                    alert(count)
                }}>
                <Form>
                    {/* FIRST */}

                    <p className='non-margin'><span className='bold'>1.</span> Яке з наведених зображень є значком табличного процесора Excel?</p>

                    <div className='quest-group'>
                        <CustomImportRadio var='' quest='first' letter="А" source={powerPointIcon} />
                        <CustomImportRadio var='' quest='first' letter="Б" source={excelIcon} />
                        <CustomImportRadio var='' quest='first' letter="В" source={wordIcon} />
                        <CustomImportRadio var='' quest='first' letter="Г" source={paintIcon} />
                    </div>

                    {/* SECOND */}

                    <p className='non-margin'><span className='bold'>2.</span> У якому з наведених прикладів не можна здійснити запропоноване опрацювання даних в електронних таблицях?</p>

                    <div className='quest-group'>
                        <CustomImportRadio source='' var=' Опрацювання графіка руху громадського транспорту' quest='sec' letter="А" />
                        <CustomImportRadio source='' var=' Редагування фотографій і малюнків, збережених на комп’ютері' quest='sec' letter="Б" />
                        <CustomImportRadio source='' var=' Ведення обліку успішності учнів у шкільному журналі' quest='sec' letter="В" />
                        <CustomImportRadio source='' var=' Нарахування зарплат і видатків у зарплатній відомості' quest='sec' letter="Г" />
                    </div>

                    {/* THIRD */}

                    <p className='non-margin'><span className='bold'>3.</span> Яку клавішу слід утримувати для виділення кількох несуміжних клітинок в один діапазон?</p>

                    <div className='quest-group'>
                        <CustomImportRadio var=' Ctrl' quest='thr' letter="А" />
                        <CustomImportRadio var=' Enter' quest='thr' letter="Б" />
                        <CustomImportRadio var=' Shift' quest='thr' letter="В" />
                        <CustomImportRadio var=' Tab' quest='thr' letter="Г" />
                    </div>

                    {/* FOURTH */}

                    <p className='non-margin'><span className='bold'>4.</span> На яких рисунках зображено виділені незв’язні діапазони клітинок електронної таблиці?</p>

                    <div className='margins-needed'>
                        <CustomImportCheckbox var='' quest='four' imgType="middle" letter="А" source={cohCell} />
                        <CustomImportCheckbox var='' quest='four' imgType="middle" letter="Б" source={incCell} />
                        <CustomImportCheckbox var='' quest='four' imgType="middle" letter="В" source={incCell2} />
                        <CustomImportCheckbox var='' quest='four' imgType="middle" letter="Г" source={cohCell2} />
                    </div>

                    {/* FIFTH */}

                    <p className='non-margin'><span className='bold'>5.</span> Які є способи виділення зв’язного (прямокутного) діапазону клітинок електронної таблиці?</p>

                    <div className='margins-needed'>
                        <CustomImportCheckbox var=' Перетягнути вка­зівник від однієї кутової клітинки до діагонально протилежної з натисненою клавішею Shift' quest='fiv' letter="А" />
                        <CustomImportCheckbox var=' Клацнути кутову клітинку, а потім із натисненою клавішею Ctr клацнути діагонально протилежну' quest='fiv' letter="Б" />
                        <CustomImportCheckbox var=' Клацнути кутову клітинку, а потім із натисненою клавішею Shift клацнути діагонально протилежну' quest='fiv' letter="В" />
                        <CustomImportCheckbox var=' Перетягнути вка­зівник від однієї кутової клітинки до діагонально протилежної з натисненою ЛКМ' quest='fiv' letter="Г" />
                    </div>

                    {/* SIXTH */}

                    <p><span className='bold'>6.</span> Установіть відповідність між термінами (1–4) та визначеннями (А–Г).</p>

                    <div className='questional-block'>
                        <div className='margin-right-needed'>
                            <p><span className='bold'>1)</span> Електронна таблиця</p>
                            <p><span className='bold'>2)</span> Табличний процесор</p>
                            <p><span className='bold'>3)</span> Діапазон</p>
                            <p><span className='bold'>4)</span> Google Таблиця</p>
                        </div>
                        <div>
                            <p><span className='bold'>А)</span> Прикладна програма для опрацювання даних, поданих в електронних таблицях</p>
                            <p><span className='bold'>Б)</span> Комп’ютерне подання прямокутної таблиці з рядків і стовпців, на перетині яких розташовані клітинки, що можуть містити дані й формули опрацювання даних</p>
                            <p><span className='bold'>В)</span> Електронна таблиця, з якою  можна працювати в онлайн-режимі завдяки  хмарним техноло­гіям</p>
                            <p><span className='bold'>Г)</span> Сукупність клітинок електронної таблиці, які можна опрацьовувати як єдине ціле</p>
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

                    <p><span className='bold'>7.</span> Відновіть послідовність дій для збереження файла електронної таблиці Excel.</p>

                    <div className='margin-right-needed'>
                        <p><span className='bold'>А)</span> Клацнути кнопку Зберегти</p>
                        <p><span className='bold'>Б)</span> На вкладці ФАЙЛ вибрати команду Зберегти (або Зберегти як)</p>
                        <p><span className='bold'>В)</span> Увести назву файлу у поле Ім’я файлу</p>
                        <p><span className='bold'>Г)</span> Зазначити місце збереження — одну з папок, наявних у списку, або вибрати іншу папку кнопкою Огляд</p>
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

                    <p><span className='bold'>8.</span> Запустіть Excel. Визначте максимальну кількість стовпців, яку може містити одна таблиця Excel. Запишіть знайдене числове значення.</p>

                    <Field type='number' className='open-quest' name="fourteenQuest" />
                    <button className='submit-button' type="submit">Відправити</button>
                </Form>
            </Formik>
            <button className="scroll-up-down hide" onClick={scrolled}><Arrow className='arrow-pulled-sec turned' /></button>
        </div>
    );
}

export default ExcelBeginQuest