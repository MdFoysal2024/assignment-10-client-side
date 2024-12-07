
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';


const MyDonations = () => {

    const [myDonations, setMyDonations] = useState([]);

    //http://localhost:5000/myDonations


    // http://localhost:5000/campaigns

    useEffect(() => {
        fetch('http://localhost:5000/myDonations')
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
            <h2 className='text-3xl font-bold text-center'>

                My Donations({myDonations.length})
            </h2>
        </div>
    );
};

export default MyDonations;