import Marquee from "react-fast-marquee";
import { Helmet } from "react-helmet";
import Banner from "./Banner";

const Home = () => {
    return (
        <div >

            {/* className="w-10/12 mx-auto py-24" */}
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>


            {/* Banner section */}
            <Banner></Banner>


            {/* Running Card section */}
            <div className="w-10/12 mx-auto py-24">
                Home page
                <Marquee className="">
                    <div className="ml-8">
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-8">
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-8">
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-8">
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-8">
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-8">
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Marquee>
            </div>

            {/* Works Card section */}

            <div className="w-10/12 mx-auto py-24">
                <h2 className="text-5xl font-extrabold text-center py-8">How It Works</h2>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 ">
                    <div className="text-center flex flex-col items-center space-y-4 p-12 m-4 bg-slate-200 border-2">
                        <img className="w-32 pb-4" src="https://icons-for-free.com/iff/png/512/dollar+funds+hand+payment+icon+icon-1320086640827007356.png" alt="" />
                        <h3 className="text-3xl font-bold  text-red-500">Fund a Campaign</h3>
                        <p>Meet individuals seeking healthcare and classroom supplies and donate as low as $5 to make it possible for them.</p>
                    </div>
                    <div className="text-center flex flex-col items-center space-y-4 p-12 m-4 bg-slate-200 border-2">
                        <img className="w-32 pb-4" src="https://img.freepik.com/premium-vector/representative-icon-vector-image-can-be-used-compliance-regulation_120816-403809.jpg" alt="" />
                        <h3 className="text-3xl font-bold text-red-500">We Do Our Part</h3>
                        <p>Funds of fully funded campaigns are transferred to healthcare partners upon treatment confirmation and handle health insurance registration.</p>
                    </div>
                    <div className="text-center flex flex-col items-center space-y-4 p-12 m-4 bg-slate-200 border-2">
                        <img className="w-32 pb-4" src="https://cdn-icons-png.flaticon.com/512/4370/4370942.png" alt="" />
                        <h3 className="text-3xl font-bold text-red-500">Get Solid Updates</h3>
                        <p>We send you solid updates like photos, videos, cost receipts and thank you letters. You will know the impact you have made.</p>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Home;