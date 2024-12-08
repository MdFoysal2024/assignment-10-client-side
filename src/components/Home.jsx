
import { Helmet } from "react-helmet";
import Banner from "./Banner";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CampaignCard from "./CampaignCard";
import Typewriter from 'typewriter-effect';


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
            <div className="w-10/12 mx-auto  pt-24">

                <div className="hero bg-base-200 py-24">
                    <div className="hero-content p-12  gap-16 flex flex-col lg:flex-row  ">

                        <div className="space-y-6">
                            <h1 className=" text-3xl lg:text-6xl font-extrabold">

                                <span className="text-red-500"> Fundraising </span>

                                for

                        
                                <Typewriter
                                    options={{
                                        strings: ['your charity', 'your charity'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />


                                </h1>
                            <p className="py-6">
                                Join a host of amazing charities already using Crowdfunder’s charity fundraising platform to access unique features and engage with supporters in a new way. Start your charity’s fundraising journey today with zero platform fees.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>

                            <Link to='/addNewCampaign'>
                                <button className="btn font-bold hover:text-black text-white text-lg px-8 bg-red-500">START  CAMPAIGN</button>
                            </Link>
                        </div>

                        <img
                            src="https://media.licdn.com/dms/image/v2/D4E10AQHQ0M-TILuE6A/image-shrink_800/image-shrink_800/0/1730311250250?e=2147483647&v=beta&t=KdO-EGo8V8ZhIHfr-Y3sDSS4qR7hIEdAt-WOGmuBIOY"
                            className="lg:w-1/2 " />
                    </div>
                </div>

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
            <div className="bg-slate-200 mb-24 ">

                <div className="w-10/12 mx-auto py-24">
                    <h2 className="text-5xl font-extrabold text-center pb-8">How It <span className="text-red-500">Works</span></h2>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
                        <div className="text-center flex flex-col items-center space-y-4 p-8 m-2 bg-white border-2">
                            <img className="w-24 pb-4" src="https://icons-for-free.com/iff/png/512/dollar+funds+hand+payment+icon+icon-1320086640827007356.png" alt="" />
                            <h3 className="text-3xl font-bold  text-red-500">Fund a Campaign</h3>
                            <p>Meet individuals seeking healthcare and classroom supplies and donate as low as $5 to make it possible for them.</p>
                        </div>
                        <div className="text-center flex flex-col items-center space-y-4 p-8 m-2 bg-white border-2">
                            <img className="w-24 pb-4" src="https://img.freepik.com/premium-vector/representative-icon-vector-image-can-be-used-compliance-regulation_120816-403809.jpg" alt="" />
                            <h3 className="text-3xl font-bold text-red-500">We Do Our Part</h3>
                            <p>Funds of fully funded campaigns are transferred upon treatment confirmation and handle health insurance registration.</p>
                        </div>
                        <div className="text-center flex flex-col items-center space-y-4 p-8 m-2 bg-white border-2">
                            <img className="w-24 pb-4" src="https://cdn-icons-png.flaticon.com/512/4370/4370942.png" alt="" />
                            <h3 className="text-3xl font-bold text-red-500">Get Solid Updates</h3>
                            <p>We send you solid updates like photos, videos, cost receipts and thank you letters. You will know the impact you have made.</p>
                        </div>
                        <div className="text-center flex flex-col items-center space-y-4 p-8 m-2 bg-white border-2">
                            <img className="w-24 pb-4" src="https://crowdfrica.org/assets/icon_celebration-692d5a821724ce88de608360d3a7b97dd0688925abcf1c21d1768d2679c1c740.svg" alt="" />
                            <h3 className="text-3xl font-bold text-red-500">Celebration</h3>
                            <p>Friends and families or bring together people with common interests to support ,  classroom projects, and universal health.</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Home;