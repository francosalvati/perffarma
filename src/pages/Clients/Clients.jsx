
import { useTranslation } from 'react-i18next'
import './Clients.css'


export const Clients = () => {

    const { t } = useTranslation()
    return (
            <div className="client_container">
                <h1 className='client-title p-4 m-0'> {t('client')}</h1>
            </div>
    )
}