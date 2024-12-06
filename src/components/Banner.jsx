import React from 'react';

const Banner = () => {
    return (
        <div >
           
           <div className="carousel w-full   ">
                <div id="slide1" className="carousel-item h-screen relative w-full bg-no-repeat bg-cover 
                bg-[url('https://www.universitiesfund.go.ke/wp-content/uploads/2024/02/Funding-2.jpg')]">
                   
                   <div className="hero-overlay bg-opacity-80"></div>

                   <div className="absolute text-white  text-center lg:left-44 lg:right-44 flex flex-col items-center bg-center justify-center top-1/3 lg:top-1/2 lg:-translate-y-1/2 transform ">
                        <h2 className=" text-3xl lg:text-8xl font-black text-white  ">Comparing the Top Online Fundraising </h2>
                        <p className=" w-full lg:w-1/2 mx-auto  text-center p-6">Crowdfunding is a way to raise money for an individual or organization by collecting donations through family, friends,  donors than traditional forms of fundraising. </p>
                        <button className="btn font-bold hover:text-black text-white bg-[#212b3b]">START A CAMPAIGN</button>
                    </div>



                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full bg-no-repeat bg-cover 
                bg-[url('https://blog.fortunaadvisors.com.au/hubfs/business%20funding.jpg')] ">
                    

                    <div className="hero-overlay bg-opacity-80"></div>

                    <div className="absolute text-white  text-center lg:left-44 lg:right-44 flex flex-col items-center bg-center justify-center top-1/3 lg:top-1/2 lg:-translate-y-1/2 transform ">
                        <h2 className=" text-3xl lg:text-8xl font-black ">Comparing the Top Online Fundraising </h2>
                        <p className=" w-full lg:w-1/2 mx-auto  text-center p-6">Crowdfunding is a way to raise money for an individual or organization by collecting donations through family, friends,  donors than traditional forms of fundraising. </p>
                        <button className="btn font-bold hover:text-black text-white bg-[#212b3b]">START A CAMPAIGN</button>
                    </div>


                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full bg-no-repeat bg-cover 
                bg-[url('https://images.yourstory.com/cs/2/11718bd02d6d11e9aa979329348d4c3e/Imageqxmu-1674912999731.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75')] ">
                    
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="absolute text-white  text-center lg:left-44 lg:right-44 flex flex-col items-center bg-center justify-center top-1/3 lg:top-1/2 lg:-translate-y-1/2 transform ">
                        <h2 className=" text-3xl lg:text-8xl font-black ">Comparing the Top Online Fundraising </h2>
                        <p className=" w-full lg:w-1/2 mx-auto  text-center p-6">Crowdfunding is a way to raise money for an individual or organization by collecting donations through family, friends,  donors than traditional forms of fundraising. </p>
                        <button className="btn font-bold hover:text-black text-white bg-[#212b3b]">START A CAMPAIGN</button>
                    </div>


                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full bg-no-repeat bg-cover 
                bg-[url('https://www.grantfinder.co.uk/wp-content/uploads/2023/05/Scottish-Programme-for-Boundary-Pushing-Short-Films-Invites-Applications.jpg')] 

                ">
                     <div className="hero-overlay bg-opacity-80"></div>

                    <div className="absolute  text-white text-center lg:left-44 lg:right-44 flex flex-col items-center justify-center top-1/3 lg:top-1/2 lg:-translate-y-1/2 transform ">
                        <h2 className=" text-3xl lg:text-8xl font-extrabold">Comparing the Top Online Fundraising </h2>
                        <p className=" w-full lg:w-1/2 mx-auto  text-center p-6">Crowdfunding is a way to raise money for an individual or organization by collecting donations through family, friends,  donors than traditional forms of fundraising. </p>

                        <button className="btn font-bold hover:text-black text-white bg-[#212b3b]">START A CAMPAIGN</button>
                    </div>


                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;