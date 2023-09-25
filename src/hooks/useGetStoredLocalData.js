/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
const useGetStoredLocalData = (key) => {
    const [storedCampaigns, setStoredCampaigns] = useState([]);
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem(key));
        if (storedData) {
            setStoredCampaigns(storedData);
        } else {
            setStoredCampaigns([]);
        }
    }, [key]);
    return { storedCampaigns };
};

export default useGetStoredLocalData;