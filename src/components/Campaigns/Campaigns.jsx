/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import useGetCampaigns from '../../hooks/useGetCampaigns';
import CampaignCard from '../CampaignCard/CampaignCard';
import useGetStoredLocalData from '../../hooks/useGetStoredLocalData';
import DonationCard from './../DonationCard/DonationCard';

const Campaigns = ({ campaigns }) => {

    const { storedCampaigns } = useGetStoredLocalData("donated_campaigns");

    if (campaigns) {
        return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    campaigns?.map((campaign, idx) => {
                        return <CampaignCard key={idx} campaign={campaign}></CampaignCard>
                    })
                }
            </div>
        );
    } else {


        const [isSeeAll, setIsSeeAll] = useState(false);

        const handleShowAll = () => {
            setIsSeeAll(!isSeeAll);
        }


        return (
            <div className='container mx-auto p-4 lg:p-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-8'>
                    {
                        isSeeAll ? storedCampaigns?.map((campaign, idx) => {
                            return <DonationCard key={idx} campaign={campaign}></DonationCard>
                        }) : storedCampaigns?.slice(0, 4)?.map((campaign, idx) => {
                            return <DonationCard key={idx} campaign={campaign}></DonationCard>
                        })
                    }
                </div>
                <button onClick={handleShowAll} className={`flex mx-auto bg-[#009444] py-3 px-8 
                font-medium text-[16px] rounded-lg text-white mt-5 mb-8 ${storedCampaigns.length >= 4 && !isSeeAll ? '' : 'hidden'}`}>{isSeeAll ? 'See Less' : 'See All'}</button>
            </div>
        );
    }

};

export default Campaigns;