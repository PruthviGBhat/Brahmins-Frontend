import React from "react";
import { Link } from "react-router-dom";
import NotFoundimg from '../NotFound.svg';

const NotFound = () => {
  return (
    <>
      <section className="flex justify-center items-center mt-10">
        <div className=" justify-center items-center">
          <img src={NotFoundimg} alt="notFound" />
          <h1 className="mt-10">LOOKS LIKE YOU'RE LOST</h1>
          <p>We can't seem to find you the page you're looking for .....   <br /></p>
       
          <Link to={"/"} className="text-green-400">
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
