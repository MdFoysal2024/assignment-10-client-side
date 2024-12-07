import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const CampaignUpdate = () => {



    const { id } = useParams();
    // console.log(id)

    const [updateCampaign, setUpdateCampaign] = useState({})

    const { image, title, campaignType, description, amount, date, name, email } = updateCampaign || {};

    useEffect(() => {
        fetch(`http://localhost:5000/updateCampaign/${id}`)
            .then(res => res.json())
            .then(data => {
                setUpdateCampaign(data)
                // console.log(data)
            })



    }, [])

    // console.log(updateCampaign)

    const handleUpdateCampaign = event => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const title = form.title.value;
        const campaignType = form.campaignType.value;
        const description = form.description.value;
        const amount = form.amount.value;
        const date = form.date.value;
        const email = form.email.value;
        const name = form.name.value;

        const newUpdateCampaign = { image, title, campaignType, description, amount, date, email, name }

        // console.log(image, title, campaignType, description, amount, date)
        // console.log(newUpdateCampaign);


        fetch(`http://localhost:5000/newUpdateCampaign/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(newUpdateCampaign)
        })

            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Campaign Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Thank You'
                    })
                }

            })







    }

    return (
        <div>

            <div >
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Campaign Update</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>

            </div>

            <div className=" container mx-auto bg-[#fde3e1] shadow-xl  mt-16 p-24 my-24 text-center flex flex-col ">
                <h2 className="text-5xl pb-8 font-extrabold">Update <span className='text-red-500'>Campaign</span> </h2>
                <form onSubmit={handleUpdateCampaign}>

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
                    <div className="md:flex mb-8 gap-4">

                        <div className="form-control   md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Email</span>

                            </label>
                            <label className="input-group">
                                <input type="email" name="email" placeholder="User Email" className="input input-bordered w-full " defaultValue={email} />

                            </label>

                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Name</span>

                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="User Name" className="input input-bordered w-full " defaultValue={name} />

                            </label>

                        </div>
                    </div>

                    <input type="submit" value="Update Campaign" className="btn w-full  bg-[#dd4e41] font-bold hover:text-black text-white text-lg" />


                    {/* <Link to='/myCampaign'>
                        <input type="submit" value="Update Campaign" className="btn w-full  bg-[#dd4e41] font-bold hover:text-black text-white text-lg" />
                    </Link> */}

                </form>
            </div>
        </div>
    );
};

export default CampaignUpdate;