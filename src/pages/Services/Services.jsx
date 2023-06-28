import './Services.css'
import { useTranslation } from 'react-i18next'
import { ServiceCard } from './serviceCard/ServiceCard'


export const Services = () => {

    const { t } = useTranslation()

    let services = [
        {
            icon: "fa-solid fa-certificate",
            text: "services.providing"
        },
        {
            icon: "fa-solid fa-calendar",
            text: "services.check"
        },
        {
            icon: 'fa-solid fa-square-check',
            text: "services.check"
        },

        {
            icon: 'fa-solid fa-capsules',
            text: "services.medicine"
        },
        {
            icon: 'fa-solid fa-magnifying-glass',
            text: "services.intervention"
        },
        {
            icon: "fa-solid fa-crosshairs",
            text: "services.mision"
        }
    ]


    return (
        <>
            <h2 className="services_title">{t('service')}</h2>
            <div className="services_container" id='service'>
                <div className='services_grid'>
                    {
                        services.map((s, index) => (<ServiceCard icon={s.icon} text={s.text} key={index} />))
                    }
                </div>
            </div>
        </>
    )
}