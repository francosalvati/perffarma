import './Contact.css'

import instagram from '../../icons/instagram.png'
import gmail from '../../icons/gmail.png'
import whatsapp from '../../icons/whatsapp.png'
import { ContactForm } from './ContactForm/ContactForm'

export const Contact = () => {
    return (
        <div className="contact_container flex justify-content-around" id="contact">
                <div className="contact-form_container">
                    <ContactForm />
                </div>
                <div className="social_networks">
                    <div>
                        <img src={gmail} alt="" />
                    </div>
                    <div>
                        <img src={instagram} alt="" />
                    </div>
                    <div>
                        <img src={whatsapp} alt="" />
                    </div>
                </div>
        </div>
    )
}