import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const CampaignDetails = () => {

    const singleData = useLoaderData()
    console.log(singleData);

    const { image, title, campaignType, description, amount, date, email, name } = singleData || {};


    const handleDonate = () => {

        const donationData = { image, title, campaignType, description, amount, date, email, name }
        console.log(donationData)


        fetch('http://localhost:5000/myDonations', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(donationData)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success',
                    text: 'Campaign Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Thank You'
                })
            }

        })



    }



    return (
        <div className="w-10/12 mx-auto py-24">

            <div className="hero bg-purple-200  py-24">
                <div className="hero-content flex-col gap-24 lg:flex-row">
                    <img
                        src={image}
                        className="lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>

                        <div className='space-y-4'>

                            <h1 className="text-7xl font-semibold pb-8">{title}</h1>
                            <h3 className='text-2xl font-bold'>{campaignType}</h3>
                            <p><span className='font-bold'>Deadline: </span>{date}</p>
                            <p className="py-4 text-lg  font-medium">
                                <span className='font-bold '>Description: </span>
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <div className='flex justify-between'>
                                <p><span className='font-bold'>User Name: </span>{name}</p>
                                <p><span className='font-bold'>User Email: </span>{email}</p>
                                <p><span className='font-bold'>Donation Amount: </span>${amount}</p>
                            </div>
                            <button
                                onClick={handleDonate}
                                className="btn btn-primary">Donate Here</button>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default CampaignDetails;