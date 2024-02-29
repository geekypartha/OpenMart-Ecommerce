import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />);

  return (
    <div className="relative  px-4 lg:px-8 border flex flex-col justify-center">
      <div className="relative p-5 ">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
          disableDotsControls
        />
        <Button
          variant="text"
          borderColor="black"
          className="z-50 bg-white"
          sx={{
            borderRadius: 50,
            position: "absolute",
            top: "11rem",
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
        <Button
          variant="text"
          borderColor="black"
          className="z-50 bg-white"
          sx={{
            borderRadius: 50,
            position: "absolute",
            top: "11rem",
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
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
