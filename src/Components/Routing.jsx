import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Book from './Book';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Myorders from './Myorders';
import NotFound from './NotFound';
import { toast } from 'react-toastify';

const Routing = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const addtocart = (data) => {
    setOrders([...orders, data]);
  };

  const removeFromOrders = (id) => {
    setOrders((prev) => prev.filter((item) => item.id !== id));
  };


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Dishes"
          element={<Navbar addtocart={addtocart} />}
        />
        <Route path="/Reservations" element={<Book />} />
        <Route path="/Contact" element={<Contact />} />
        <Route
          path="/Orders"
          element={<Myorders orders={orders} removeFromOrders={removeFromOrders} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
