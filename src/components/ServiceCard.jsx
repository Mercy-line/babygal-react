import React from "react";

function ServiceCard({service, index}) {
  return (
    <div key={index} className="shadow-sm border border-pink-200 rounded-lg p-4 h-52">
      <h2 className="font-bold font-serif text-xl text-black">{service.title}</h2>
      <p className="font-serif text-grey mt-4">
        {service.description}
      </p>
      <a href={service.href}>our website</a>
      <p>{service.email}</p>
    </div>
  );
}

export default ServiceCard;
