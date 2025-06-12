import React from "react";
import Header from "../components/Header";
import logo from "../assets/graduation1.jpg";

const Babygal = () => {
  return (
    <div>
      <Header />
      <section className="bg-white">

        <section className="justify-center">
          <div
            className="bg-cover bg-center w-[800px] h-[600px] flex items-center justify-center"
            style={{ backgroundImage: `url(${logo})` }}
          >
            <div className="text-white text-center px-5">
              <h3 className="font-bold text-4xl font-serif">
                Empowering Girls, Shaping Futures
              </h3>
              <p className="font-serif text-2xl mt-2">
                Supporting girls through every stage in life
              </p>
              <button className="bg-pink-500 text-white font-serif font-bold px-4 py-2 border border-pink-500 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-bold text-2xl font-serif">Our Services</h3>
          <div>
            <div className="shadow-">
              <h2 className="font-bold font-serif text-xl text-black">
                Counselling
              </h2>
              <p className="font-serif text-grey">
                Professional support for emotional and mental well being
              </p>
            </div>
            <div>
              <h2 className="font-bold font-serif text-xl text-black">
                Education
              </h2>
              <p className="font-serif text-grey">
                Empowering through knowledge & skill development
              </p>
            </div>
            <div>
              <h2 className="font-bold font-serif text-xl text-black">
                Rights Protection
              </h2>
              <p className="font-serif text-grey">
                Advocating for and safeguarding girls rights
              </p>
            </div>
            <div>
              <h2 className="font-bold font-serif text-xl text-black">
                Essential Supplies
              </h2>
              <p className="font-serif text-grey">
                Providing necessities like sanitary pads and clothing
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-pink-500">Testimonials</div>
          <div>
            <p className="font-serif text-grey">
              As a teen mom,BabyGal provided me with the resources and community
              i needed to care for my child while continuing with my education
            </p>
            <p>Emily Rodriguez young mother</p>
          </div>
          <div className="bg-pink-500">yooh</div>
        </section>

        <section>
          <h3 className="font-bold text-2xl font-serif">Our Objectives</h3>
          <div>
            <div className="shadow-">
              <h2 className="font-bold font-serif text-xl text-black">
                Empower Girls
              </h2>
              <p className="font-serif text-grey">
                Provide resources and support for personal growth and
                development
              </p>
            </div>
            <div>
              <h2 className="font-bold font-serif text-xl text-black">
                Promote Education
              </h2>
              <p className="font-serif text-grey">
                Ensure access to quality education and skill-building
                opportunities
              </p>
            </div>
            <div>
              <h2 className="font-bold font-serif text-xl text-black">
                Build Community
              </h2>
              <p className="font-serif text-grey">
                Foster a supportive network for girls and their families
              </p>
            </div>
            <div>
              <h2 className="font-bold font-serif text-xl text-black">
                Advocating for Rights
              </h2>
              <p className="font-serif text-grey">
                Champion policies that protect and empower girls and young women
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-bold text-2xl font-serif">Our Partners</h3>
          <div>
            <div>
              <h2 className="font-bold font-serif text-xl text-black">
                Girl Effect
              </h2>
            </div>
            <div>
              <h2 className="font-bold font-serif text-xl text-black">
                Save the Children
              </h2>
            </div>
            <div>
              <h2 className="font-bold font-serif text-xl text-black">
                Unicef
              </h2>
            </div>
            <div>
              <h2 className="font-bold font-serif text-xl text-black">
                World Health Organization
              </h2>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-pink-500 font-bold text-2xl font-serif">
            Our Mission
          </div>
          <div>
            <h3 className="font-bold font-serif text-xl text-black">
              Empowering Girls,Transforming Communities
            </h3>
            <p className="font-serif text-grey">
              BabyGal is committed to empowering girls and young women through
              every stage of their lives. We therefore strive to create a
              supportive community that nurtures their potential, protects their
              rights, and provides them with the resources they need to thrive.
              By investing in girls, we aim to transferring communities and
              build a more equitable world for all
            </p>
          </div>
          <div className="bg-pink-500">yooh</div>
        </section>

        <section>
          <div className="bg-pink-500 font-bold text-2xl font-serif">
            Upcoming Events
          </div>
          <div>
            <p>DATE BY SELECTION</p>
          </div>
          <div>
            {" "}
            <p>SELECT COUNTY BY DROPDOWN</p>
          </div>
          <button className="bg-pink-500 text-white font-serif font-bold px-4 py-2 border border-pink-500 rounded-lg">
            filter
          </button>
        </section>

        <section>
          <div className="bg-pink-500 font-bold text-2xl font-serif">
            Available Courses
          </div>
          <div>
            <h2 className="font-bold font-serif text-xl text-black">
              Data Science
            </h2>
            <p className="font-serif text-grey">
              A beginner friendly data science
            </p>
            <p> . Modules:</p>
            <p> . Module 1</p>
            <p> . Module 2</p>
          </div>
          <button className="bg-pink-500 text-white font-serif font-bold px-4 py-2 border border-pink-500 rounded-lg">
            Enroll Now
          </button>
        </section>
      </section>
    </div>
  );
};

export default Babygal;
