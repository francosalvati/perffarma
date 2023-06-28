import './Contact.css'
import { useTranslation } from 'react-i18next'

export const Contact = () => {

    const { t } = useTranslation()
    return (
        <>
            <div className="contact_container pb-5" id="contact">
                <h2 className='contact_title'>{t('contact')}</h2>
                <div className='flex justify-content-around '>
                    <ul className='flex justify-content-between contact_action'>
                        <a href="mailto:TU_DIRECCION_DE_CORREO?subject=Asunto%20del%20correo&body=Hola,%20me%20gustaría%20contactarte">
                            <li className='mail'>
                                <i className="fa-solid fa-envelope"></i>
                                <span>Enviar mail</span>
                            </li>
                        </a>
                        <li className='phone'>
                            <i className="fa-solid fa-phone"></i>
                            <span> +54 9 113318 </span>
                        </li>
                        <a href="https://api.whatsapp.com/send?phone=+549113318-3922&text=Hola,%20me%20gustaría%20chatear%20contigo" target="_blank" rel="noreferrer">
                            <li className='whatsapp'>
                                <i className="fa-brands fa-whatsapp"></i>
                                <span>Whats-App</span>
                            </li>
                        </a>
                    </ul>
                </div>
            </div >
        </>
    )
}