import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useParams } from 'react-router-dom';

const CampaignUpdate = () => {


    // const campaignData = useLoaderData(); 
    // console.log(campaignData)

    const { id } = useParams();
    console.log(id)

    const [updateCampaign, setUpdateCampaign] = useState({})

    const { image, title, campaignType, description, amount, date } = updateCampaign || {};

    useEffect(() => {
        fetch(`http://localhost:5000/updateCampaign/${id}`)
            .then(res => res.json())
            .then(data => {
                setUpdateCampaign(data)
                // console.log(data)
            })



    }, [])

    // console.log(updateCampaign)



    return (
        <div>

            <div >
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Campaign Update</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>

            </div>
            {/* onSubmit={handleAddCampaign} */}
            <div className=" container mx-auto bg-[#fde3e1] shadow-xl  mt-16 p-24 my-24 text-center flex flex-col ">
                <h2 className="text-5xl pb-8 font-extrabold">Update <span className='text-red-500'>Campaign</span> </h2>
                <form >

                    <div className="md:flex mb-8 gap-4">
                        <div className="form-control  md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Image</span>

                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="Campaign Image Url" className="input input-bordered w-full " required defaultValue={image} />

                            </label>

                        </div>
                        <div className="form-control  md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Campaign Title</span>

                            </label>
                            <label className="input-group">
                                <input type="text" name="title" placeholder="Campaign Title Here " className="input input-bordered w-full " defaultValue={title} />

                            </label>

                        </div>
                    </div>


                    <div className="md:flex  mb-8 gap-4">

                        <div className="form-control  md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Campaign Type</span>

                            </label>
                            <label className="input-group">
                                <input type="text" name="campaignType" placeholder="Campaign Type Here " className="input input-bordered w-full " defaultValue={campaignType} />

                            </label>

                        </div>
                        <div className="form-control  md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Description</span>

                            </label>
                            <label className="input-group">
                                <input type="text" name="description" placeholder="Your Campaign Description" className="input input-bordered w-full " defaultValue={description} />

                            </label>

                        </div>
                    </div>
                    <div className="md:flex mb-8 gap-4">

                        <div className="form-control   md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Donation Amount</span>

                            </label>
                            <label className="input-group">
                                <input type="number" name="amount" placeholder="Minimum donation amount" className="input input-bordered w-full " defaultValue={amount} />

                            </label>

                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold text-lg">DeadLine</span>

                            </label>
                            <label className="input-group">
                                <input type="date" name="date" placeholder="08/12/2024" className="input input-bordered w-full " defaultValue={date} />

                            </label>

                        </div>
                    </div>
                    {/* <div className="md:flex mb-8 gap-4">

                    <div className="form-control   md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold text-lg">Email</span>

                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="User Email" className="input input-bordered w-full " />

                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-bold text-lg">Name</span>

                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="User Name" className="input input-bordered w-full " />

                        </label>

                    </div>
                </div> */}

                    <input type="submit" value="Update Campaign" className="btn w-full  bg-[#dd4e41] font-bold hover:text-black text-white text-lg" />
                </form>
            </div>
        </div>
    );
};

export default CampaignUpdate;