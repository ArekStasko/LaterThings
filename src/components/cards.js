import React from "react";

const Cards = ({ info }) => {
  console.log(info);

  return (
    <>
      {info.map((item, index) => (
        <div key={index} className="category-thing__card">
          <h3>{item.title}</h3>
          <p>{item.content}</p>
          <p>{item.link}</p>
        </div>
      ))
      }
    </>
  );
};

export default Cards;
