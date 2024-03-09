import React from 'react'
import gmap from '../feedback.png'

const Contact = () => {
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font relative">
                <div className="container px-5 py-24 mx-auto my-5 flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" title="map" className="absolute inset-0" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src={gmap}></iframe>
                        <div className="w-1/2 overflow-hidden h-1/2 bg-gray-900 relative md:flex md:flex-wrap md:py-6 rounded shadow-md md:w-full lg:h-1/3">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Brahmin's vidyanagar-west 2nd Main 5th-cross near VidhanaSoudha Rajajinagar Bangalore </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
                                <a className="text-yellow-400 leading-relaxed">RestaurantBrahmin@gmail.com</a>
                                <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">9353726407</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5">"Capturing insights, improving with valued opinions."</p>
                        <div className="relative mb-4">
                            <label for="name" className="leading-7 text-sm text-gray-400">Name</label>
                            <input type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
                            <input type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="message" className="leading-7 text-sm text-gray-400">Message</label>
                            <textarea id="message" name="message" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button className="text-white font-semibold bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Submit</button>
                        <p className="text-xs text-gray-400 text-opacity-90 mt-3">
                            "Shape our future with your insightful feedback form."</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
