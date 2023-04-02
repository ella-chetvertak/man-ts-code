import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from '../assets/arrow.svg'

import { useState, FC } from 'react';

const Scroll: FC = () => {
  const [accorOne, setAccorOne] = useState<boolean>(false)
  const [accorTwo, setAccorTwo] = useState<boolean>(false)
  const [accorThree, setAccorThree] = useState<boolean>(false)

  const arrowCollect = document.getElementsByClassName('arrow') as HTMLCollectionOf<HTMLElement>

  function setterOne(event: React.MouseEvent) {
    const targ = event.target as HTMLElement
  
    if (targ.tagName !== 'LI') { // to get ahead of propagation
      if (!accorOne) {
        setAccorOne(true)
        arrowCollect[0].style.transform = 'rotate(-90deg)'
      } else {
        setAccorOne(false)
        arrowCollect[0].style.transform = 'rotate(0)'
      }
    }
  }
 
  function setterTwo(event: React.MouseEvent) {
    const targ = event.target as HTMLElement

    if (targ.tagName !== 'LI') { // to get ahead of propagation
      if (!accorTwo) {
        setAccorTwo(true)
        arrowCollect[1].style.transform = 'rotate(-90deg)'
      } else {
        setAccorTwo(false)
        arrowCollect[1].style.transform = 'rotate(0)'
      }
    }
  }

  function setterThree(event: React.MouseEvent) {
    const targ = event.target as HTMLElement

    if (targ.tagName !== 'LI') { // to get ahead of propagation
      if (!accorThree) {
        setAccorThree(true)
        arrowCollect[2].style.transform = 'rotate(-90deg)'
      } else {
        setAccorThree(false)
        arrowCollect[2].style.transform = 'rotate(0)'
      }
    }
  }

  return (
    <aside className='aside-bar'>
      <h2><Link className="link-route" to="/ReactMAN">Початок</Link></h2>
      <ul>
        <li onClick={setterOne}><a className='accorLink' >7 клас</a><Arrow className='arrow' /></li>
        <li><ul className={accorOne ? 'classUL' : undefined}>
          <li onClick={setterTwo}><a className='accorLink'>Інформатика</a><Arrow className='arrow' /></li>
          <li>
            <ul className={accorTwo ? 'themeUL' : undefined}>
              <li className="non-margin" onClick={setterThree}><a className='accorLink'>Розділ 1. Опрацювання табличних даних</a><Arrow className='arrow' /></li>
              <li>
                <ul className={accorThree ? 'chapterUL' : undefined}>
                  <li className="non-margin"><Link className="link-route" to="ReactMAN/excel-begin">Середовище табличного процесора</Link></li>
                  <li className="non-margin"><Link className="link-route" to="ReactMAN/excel-data">Робота з табличними даними</Link></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul></li>
      </ul>
    </aside>
  )
}

export default Scroll