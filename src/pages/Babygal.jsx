import React from "react";
import Header from "../components/Header";
import logo from "../assets/graduation1.jpg";
import Footer from "../components/Footer";
import MyDateSelector from "../components/MyDateSelector";
const Babygal = () => {
  return (
    <section className="">
      <div>
        <Header />
        <section className="bg-white px-56 w-full py-4 flex flex-col items-center justify-center ">
          <section className="justify-center">
            <div
              className="bg-cover bg-center w-[1300px] h-[600px] flex items-center justify-center"
              style={{ backgroundImage: `url(${logo})` }}
            >
              <div className="text-white text-center px-5">
                <h3 className="font-bold text-4xl font-serif ">
                  Empowering Girls, Shaping Futures
                </h3>
                <p className="font-serif text-2xl">
                  Supporting girls through every stage in life
                </p>
                <button className="bg-pink-500 text-white font-serif font-bold px-4 py-2 border border-pink-500 rounded-lg">
                  Learn More
                </button>
              </div>
            </div>
          </section>

          <section className="m-20">
            <h3 className="font-bold text-2xl font-serif">Our Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-52">
              <div className="shadow-sm border border-pink-200 rounded-lg p-4 ">
                <h2 className="font-bold font-serif text-xl text-black">
                  Counselling
                </h2>
                <p className="font-serif text-grey mt-4">
                  Professional support for emotional and mental well being
                </p>
              </div>
              <div className="shadow-md border  border-pink-200 rounded-lg p-4">
                <h2 className="font-bold font-serif text-xl text-black">
                  Education
                </h2>
                <p className="font-serif text-grey mt-4">
                  Empowering through knowledge & skill development
                </p>
              </div>
              <div className="shadow-md border  border-pink-200 rounded-lg p-4">
                <h2 className="font-bold font-serif text-xl text-black">
                  Rights Protection
                </h2>
                <p className="font-serif text-grey mt-4">
                  Advocating for and safeguarding girls rights
                </p>
              </div>
              <div className="shadow-md border  border-pink-200 rounded-lg p-4">
                <h2 className="font-bold font-serif text-xl text-black">
                  Essential Supplies
                </h2>
                <p className="font-serif text-grey mt-4">
                  Providing necessities like sanitary pads and clothing
                </p>
              </div>
            </div>
          </section>

          <section className="m-20">
            <div className="bg-pink-500 font-bold text-2xl font-serif py-10">Testimonials</div>
            <div className="py-36 rounded-2xl shadow-md border p-4 bg-pink-100">
              <p className="font-serif text-grey">
                As a teen mom,BabyGal provided me with the resources and
                community i needed to care for my child while continuing with my
                education
              </p>
              <p>Emily Rodriguez young mother</p>
            </div>
            <div className="bg-pink-500 py-10 ">yooh</div>
          </section>

          <section className="m-20">
            <h3 className="font-bold text-2xl font-serif">Our Objectives</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  w-full h-52">
              <div className="shadow-md border border-pink-200 rounded-lg p-4">
                <h2 className="font-bold font-serif text-xl text-black">
                  Empower Girls
                </h2>
                <p className="font-serif text-grey mt-4">
                  Provide resources and support for personal growth and
                  development
                </p>
              </div>
              <div className="shadow-md border border-pink-200 rounded-lg p-4">
                <h2 className="font-bold font-serif text-xl text-black">
                  Promote Education
                </h2>
                <p className="font-serif text-grey mt-4">
                  Ensure access to quality education and skill-building
                  opportunities
                </p>
              </div>
              <div className="shadow-md border border-pink-200 rounded-lg p-4">
                <h2 className="font-bold font-serif text-xl text-black">
                  Build Community
                </h2>
                <p className="font-serif text-grey mt-4">
                  Foster a supportive network for girls and their families
                </p>
              </div>
              <div className="shadow-md border border-pink-200 rounded-lg p-4">
                <h2 className="font-bold font-serif text-xl text-black">
                  Advocating for Rights
                </h2>
                <p className="font-serif text-grey ">
                  Champion policies that protect and empower girls and young
                  women
                </p>
              </div>
            </div>
          </section>

          <section className="m-20">
            <h3 className="font-bold text-2xl font-serif">Our Partners</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full h-52">
              <div  className="shadow-md border border-pink-200 rounded-lg p-4">
                <h2 className="font-bold font-serif text-xl text-black">
                  Girl Effect
                </h2>
              </div>
              <div className="shadow-md border border-pink-200 rounded-lg p-4">
                <h2 className="font-bold font-serif text-xl text-black">
                  Save the Children
                </h2>
              </div>
              <div className="shadow-md border border-pink-200 rounded-lg p-4">
                <h2 className="font-bold font-serif text-xl text-black">
                  Unicef
                </h2>
              </div>
              <div className="shadow-md border border-pink-200 rounded-lg p-4">
                <h2 className="font-bold font-serif text-xl text-black">
                  World Health Organization
                </h2>
              </div>
            </div>
          </section>

          <section className="m-20">
            <div className="bg-pink-500 font-bold text-2xl font-serif py-10">
              Our Mission
            </div>
            <div  className="py-36 rounded-2xl shadow-md border p-4 bg-pink-100">
              <h3 className="font-bold font-serif text-xl text-black">
                Empowering Girls,Transforming Communities
              </h3>
              <p className="font-serif text-grey">
                BabyGal is committed to empowering girls and young women through
                every stage of their lives. We therefore strive to create a
                supportive community that nurtures their potential, protects
                their rights, and provides them with the resources they need to
                thrive. By investing in girls, we aim to transferring
                communities and build a more equitable world for all
              </p>
            </div>
            <div className="bg-pink-500 font-bold text-2xl font-serif py-10">yooh</div>
          </section>

          <section className="m-20">
            <h3 className="text-black font-bold text-2xl font-serif py-10">
              Upcoming Events
            </h3>
           <MyDateSelector/>
           </section>
           <section>
            <div>
              {" "}
              <p>SELECT COUNTY BY DROPDOWN</p>
            </div>
            <button className="bg-pink-500 text-white font-serif font-bold px-4 py-2 border border-pink-500 rounded-lg">
              filter
            </button>
          </section>

          <section className="m-20">
            <div  className="font-bold text-2xl font-serif py-8">
              Available Courses
            </div>
            <div className="shadow-md border border-pink-200 rounded-lg p-4">
              <h2 className="font-bold font-serif text-xl text-black">
                Data Science
              </h2>
              <p className="font-serif text-grey mt-4">
                A beginner friendly data science
              </p >
              <p className="font-serif text-grey mt-4">Modules:</p>
              <p> . Module 1</p>
              <p> . Module 2</p>
            
            <button className="bg-pink-500 text-white font-serif font-bold px-20 py-2 border border-pink-500 rounded-lg mt-2">
              Enroll Now
            </button>
            </div>
          </section>
        </section>
        < Footer/>
      </div>
    </section>
  );
};

export default Babygal;
