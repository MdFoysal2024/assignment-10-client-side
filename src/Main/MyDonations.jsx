
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import DonationCard from '../components/DonationCard';


const MyDonations = () => {

    const [myDonations, setMyDonations] = useState([]);

    //https://crowd-funding-server-xi.vercel.app/myDonations


    // https://crowd-funding-server-xi.vercel.app/campaigns

    useEffect(() => {
        fetch('https://crowd-funding-server-xi.vercel.app/myDonations')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyDonations(data)
            })
    }, [])

    console.log(myDonations)



    return (
        <div className="w-10/12 mx-auto py-24">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Donations</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className='text-5xl pb-12 font-bold text-center'>

                My  All <span className='text-red-500'>Donations   </span>
            </h2>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-6'>
                {
                 myDonations.map(donation=>
                 <DonationCard 
                 key={donation._id}
                 donation={donation}
                 ></DonationCard>)   
                }
            </div>
        </div>
    );
};

export default MyDonations;