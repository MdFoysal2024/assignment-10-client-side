import React from 'react';
import { Helmet } from 'react-helmet';

const AddCampaign = () => {



    const handleAddCoffee = event => {
        event.preventDefault();
        console.log("Added Coffee")
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;


        const newCoffee = { name, quantity, supplier, taste, category, details, photo }

        console.log(name, quantity, supplier, taste, category, details, photo)
        console.log(newCoffee);

    }









    return (
    <div>

        <div >
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add Campaign</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
           
        </div>

        <div className=" container mx-auto bg-[#fc4c3f]  mt-16 p-24 my-24 text-center flex flex-col ">
        <h2 className="text-4xl py-4 font-extrabold">Add New Campaign</h2>
        <form onSubmit={handleAddCoffee}>
            {/* coffee name  */}
            <div className="md:flex mb-8 gap-4">
                <div className="form-control  md:w-1/2 ">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Image</span>

                    </label>
                    <label className="input-group">
                        <input type="text" name="image" placeholder="Campaign Image Url" className="input input-bordered w-full " />

                    </label>

                </div>
                <div className="form-control  md:w-1/2 ">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Campaign Title</span>

                    </label>
                    <label className="input-group">
                        <input type="text" name="title" placeholder="Campaign Title Here " className="input input-bordered w-full " />

                    </label>

                </div>
            </div>

            
            <div className="md:flex  mb-8 gap-4">

                <div className="form-control  md:w-1/2 ">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Campaign Type</span>

                    </label>
                    <label className="input-group">
                        <input type="text" name="campaignType" placeholder="Campaign Type Here " className="input input-bordered w-full " />

                    </label>

                </div>
                <div className="form-control  md:w-1/2 ">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Description</span>

                    </label>
                    <label className="input-group">
                        <input type="text" name="description" placeholder="Your Campaign Description" className="input input-bordered w-full " />

                    </label>

                </div>
            </div>
            <div className="md:flex mb-8 gap-4">

                <div className="form-control   md:w-1/2 ">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Donation Amount</span>

                    </label>
                    <label className="input-group">
                        <input type="number" name="amount" placeholder="Minimum donation amount" className="input input-bordered w-full " />

                    </label>

                </div>
                <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text font-bold text-lg">DeadLine</span>

                    </label>
                    <label className="input-group">
                        <input type="date" name="date" placeholder="08/12/2024" className="input input-bordered w-full " />

                    </label>

                </div>
            </div>
            <div className="md:flex mb-8 gap-4">

                <div className="form-control   md:w-1/2 ">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Email</span>

                    </label>
                    <label className="input-group">
                        <input type="email" name="email" placeholder="User Email" className="input input-bordered w-full " />

                    </label>

                </div>
                <div className="form-control md:w-1/2 ">
                    <label className="label">
                        <span className="label-text font-bold text-lg">Name</span>

                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="User Name" className="input input-bordered w-full " />

                    </label>

                </div>
            </div>
            
            <input type="submit" value="Add Campaign" className="btn btn-block" />
        </form>
    </div>
    </div>




    );
};

export default AddCampaign;