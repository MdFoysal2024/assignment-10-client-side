import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import logo from '../assets/crowdfunding-logo.png'
import { IoPersonCircleOutline } from "react-icons/io5";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user)



    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/allCampaign'>All Campaign</NavLink></li>
        <li><NavLink to='/addNewCampaign'>Add New Campaign</NavLink></li>
        <li><NavLink to='/myCampaign'>My  Campaign</NavLink></li>
        <li><NavLink to='/myDonations'>My Donations</NavLink></li>

    </>


    return (
        <div className=" bg-slate-100  shadow-lg">
          
            <div className="navbar py-4 w-10/12 mx-auto text-[#212b3b]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-500 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                   
                    <a className="btn btn-ghost text-xl">
                        <img className="w-12 " src={logo} alt="" />
                        <h2 className="text-xl  md:text-3xl pl-2 font-extrabold">Crowd Funding</h2>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user && user?.email ?


                            <>
                                <div>

                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="" onClick={() => document.getElementById('my_modal_5').showModal()}>
                                        <img className="w-12 mt-2 border-2 border-white rounded-full  " src={user?.photoURL} alt="" />
                                    </button>
                                    <dialog id="my_modal_5" className="modal modal-top  pl-10 mt-16">
                                        <div className="bg-white px-8 py-12">
                                            <img className="w-16 mb-6  mx-auto rounded-full" src={user?.photoURL} alt="" />
                                            <h3 className="font-bold text-center text-black text-lg">{user?.displayName}</h3>
                                            <p className="py-4  text-center text-black">{user?.email}</p>
                                            <div className=" text-center ">

                                                <Link to="/signIn">
                                                <button onClick={logOut} className='  bg-[#394c69] text-lg  text-white font-extrabold 
                                                hover:bg-[#171e2b]
                                            
                                                rounded-none px-6 py-2'>Log-Out</button>
                                                </Link>

                                            </div>

                                            <div className="text-center">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn mt-6">Close</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>






                                {/*                                
                                <span>{user?.email}</span>
                                <span>{user?.displayName}</span>
                                <button onClick={logOut} className='btn btn-warning text-lg font-extrabold rounded-none px-6'>Log-Out</button> */}

                            </>
                            :
                            (<Link to='/signIn' className='btn text-3xl bg-slate-300 font-bold rounded-full '><IoPersonCircleOutline /></Link>)
                    }



                </div>
            </div>
        </div>
    );
};

export default Navbar;