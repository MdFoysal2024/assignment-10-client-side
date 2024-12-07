import { Link } from "react-router-dom";





const CampaignCard = ({campaign}) => {
    // { campaign, campaigns, setCampaigns }
    const { _id, image, title, campaignType, description, amount, date, email, name } = campaign || {};

    // console.log(campaign)

    return (
        <div>
            <div className="card bg-gray-200 rounded-none  ">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="image"
                        className=" w-full" />
                </figure>
                <div className="card-body  text-left">
                    <h2 className=" text-left text-2xl font-bold text-blue-950 uppercase">{title}</h2>
                    <h3 className="text-lg text-gray-500 font-semibold"> <span className=" text-red-500  text-xl font-bold">DeadLine: </span> {date}</h3>
                    <p className="text-gray-500 py-2">{description}</p>
                    <div className="card-actions">
                        <Link to={`/campaignDetails/${_id}`}>
                            <button className='bg-red-500  font-bold text-white py-2 px-8 cursor-pointer 
                            
                            '>See More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;