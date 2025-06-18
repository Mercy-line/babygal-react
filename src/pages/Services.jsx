import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  // MockData
  const services = [
    {
      title: "Counselling",
      description: "Professional support for emotional and mental well being",
      href:"www.example.com",
      email: "mail@example.com"
    },
    {
      title: " Education",
      description: "Empowering through knowledge & skill development",
      href:"www.example.com",
      email: "mail@example.com"
    },
    {
      title: "Rights Protection",
      description: "Advocating for and safeguarding girls rights",
      href:"www.example.com",
      email: "mail@example.com"
    },
    {
      title: "Essential Supplies",
      description: "Providing necessities like sanitary pads and clothing",
      href:"www.example.com",
      email: "mail@example.com"
    },
    {
      title: "Mentorship",
      description: "Connecting girls with successful role models",
      href:"www.example.com",
      email: "mail@example.com"
    },
    {
      title: "Career Development",
      description: "Preparing young girls for successful careers",
      href:"www.example.com",
      email: "mail@example.com"
    },
  ];
    return (
      <section>
      <div>
        <Header />
        <section className="m-20">
          <h3 className="font-bold text-2xl font-serif">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-10 w-full mt-10">
            {/* <ServiceCard /> */}

            {services.map((service, index) => (
              <ServiceCard service={service} index={index} />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </section>
  );
};

export default Services;
