import React from 'react';

const Menulinks = [
    {
        id: 1,
        name: "Home",
        link: "/#home",
    },
    {
        id: 2,
        name: "Orders",
        link: "/#orders",
    },
    {
        id: 3,
        name: "Logout",
        link: "/#logout",
    },
]



const Navbar = ( ) => {
    return (
    <div className='bg-white dark:bg-gray-900
    dark:text-white duration-200 relative z-40'>
        <div className='py-4'>
            <div className="container">
                {/*logo and links section*/}
                <div className='flex items-centre gap-4'>
                    <a href="#" 
                    className='text-primary
                    font-semibold tracking-widest
                    text-2xl uppercase sm:text-3xl'
                    >
                        E-Hub
                    </a>
                    {/*Menu Items*/} 
                    <div className='hidden lg:block'>
                        <ul className='flex items-center gap-4'>
                            {Menulinks.map((data, index) =>(
                                    <li key={index}>
                                        <a href={data.link}
                                        className='inline-block px-4
                                        font-semibold text-gray-500
                                        hover:text-black
                                        dark:hover:text-white duration-200'
                                        >{data.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                 {/*Navbar section*/}
                 <div>
                {/*Search Bar section*/}
                <div>
                    <input type="text" placeholder='Search'
                    className='' />
                    <IoMdSearch/>
                </div>
                 </div>
            </div>
        </div>
    </div>
    );
};
export default Navbar;
