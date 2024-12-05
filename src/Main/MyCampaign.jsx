import React from 'react';
import { Helmet } from 'react-helmet';

const MyCampaign = () => {
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