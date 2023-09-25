/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import useGetCampaigns from "../../hooks/useGetCampaigns";
import { useEffect, useState } from "react";
import CampaignCard from "../CampaignCard/CampaignCard";
import useGetStoredLocalData from "../../hooks/useGetStoredLocalData";

const CampaignDetails = () => {

    const { storedCampaigns } = useGetStoredLocalData("donated_campaigns");

    const [allStoredCampaigns, setAllStoredCampaigns] = useState([]);

    const { id } = useParams();

    const { campaigns } = useGetCampaigns();

    const [campaign, setCampaign] = useState({});

    const [allCampaigns, setAllCampaigns] = useState([]);

    const { capmpaign_image, capmpaign_title, capmpaign_description, capmpaign_price, capmpaign_category, category_bg, card_bg, text_button_bg } = campaign || {};


    useEffect(() => {
        setAllStoredCampaigns(storedCampaigns);
    }, [storedCampaigns])

    useEffect(() => {
        setAllCampaigns(campaigns);
    }, [campaigns])

    useEffect(() => {
        console.log(allCampaigns);
        const findData = allCampaigns?.find((camp) => camp.id === parseInt(id));
        setCampaign(findData);
        console.log(findData);
    }, [allCampaigns, id])

    const btnStyle = {
        "background": `${text_button_bg}`
    }

    const handleDonate = () => {
        const existInLocal = allStoredCampaigns.find((camp) => camp.id === parseInt(id));
        if (!existInLocal) {
            const newStored = [...allStoredCampaigns, campaign];
            localStorage.setItem("donated_campaigns", JSON.stringify(newStored));
            setAllStoredCampaigns(newStored);
        } else {
            alert("Already Donated This Campaign");
        }
    }

    return (

        <div className="container mx-auto">
            <div className="p-4 lg:p-0">
                <div className="rounded-lg mx-auto relative">
                    <img className="w-[100%]" src={capmpaign_image} alt="" />
                    <div className="bg-[#0B0B0B80] bg-opacity-50 bg-blend-overlay p-4 lg:p-9 absolute bottom-0 left-0 right-0">
                        <button onClick={handleDonate} style={btnStyle} className="text-white text-[20px] py-2 px-5 lg:py-4 lg:px-8 rounded-md font-semibold">Donate ${capmpaign_price}</button>
                    </div>
                </div>
            </div>
            <h2 className="font-bold text-[30px] lg:text-[40px] lg:my-6 p-4 lg:p-0">{capmpaign_title}</h2>
            <p className="text-base font-normal leading-[30px] text-justify p-4 lg:p-0 ">{capmpaign_description}</p>
        </div>
    );
};

export default CampaignDetails;