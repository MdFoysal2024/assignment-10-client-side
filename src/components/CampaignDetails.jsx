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
                        text: 'You Have Donated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Thank You'
                    })
                }

            })



    }



    return (
        <div className="w-10/12 mx-auto py-24">

            <div className="hero bg-red-50  py-24">
                <div className="hero-content flex-col items-start gap-24 lg:flex-row">

                    <div className='lg:w-1/2'>

                        <img
                            src={image}
                            className=" w-full " />
                    </div>
                    <div className='lg:w-1/2'>
                        <div className='space-y-4'>

                            <h1 className="text-5xl font-semibold pb-8">{title}</h1>
                            <h3 className='text-2xl font-bold'>{campaignType}</h3>
                            <p><span className='font-bold text-lg'>Deadline: </span>{date}</p>
                            <p className="py-4    font-medium">
                                <span className='font-bold text-lg '>Description: </span>
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <div className='flex flex-col space-y-2 pb-4 justify-between'>
                                <p><span className='font-bold'>User Name: </span>{name}</p>
                                <p><span className='font-bold'>User Email: </span>{email}</p>
                                <p><span className='font-bold'>Donation Amount: </span>${amount}</p>
                            </div>
                            <button
                                onClick={handleDonate}
                                className="btn rounded-none text-lg bg-red-500 font-bold text-white">Donate Here</button>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default CampaignDetails;