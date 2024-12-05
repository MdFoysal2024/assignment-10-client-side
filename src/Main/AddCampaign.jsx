import React from 'react';
import { Helmet } from 'react-helmet';

const AddCampaign = () => {
    return (
        <div className="w-10/12 mx-auto py-24">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add Campaign</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            Add New Campaign
        </div>
    );
};

export default AddCampaign;