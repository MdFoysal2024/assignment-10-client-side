import React from 'react';

const DonationCard = ({ donation }) => {
    const { image, title, campaignType, description, amount, date, email, name } = donation || {};
    console.log(donation)
    return (
        <div>
            

            <div className=" border-2 border-gray-300 p-6 bg-blue-100 ">
                <figure>
                    <img className='w-full'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title ">
                        <span className='font-bold'>Donation:</span>
                       
                        <div className="badge badge-secondary">${amount}</div>
                    </h2>
                    <h2 className="text-2xl text-red-500 font-bold">
                       {title}
                        
                    </h2>
                    <p  className='text-gray-500'>{description}</p>
                    
                </div>
            </div>



        </div>
    );
};

export default DonationCard;