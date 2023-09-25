/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';

const CampaignCard = ({ campaign }) => {

    const { id, capmpaign_image, capmpaign_title, capmpaign_category, category_bg, card_bg, text_button_bg } = campaign;

    const cardStyle = {
        'background': `${card_bg}`,
        'color': `${text_button_bg}`,
    }
    const categoryStyle = {
        'background': `${category_bg}`
    }

    return (
        <NavLink to={`/campaigns/${id}`}>
            <div style={cardStyle} className="rounded-lg cursor-pointer">
                <img className='w-full rounded-lg' src={capmpaign_image} alt="" />
                <div className="py-4 pl-4">
                    <h5 style={categoryStyle} className="font-medium text-[14px] rounded-lg py-1 px-[10px] inline-block">{capmpaign_category}</h5>
                    <h3 className="font-semibold text-[20px] mt-3">{capmpaign_title}</h3>
                </div>
            </div>
        </NavLink>
    );
};

export default CampaignCard;