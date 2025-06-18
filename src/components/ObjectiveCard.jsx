import React from "react";

function ObjectiveCard({ objective, index }) {
  return (
    <div
      key={index}
      className="shadow-md border border-pink-200 rounded-lg p-4 h-52"
    >
      <h2 className="font-bold font-serif text-xl text-black">
        {objective.title}
      </h2>
      <p className="font-serif text-grey mt-4">{objective.description}</p>
    </div>
  );
}

export default ObjectiveCard;
