import React, { useContext } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../provider/AuthProvider';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';

const MyCampaign = () => {

    const { user } = useContext(AuthContext);
    console.log(user.email);
    const [myCampaign, setMyCampaign] = useState([]);

    // http://localhost:5000/campaigns

    useEffect(() => {
        fetch(`http://localhost:5000/myCampaign/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMyCampaign(data)
            })
    }, [user])

    console.log(myCampaign)



    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {

                    console.log('Delete Confirmed');
                    fetch(`http://localhost:5000/deleteCampaign/${_id}`, {
                        method: "DELETE",

                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Campaign has been deleted.",
                                    icon: "success"
                                });


                                const remaining = myCampaign.filter(camp => camp._id !== _id)
                                setMyCampaign(remaining)
                            }
                        })
                }
            });

    }









    return (
        <div className="w-10/12 mx-auto py-24">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Campaign</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className='text-center pb-12 text-5xl font-bold'>

                My <span className='text-red-500'>Campaign</span> 
            </h2>

            {/* user info({users.length}) */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-slate-500 text-lg text-white '>
                            <th className='py-6 pl-8'>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Donation Amount</th>
                            <th>DeadLine</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myCampaign.map((campaign, idx) =>
                                <tr className='bg-slate-300 text-lg' key={campaign._id}>
                                    <th className='pl-8'>{idx + 1}</th>
                                    <td>{campaign.name}</td>
                                    <td>{campaign.email}</td>
                                    <td className='font-bold'>${campaign.amount}</td>
                                    <td>{campaign.date}</td>

                                    <td>
                                        <Link to={`/campaignUpdate/${campaign._id}`}>
                                            <button className="btn text-lg"><GrEdit /></button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(campaign._id)}
                                            className="btn ml-2 text-xl"><MdDeleteForever /></button>
                                    </td>

                                </tr>


                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCampaign;