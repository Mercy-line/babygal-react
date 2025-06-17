import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  // MockData
  const services = [
    {
      title: "COunselling",
      description: "Professional support for emotional and mental well being",
    },
    {
      title: " Education",
      description: "Empowering through knowledge & skill development",
    },
    {
      title: "Rights Protection",
      description: "Advocating for and safeguarding girls rights",
    },
    {
      title: "Essential Supplies",
      description: "Providing necessities like sanitary pads and clothing",
    },
  ];
    return (
      <section>
      <div>
        <Header />
        <section className="m-20">
          <h3 className="font-bold text-2xl font-serif">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-10 w-full h-50 mt-10">
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
