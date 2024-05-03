import React from "react";
import { mainCarouselData } from "./MainCarouselData";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./MainCarousel.css";
import { useNavigate } from "react-router-dom";

const handleDragStart = (e) => e.preventDefault();

const MainCarousel = () => {
  const navigate = useNavigate();
  const items = mainCarouselData.map((item) => (
    <div class="mainCarousel">
      <img
        className="cursor-pointer"
        onClick={() => navigate(item.path)}
        role="presentation"
        src={item.image}
        alt=""
        onDragStart={handleDragStart}
      />
    </div>
  ));
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={2000}
      infinite
    />
  );
};

export default MainCarousel;
