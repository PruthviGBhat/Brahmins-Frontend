import React, { useState } from 'react'
import menu from './MenuApi'
import { toast } from 'react-toastify'; 


const Myorders = ({ orders,removeFromOrders}) => {
   const [counts, setCounts] = useState(orders.map(() => 1));
  const [SelectedItems,setSelectedItems]=useState([]);

    const increment = (index) => {
        const newCounts = [...counts];
        newCounts[index] += 1;
        setCounts(newCounts);
    };

    const decrement = (index) => {
        if (counts[index] > 0) {
            const newCounts = [...counts];
            newCounts[index] -= 1;
            setCounts(newCounts);
        }
    }
    const deletetoast =()=>{
        toast.error("Order Deleted Successfully", {
          position: "top-center"})
    }
    return (
        <>
            <div className='ml-10 mt-5 mb-5 flex flex-col justify-center text-2xl font-bold bg-green-200 w-1/4 h-1/6 items-center'>
                <h1>Total : $
                    {
                       orders.map((item, index) => parseFloat(item.Price * counts[index])).reduce((total, value) => total + value, 0)
                    }
                </h1>
               
            </div>

               {orders.map((e, index) => {
                    return (

                        <div className=" mx-10 mt-1">
                            <div className="flex shadow-md ">
                                <div className="w-full bg-white px-10 py-10">

                                    <div className="flex mt-10 mb-5">
                                        <h3 className="font-semibold text-gray-600 text-base uppercase w-2/5">Product Details</h3>
                                        <h3 className="font-semibold text-center text-gray-600 text-base uppercase w-1/5 ">Quantity</h3>
                                        <h3 className="font-semibold text-center text-gray-600 text-base uppercase w-1/5 ">Price</h3>
                                        <h3 className="font-semibold text-center text-gray-600 text-base uppercase w-1/5 ">Total</h3>
                                    </div>
                                    <div className="flex items-center  -mx-8 px-6 py-5">
                                        <div className="flex w-2/5">
                                            <div className="w-32">
                                                <img className="h-28" src={e.Image} alt="" />
                                            </div>
                                            <div className="flex flex-col justify-between ml-10 flex-grow">
                                                <span className="font-bold text-xl">{e.Name}</span>
                                                <span className="text-red-500 text-lg">{e.Category}</span>

                                            </div>
                                        </div>
                                        <div className="flex justify-center w-1/5">
                                            <svg className="fill-current text-gray-600 w-4 cursor-pointer " viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" onClick={() => decrement(index)} />
                                            </svg>

                                            <span className='mx-5 text-lg'>{counts[index]}</span>

                                            <svg className="fill-current text-gray-600 w-4 cursor-pointer" viewBox="0 0 448 512">
                                                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"onClick={() => increment(index)} />
                                            </svg>
                                        </div>
                                        <span className="text-center w-1/5 font-semibold text-lg">${e.Price}</span>
                                        <span className="text-center w-1/5 font-semibold text-lg">${e.Price * counts[index]}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer text-red-500 -ml-4"  onClick={() => {removeFromOrders(e.id); deletetoast(); }}>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                        </svg>
                                    </div>
                                </div>


                            </div>
                        </div>
                    )
                })

            }

        </>
    )
}

export default Myorders





