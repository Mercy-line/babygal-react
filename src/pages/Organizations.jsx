import React from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import PartnerCard from '../components/PartnerCard';

const partners = [
  // mock data
  {
    title: "TechGirls Kenya",
    description: "Empowering girls through technology education and mentorship",
  },
  {
    title: " Young Mothers Support Network",
    description: "Providing resources and support for teenage mothers.",
  },
  {
    title: "Girls Right Initiative",
    description:
      "Advocating for girls' rights and gender equality in education.",
  },
];

const Organizations=() => {
  return (
    <section>
      <div>
        <Header />
        <section className="m-20 h-96">
          <h3 className="font-bold text-2xl font-serif">Our Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-10">
            {/* <PartnerCard /> */}

            {partners.map((partner, index) => (
              <PartnerCard partner={partner} index={index} />
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </section>
  );
}

export default Organizations