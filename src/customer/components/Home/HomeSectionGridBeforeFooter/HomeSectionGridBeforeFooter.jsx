import React from 'react';
import './BeforeFooter.css'
import image1 from '../Images/salwar.jpeg'
import image2 from '../Images/dress.jpeg'
import image3 from '../Images/kurta.jpeg'
import { useNavigate } from 'react-router-dom';

const HomeSectionGridBeforeFooter = () => {
    const navigate = useNavigate();
  return (
    <>
      <div class="main">
        <div class="page1">
          <div id="page1-top">
            <h3>You might Also like</h3>
          </div>
          <div id="page1-elements">
            <div
              onClick={() => navigate("/women/clothing/kurta_set")}
              className="box"
            >
              <div class="hot1">
                <h3>Elegant Ethnic Styles</h3>
                <p>See Collection</p>
              </div>
              <img src={image1} alt="" />
            </div>
            <div
              onClick={() => navigate("/women/clothing/women_dress")}
              className="box"
            >
              <div class="hot1">
                <h3>Western Wear</h3>
                <p>See Collection</p>
              </div>
              <img src={image2} alt="" />
            </div>
            <div
              onClick={() => navigate("/women/clothing/kurtas")}
              className="box"
            >
              <div class="hot1">
                <h3>Vibrant Ethnic Wear</h3>
                <p>See Collection</p>
              </div>
              <img src={image3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSectionGridBeforeFooter