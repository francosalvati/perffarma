import { Logo } from "../Logo/Logo"
import './Toolbar.css'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'


export const Toolbar = () => {

    const [menu, setMenu] = useState(true)

    const { i18n, t } = useTranslation()

    const changeLenguage = (lenguaje) => {
        const selectedLanguage = lenguaje
        i18n.changeLanguage(selectedLanguage)
    }


    const toggleMenu = () => {
        setMenu(!menu)
    }


    return (
        <header className="flex justify-content-between align-items-center">
            <button className={menu ? 'nav_button open' : 'nav_button '} onClick={toggleMenu}><i className="fa-solid fa-bars"></i> </button>
            <span className='responsive-title m-0'><Logo /></span>
            <nav className="nav open" >
                <button className={menu ? 'close_button close' : 'close_button open'} onClick={toggleMenu}><i className="fa-solid fa-x"></i></button>
                <ul className={menu ? 'nav_list close' : 'nav_list'}>
                    <li></li>
                    <li><a href="#service">{t('service')}</a></li>
                    <li><a href="#client">{t('client')}</a></li>
                    <li><a href="#contact">{t('contact')}</a></li>
                    <li className="text-end flex justify-content-end w-full">
                        <ul className='language flex'>
                            <li onClick={() => { changeLenguage('es') }}>ES</li>
                            <li onClick={() => { changeLenguage('en') }}>EN</li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}