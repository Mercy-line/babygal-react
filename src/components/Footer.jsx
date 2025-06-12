import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gray-100'>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pl-10 pr-10 pt-10 pb-5">
        <div>
            <h3 className="font-bold font-serif hover:text-black transition font-georgia text-pink-500 text-2xl pl-10">BabyGal</h3>
            <p className='mt-4'>Empowering girls, shaping futures</p>
        </div>

        <div>
            <h3 className='font-bold font-serif '>Quick Links</h3>
            <p className='mt-4'>About Us</p>
            <p>Our Services</p>
            <p>Events</p>
            <p>Contact Us</p>
        </div>

         <div>
            <h3 className="font-bold font-serif">Get Involved</h3>
            <p className='mt-4'>Volunteer</p>
            <p>Donate</p>
            <p>Become a Partner</p>
        </div>

        <div>
            <h3 className="font-bold font-serif">Connect with Us</h3>
            <p className='mt-4'>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
        </div> 

<div>2025 BabyGal, All rights reserved</div>
    </div>
    </footer>
  );
};

export default Footer;