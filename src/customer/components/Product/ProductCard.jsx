import React from "react";
import "./ProductCard.css"
const ProductCard = ({product}) => {
  return (
    <div className="productCard w-[17rem] m-3 transition-all cursor-pointer overflow-hidden">
      <div className="h-[22rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className=" font-jost-light textPart bg-white p-3">
        <div>
          <p className="font-bold mb-1 opacity-60">{product.brand} </p>
          <p>{product.title}</p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="font-semibold ">₹{product.discountedPrice}</p>
          <p className="line-through opacity-50">{product.price}</p>
          <p className="text-green-600 font-bold">
            {product.discountPersent}% off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
