import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { findProducts } from "../../../State/Product/Action";

const HomeSectionCarousel = ({data, sectionName, smallsection}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store);
  const navigate = useNavigate();
  // query
  const searchParams = new URLSearchParams(location.search);
  const availability = searchParams.get("availability");
  const category = searchParams.get("category");
  const sort = searchParams.get("sort");
  const page = searchParams.get("page");

  console.log("products---", products);

  useEffect(() => {
    const dataAll = {
      category: category || "",
      colors: [],
      sizes: [],
      minPrice: 0,
      maxPrice: 10000,
      minDiscount: 0,
      sort: sort || "price_low",
      pageNumber: page || 1,
      pageSize: 10,
      stock: availability,
    };
    dispatch(findProducts(dataAll));
  }, [availability, category, sort, page, products.deletedProduct]);

  const responsive = {
    0: { items: 1 },
    451: { items: 1.5 },
    550: { items: 1.7 },
    615: { items: 2 },
    850: { items: 3 },
    1114: { items: 3.5 },
    1338: { items: 4 },
    1526: { items: 4.5 },
    1660: { items: 5 },
    1700: { items: 5.5 },
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);

  //to pass active index in the alicecarousel
  //this will give us ehich carousel is currently running
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
  ?.slice(0,10)
  ?.map((item) => <HomeSectionCard product={item} />);

  return (
    <div className="border">
      <div className="relative p-5 ">
        <h2 className="text-3xl text-zinc-950 text-center font-jost-medium">
          {sectionName}
        </h2>
        <h3 className="text-gray-500 italic text-center py-2 font-jost-light ">
          {smallsection}
        </h3>
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items?.length - 5 && (
          <Button
            variant="text"
            borderColor="black"
            className="z-10 bg-white"
            onClick={slideNext}
            sx={{
              borderRadius: 50,
              position: "absolute",
              top: "16rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "#ebebeb",
              maxWidth: "40px",
              maxHeight: "40px",
              minWidth: "40px",
              minHeight: "40px",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            variant="text"
            borderColor="black"
            className="z-10 bg-white"
            onClick={slidePrev}
            sx={{
              borderRadius: 50,
              position: "absolute",
              top: "16rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "#ebebeb",
              maxWidth: "40px",
              maxHeight: "40px",
              minWidth: "40px",
              minHeight: "40px",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
