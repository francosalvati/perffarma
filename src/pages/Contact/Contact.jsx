import './Contact.css'


export const Contact = () => {
    return (
        <>
            <div className="contact_container pb-5" id="contact">
                <h2 className='contact_title'>Contact Us</h2>
                <div className='flex justify-content-around '>
                    <ul className='flex justify-content-between contact_action'>
                        <li className='mail'><i className="fa-solid fa-envelope"></i></li>
                        <li className='phone'><i className="fa-solid fa-phone"></i></li>
                        <li className='whatsapp'><i className="fa-brands fa-whatsapp"></i></li>
                    </ul>
                    <div>
                        <form className='contact_form'>
                            <div>
                                <label htmlFor=""></label>
                                <input type="text" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}