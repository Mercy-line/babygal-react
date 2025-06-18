import React from 'react'

function PartnerCard({partner, index}) {
  return (
    
      <div
        key={index}
        className="shadow-sm border border-pink-200 rounded-lg p-4 h-52"
      >
        <h2 className="font-bold font-serif text-xl text-black">
          {partner.title}
        </h2>
        <p className="font-serif text-grey mt-4">{partner.description}</p>
      </div>
  
  );
}

export default PartnerCard