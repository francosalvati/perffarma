import './Logo.css'
import logoUrl from '../../../images/logo.png'

export const Logo = () => {

    return (
        <a to={'home'} className='logo ml-4'>
            <img src={logoUrl} alt="" />
        </a>
    )
}