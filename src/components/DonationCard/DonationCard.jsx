/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { NavLink } from 'react-router-dom';
const DonationCard = ({ campaign }) => {
    const { id, capmpaign_image, capmpaign_title, capmpaign_price, capmpaign_category, category_bg, card_bg, text_button_bg } = campaign;

    const cardStyle = {
        'background': `${card_bg}`,
        'color': `${text_button_bg}`,
    }
    const categoryStyle = {
        'background': `${category_bg}`
    }

    const btnStyle = {
        'background': `${text_button_bg}`
    }

    return (
        <div style={cardStyle} className="flex flex-col md:flex-row rounded-lg cursor-pointer">
            <img className='rounded-lg' src={capmpaign_image} alt="" />
            <div className="py-4 pl-4">
                <h5 style={categoryStyle} className="font-medium text-[14px] rounded-lg py-1 px-[10px] inline-block">{capmpaign_category}</h5>
                <h3 className="font-semibold text-[#0B0B0B] text-[24px] mt-3">{capmpaign_title}</h3>
                <p className='font-semibold text-base mt-2 mb-4'>${capmpaign_price}</p>
                <NavLink to={`/campaigns/${id}`}>
                    <button style={btnStyle} className='text-white rounded-md py-2 px-6 text-[18px] font-semibold'>View Details</button>
                </NavLink>
            </div>
        </div>
    );
};

export default DonationCard;