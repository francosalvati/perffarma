import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export const ServiceCard = ({ icon, text }) => {

    const { t } = useTranslation()

    return (
        <div className='service_card text-center'>
            <i className={icon + ' services_icon'}></i>
            <h3 className=''>
                {t(text)}
            </h3>
        </div>
    )
}


ServiceCard.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};