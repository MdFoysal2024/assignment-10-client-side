import React from 'react';

const DonationCard = ({ donation }) => {
    const { image, title, campaignType, description, amount, date, email, name } = donation || {};
    console.log(donation)
    return (
        <div>
            DonationCard
            {/* <img src={image} alt="" /> */}



            <div className="card bg-slate-500 w-96 shadow-xl">
                <figure>
                    <img className='w-full'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">${amount}</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default DonationCard;