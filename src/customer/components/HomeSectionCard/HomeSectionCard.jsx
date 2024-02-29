import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col  bg-white overflow-hidden w-56 w-fit mx-12 my-3">
      <div className="h-[19rem] w-[15rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product.imageUrl }
          alt=""
        />
      </div>

      <div className="px-0 py-4">
        <h3 className="text-lg font-medium text-gray-900">{product.brand} </h3>
        <p className="mt-2 text-sm text-gray-500">{product.title}</p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
