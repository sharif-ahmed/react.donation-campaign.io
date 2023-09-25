/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import { Chart } from "react-google-charts";
import useGetStoredLocalData from './../../hooks/useGetStoredLocalData';

const Statistics = () => {

    const { storedCampaigns } = useGetStoredLocalData("donated_campaigns");

    const data = [
        ["Task", "Percentage",],
        ["My Donations", storedCampaigns.length, ],
        ["Remain Donations", 12 - storedCampaigns.length,], // CSS-style declaration
    ];

    const options = {
        // title: "My All Donation Activities",
        is3D: false,
        colors: ['#00c49f', '#ff444a',],
        legend: { position: 'bottom' },
    };

    return (
        <div className="container mx-auto">
            <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    );
};

export default Statistics;