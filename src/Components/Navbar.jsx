import React, { useState } from 'react'
import menu from './MenuApi.js';
import Menucard from './Menucard.jsx';

const Navbar = ({addtocart}) => {

    const uniqueList = [
        ...new Set(
            menu.map((curElem) => {
                return curElem.Category;
            })
        ), "All",
    ];

    const [menulist, setmenulist] = useState(uniqueList)
    const [menudata, setmenudata] = useState(menu);


    const filterItem = (category) => {
        if (category === "All") {
            setmenudata(menu);
            return;
        }
        const updatedList = menu.filter((curElem) => {
            return curElem.Category === category;

        });

        setmenudata(updatedList);
    }


    return (
        <>
            <nav className="hidden md:ml-0 md:mr-0 md:flex lg::flex-wrap md:items-center lg:justify-evenly md:justify-center md:space-x-5 text-base  h-20 text-white bg-gray-900 ">
                {
                    menulist.map((curElem, index) => {
                        return (
                            <a key={index} onClick={() => filterItem(curElem)} className="mr-5 mt-24 hover:text-red-500 cursor-pointer bg-gray-700 py-2 text-lg  px-8 text-green-500 font-bold rounded-md ">{curElem}</a>
                        )
                    })
                }


            </nav>
            <Menucard menudata={menudata} addtocart={addtocart} />
        </>
    )
}

export default Navbar
