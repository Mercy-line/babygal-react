import React from "react";

function ServiceCard({service, index}) {
  return (
    <div key={index} className="shadow-sm border border-pink-200 rounded-lg p-4 ">
      <h2 className="font-bold font-serif text-xl text-black">{service.title}</h2>
      <p className="font-serif text-grey mt-4">
        {service.description}
      </p>
    </div>
  );
}

export default ServiceCard;
