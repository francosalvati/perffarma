
import { useTranslation } from 'react-i18next'
import './Home.css'


export const Home = () => {

    const { t } = useTranslation()

    return (

        <div className="home_container flex justify-content-center">
            <div className="home p-4 mt-5">
                <h1 className='p-5'>{t('home-title')}</h1>
                <div className='card_container flex align-items-end'>
                    <div className='card m-2 '>
                        <h3 className='title mb-2'> + {t('client')}</h3>
                        <div className='text'>
                            Trabajamos con mas de 20 clientes de todo sud-america
                        </div>
                    </div>
                    <div className='card m-2'>
                        <h3 className='title mb-2'> + {t('service')}</h3>
                        <div className='text'>
                            Tenemos mas de 200 productos para ofrecer que van a cambiar el mercado
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}