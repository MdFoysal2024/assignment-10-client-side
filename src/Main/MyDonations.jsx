import React from 'react';
import { Helmet } from 'react-helmet';

const MyDonations = () => {
    return (
        <div className="w-10/12 mx-auto py-24">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Donations</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            My Donations
        </div>
    );
};

export default MyDonations;