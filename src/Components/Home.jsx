import React from 'react'

const Home = () => {
    return (
        <>
            <section className="text-gray-400 body-font ">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="w-4/5 md:w-3/4 md:h-2/4 mx-5  lg:ml-5 ">
                        <img className="object-contain  ml-15 rounded " alt="hero" src="https://images.unsplash.com/photo-1606914501449-5a96b6ce24ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
                    </div>
                    <div className=" mt-5 lg:flex-grow md:w-3/4 lg:w-3/4 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-900 lg:text-4xl xl:text-5xl ">Experience the best
                            <br className="hidden lg:inline-block text-slate-900 xl:text-5xl " /> Indian Foods
                        </h1>
                        <p className="mb-8 leading-relaxed text-slate-500 lg:text-lg xl:text-xl">"Authentic Indian flavors crafted with love, offering a rich culinary journey for your taste buds."</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
