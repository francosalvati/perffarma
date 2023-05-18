// import { Logo } from "../Logo/Logo"
import './Toolbar.css'
import esp from '../../../icons/espana.png'
import ing from '../../../icons/estados-unidos.png'
import { useTranslation } from 'react-i18next'
import  { useRef } from 'react';

export const Toolbar = () => {

    const toggle = useRef(null)

    const { i18n, t } = useTranslation()

    const changeLenguage = (lenguaje) => {
        const selectedLanguage = lenguaje
        i18n.changeLanguage(selectedLanguage)
    }

    const handleMenu = () => {
        console.log(toggle)
    }
    return (
        <header className="flex justify-content-between align-items-center flex-1 ">
            {/* <Logo /> */}
            <button onClick={handleMenu} >Menu</button>
            <nav className="nav">
                <ul className='hide' ref={toggle}>
                    <li><a to={''} className='logo'> {t('perffarma')} </a></li>
                    <li><a to={''}>{t('service')}</a></li>
                    <li><a to={''}>{t('client')}</a></li>
                    <li><a to={''}>{t('contact')}</a></li>
                </ul>
            </nav>
            <div className="actions">
                <ul className="flex justify-content-between">
                    <li onClick={() => { changeLenguage('es') }}> <img src={esp} alt="" /></li>
                    <li onClick={() => { changeLenguage('en') }}><img src={ing} alt="" /></li>
                </ul>
            </div>
        </header>
    )
}