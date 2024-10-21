import React from "react";

const Cards = ({ item }) => {
  return (
    <>
      <div className="px-20 py-10">
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.title}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline px-2 py-1 hover:bg-pink-500 duration-200">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
