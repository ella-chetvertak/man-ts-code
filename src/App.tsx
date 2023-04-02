import './App.css';
// import React from 'react';
import {ReactComponent as DarkIconMoon} from './assets/darkTheme.svg'
import {ReactComponent as LightIconSun} from './assets/lightTheme.svg'

import Scroll from './components/Scroll'
import Heading from './components/Heading'
import HomeText from './components/HomeText'
import NewsText from './components/NewsText'
import FaQText from './components/FaQText';
import ContactText from './components/ContactText';
import ExcelBeginText from './components/ExcelBeginText';
import ExcelBeginQuest from './components/ExcelBeginQuest';
import ExcelDataText from './components/ExcelDataText';
import ExcelDataQuest from './components/ExcelDataQuest'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {useTheme} from './hooks/useTheme.js'
import { useEffect } from 'react';

const light = document.getElementsByClassName('light') as HTMLCollectionOf<HTMLElement>
const dark = document.getElementsByClassName('dark') as HTMLCollectionOf<HTMLElement>

function App() {
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    if (localStorage.getItem('theme') === 'light') {
      dark[0].style.display = 'none';
      light[0].style.display = 'block';
      setTheme('light')
    }
  })


  function changeTheme(e: any) {
    console.log(e.type)
    e.preventDefault();
    e.target.closest('svg').style.display = 'none';
    const svg = e.target.closest('svg').classList[0];
    if (svg === 'dark') {
      
      light[0].style.display = 'block';
      setTheme('light') 
      localStorage.setItem('theme', 'light')
    } else if (svg === 'light') {

      dark[0].style.display = 'block';
      setTheme('dark') 
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <BrowserRouter>
        <Heading>
          <DarkIconMoon className='dark' onClick={changeTheme}></DarkIconMoon>
          <LightIconSun className='light' onClick={changeTheme}></LightIconSun>
        </Heading>
        <Scroll />
        <div className='justify-div-main'>
          <main>
            <Routes>
              <Route path="/ReactMAN" element={<HomeText />}/>
              <Route path="/ReactMAN/excel-begin" element={<ExcelBeginText />}/>
              <Route path="/ReactMAN/excel-begin-quest" element={<ExcelBeginQuest />}/>
              <Route path="/ReactMAN/excel-data" element={<ExcelDataText />}/>
              <Route path="/ReactMAN/excel-data-quest" element={<ExcelDataQuest />}/>
              <Route path="/ReactMAN/news" element={<NewsText />}/>
              <Route path="/ReactMAN/faq" element={<FaQText />}/>
              <Route path="/ReactMAN/contacts" element={<ContactText />}/>
            </Routes>
          </main>
        </div>
    </BrowserRouter>
  );
}

export default App;


