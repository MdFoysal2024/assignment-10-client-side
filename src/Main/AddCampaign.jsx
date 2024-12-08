
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2'

const AddCampaign = () => {



    const handleAddCampaign = event => {

        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const title = form.title.value;
        const campaignType = form.campaignType.value;
        const description = form.description.value;
        const amount = form.amount.value;
        const date = form.date.value;
        const email = form.email.value;
        const name = form.name.value;


        const newCampaign = { image, title, campaignType, description, amount, date, email, name }

        console.log(image, title, campaignType, description, amount, date, email, name)
        console.log(newCampaign);

        fetch('https://crowd-funding-server-xi.vercel.app/campaigns', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(newCampaign)
        })

        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success',
                    text: 'Campaign Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Thank You'
                })
            }

        })


    }



    return (
        <div className='mx-6'>

            <div >
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Add Campaign</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>

            </div>

            <div className=" container mx-auto bg-[#fde3e1] shadow-xl  mt-16 p-24 my-24 text-center flex flex-col ">
                <div className='pb-12 text-center'>

                <h2 className="text-5xl pb-4 font-extrabold">Add New <span className='text-red-500'>Campaign</span> </h2>
                <p className='text-gray-500 lg:w-1/2 mx-auto'>WhyDonate makes online fundraising easy and accessible for charities and individuals around the world. 0% platform fees, so let’s get started.</p>
                </div>
                <form onSubmit={handleAddCampaign}>
                 
                    <div className="md:flex mb-8 gap-4">
                        <div className="form-control  md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold text-lg">Image</span>

                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="Campaign Image Url" className="input input-bordered w-full "  required/>

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

                    <input type="submit" value="Add Campaign" className="btn w-full  bg-[#dd4e41] font-bold hover:text-black text-white text-lg" />
                </form>
            </div>
        </div>

    );
};

export default AddCampaign;