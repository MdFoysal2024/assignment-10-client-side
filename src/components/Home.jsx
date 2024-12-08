
import { Helmet } from "react-helmet";
import Banner from "./Banner";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CampaignCard from "./CampaignCard";


const Home = () => {


    const campaignData = useLoaderData()
    // const [runningCampaigns, setRunningCampaigns] = useState(campaignData)

    console.log(campaignData)
    return (
        <div >

            {/* className="w-10/12 mx-auto py-24" */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>


            {/* Banner section */}
            <Banner></Banner>
            <div className="w-10/12 mx-auto text-center py-4">



            </div>

            {/* Running Card section */}
            <div className="w-10/12 mx-auto py-24">
                <h2 className="text-center text-5xl pb-16 font-extrabold">Running <span className="text-red-500">Campaign</span> </h2>



                <div className="grid  gap-16 justify-between w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        campaignData.slice(0, 6).map(campaign => <CampaignCard key={campaign._id} campaign={campaign}></CampaignCard>)
                    }
                </div>



            </div>





            {/* Works Card section */}

            <div className="w-10/12 mx-auto py-24">
                <h2 className="text-5xl font-extrabold text-center py-8">How It <span className="text-red-500">Works</span></h2>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 ">
                    <div className="text-center flex flex-col items-center space-y-4 p-12 m-4 bg-slate-200 border-2">
                        <img className="w-32 pb-4" src="https://icons-for-free.com/iff/png/512/dollar+funds+hand+payment+icon+icon-1320086640827007356.png" alt="" />
                        <h3 className="text-3xl font-bold  text-red-500">Fund a Campaign</h3>
                        <p>Meet individuals seeking healthcare and classroom supplies and donate as low as $5 to make it possible for them.</p>
                    </div>
                    <div className="text-center flex flex-col items-center space-y-4 p-12 m-4 bg-slate-200 border-2">
                        <img className="w-32 pb-4" src="https://img.freepik.com/premium-vector/representative-icon-vector-image-can-be-used-compliance-regulation_120816-403809.jpg" alt="" />
                        <h3 className="text-3xl font-bold text-red-500">We Do Our Part</h3>
                        <p>Funds of fully funded campaigns are transferred to healthcare partners upon treatment confirmation and handle health insurance registration.</p>
                    </div>
                    <div className="text-center flex flex-col items-center space-y-4 p-12 m-4 bg-slate-200 border-2">
                        <img className="w-32 pb-4" src="https://cdn-icons-png.flaticon.com/512/4370/4370942.png" alt="" />
                        <h3 className="text-3xl font-bold text-red-500">Get Solid Updates</h3>
                        <p>We send you solid updates like photos, videos, cost receipts and thank you letters. You will know the impact you have made.</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Home;