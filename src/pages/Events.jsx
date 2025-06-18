import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyDateSelector from '../components/MyDateSelector';
import CountySelector from '../components/CountySelector';
const Events = () =>{
  return (
    <section>
      <Header />

      <section className="m-16 h-96 px-16 py-10 ">
        <h3 className="text-black font-bold text-2xl font-serif py-10">
          All Events
        </h3>
        <div className='flex flex-wrap items-center gap-4' >
          <MyDateSelector />
          <CountySelector />
          <button className="bg-pink-500 text-white font-serif font-bold px-4 py-2 border border-pink-500 rounded-md">
            filter
          </button>
        </div>
      </section>

      <Footer />
    </section>
  );
};

export default Events;