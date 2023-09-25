/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const useGetCampaigns = () => {
    const [campaigns, setCampaigns] = useState([]);
    useEffect(() => {
        fetch("/campaigns.json")
            .then((res) => res.json())
            .then((data) => setCampaigns(data));
    }, []);
    return {campaigns};
};

export default useGetCampaigns;
