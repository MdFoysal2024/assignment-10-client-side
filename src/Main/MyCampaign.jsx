import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../provider/AuthProvider';
import { useState } from 'react';

const MyCampaign = () => {

    const { user } = useContext(AuthContext);
    console.log(user.email);
const [myCampaign, setMyCampaign] = useState();

    http://localhost:5000/campaigns

    useEffect(() => {
        fetch(`http://localhost:5000/myCampaign/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setMyCampaign(data)
        })
    }, [])

    console.log(myCampaign)


    return (
        <div className="w-10/12 mx-auto py-24">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Campaign</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            My Campaign
        </div>
    );
};

export default MyCampaign;