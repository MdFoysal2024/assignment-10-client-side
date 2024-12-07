import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import CampaignCard from '../components/CampaignCard';

const AllCampaign = () => {

    const campaignData = useLoaderData()
    const [campaigns, setCampaigns] = useState(campaignData)

    console.log(campaignData)
    return (
        <div className="w-10/12 mx-auto py-24">
            <Helmet>
                <meta charSet="utf-8" />
                <title>All Campaign</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h3 className='text-center font-bold text-4xl pb-12'>

                All Campaign Here({campaigns.length})
            </h3>



            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='text-lg'>
                        <tr className='bg-slate-600 text-lg text-white'>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Campaign Title</th>
                            <th>Donation Amount</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            campaigns.map((campaign, idx) =>
                                <tr className='bg-slate-300 ' key={campaign._id}>
                                    <th>{idx + 1}</th>
                                    <td>{campaign.name}</td>
                                    <td>{campaign.email}</td>
                                    <td>{campaign.title}</td>
                                    <td>{campaign.amount}$</td>
                                    <td>
                                        <Link to={`/campaignDetails/${campaign._id}`}>
                                            <button className='bg-red-500 font-bold text-white py-2 px-3 cursor-pointer'>See More</button>
                                        </Link>

                                    </td>

                                </tr>


                            )
                        }


                    </tbody>
                </table>
            </div>









        </div>
    );
};

export default AllCampaign;