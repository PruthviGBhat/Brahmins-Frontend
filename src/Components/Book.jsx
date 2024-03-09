import React from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const Book = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState(0);
    const navigate = useNavigate();

    const reservationData = {
        name,
        email,
        phone,
        date,
        time,
      };
    const handleReservation = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/api/reservation/send", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(reservationData),
                credentials: "include", 
              });
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
            
        const data = await response.json();
          toast.success(data.message);
          setName("");
          setPhone(0);
          setEmail("");
          setTime("");
          setDate("");
          navigate("/Dishes");
        } catch (error) {
          toast.error(error.message);
        }
      };
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto my-5 flex flex-wrap items-center">
                    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 my-5">
                        <img src="https://images.unsplash.com/photo-1599458252573-56ae36120de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudCUyMHRhYmxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" className='w-full'/>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-white text-lg font-medium title-font mb-5">Book a Table</h2>
                        <div className="relative mb-4">
                            <label for="name" className="leading-7 text-sm text-gray-400"> Name</label>
                            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
                            <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
                            <label for="phoneno" className="leading-7 text-sm text-gray-400">Phone No</label>
                            <input type="number" id="phoneno" name="phoneno"  value={phone} onChange={(e) => setPhone(e.target.value)}className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
                            <label for="date" className="leading-7 text-sm text-gray-400">Date</label>
                            <input type="date" id="date" name="date"value={date}  onChange={(e) => setDate(e.target.value)} className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <div className="relative mb-4">
                            <label for="time" className="leading-7 text-sm text-gray-400">time</label>
                            <input type="time" id="time" name="time"  value={time} onChange={(e) => setTime(e.target.value)}className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        <button type="submit"className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg font-semibold"  onClick={handleReservation}>Book</button>
                        <p className="text-xs mt-3">Thank You for Booking.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Book
