
import { useTranslation } from 'react-i18next'
import './Clients.css'


export const Clients = () => {

    const { t } = useTranslation()
    return (
            <div className="client_container">
                <h2 className='client_title'> {t('client')}</h2>
            </div>
    )
}