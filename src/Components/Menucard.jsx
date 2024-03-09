import React from 'react';
import { toast } from 'react-toastify'; 

const Menucard = ({ menudata, addtocart }) => {
  const itemcount = (data) => {};

  const ordertoast = () => {
    toast.success('Item added to cart', { position: 'top-center' });
  };

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {menudata.map((e) => {
              const { id, Name, Image, Category, Price } = e;
              return (
                <div className="lg:w-1/3 sm:w-1/2 p-4" key={id}>
                  <div
                    className="flex relative"
                    onClick={() => {
                      addtocart(e);
                      itemcount(e);
                      ordertoast(); 
                    }}
                  >
                    <img
                      alt="gallery"
                      className="absolute inset-0 w-full h-full object-cover object-center"
                      src={Image}
                    />
                    <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                      <h2 className="tracking-widest text-sm title-font font-medium text-yellow-400 mb-1">
                        {Name}
                      </h2>
                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {Price}
                      </h1>
                      <h2 className="leading-relaxed text-lg font-bold text-white">
                        {Category}
                      </h2>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Voluptatibus, officiis?
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menucard;
