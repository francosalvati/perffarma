import './Logo.css'
import logoUrl from '../../../images/logo.png'

export const Logo = () => {

    return (
        <a href='#home' className='logo'>
            <img src={logoUrl} alt="" />
        </a>
    )
}