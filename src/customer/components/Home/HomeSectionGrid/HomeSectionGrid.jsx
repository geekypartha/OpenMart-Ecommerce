import React from 'react'
import video1 from '../Videos/video1.mp4'
import './HomeSectionGrid.css';
import './HomeSection';
// import { Helmet } from 'react-helmet';
import image1 from '../Images/men-shirt.jpeg'
import image2 from '../Images/crop-top.jpeg'
import image3 from '../Images/T-shirt.jpeg'
import image4 from '../Images/women-jacket.jpeg'
import image5 from '../Images/blazer.jpeg'
import image6 from '../Images/mens-jacketjpeg.jpeg'
import image7 from '../Images/lehenga.jpg'
import image8 from '../Images/saree.jpg'
import { useNavigate } from 'react-router-dom';



const HomeSectionGrid = () => {
    const navigate = useNavigate();
  return (
    <>
      <div class="main">
        <div onClick={() => navigate("/men/accessories/shoes")} class="page1">
          <video src={video1} autoPlay muted loop />
          <div class="page1-content">
            <h2>New shoes collection</h2>
            <a className="" href="/men/accessories/shoes">
              Shop Now
            </a>
          </div>
        </div>
        <div class="page2">
          <div id="page2-top">
            <h3>What's Hot?</h3>
          </div>
          <div id="page2-elements">
            <div
              onClick={() => navigate("/men/clothing/shirts")}
              className="box"
            >
              <div class="hot1">
                <h3>New Trending Shirts</h3>
                <p>See Collection</p>
              </div>

              <img src={image1} alt="" />
            </div>
            <div
              onClick={() => navigate("/women/clothing/top")}
              className="box"
            >
              <div class="hot1">
                <h3>Must Have Tops</h3>
                <p>See Collection</p>
              </div>
              <img src={image2} alt="" />
            </div>
            <div
              onClick={() => navigate("/men/clothing/t-shirts")}
              className="box"
            >
              <div class="hot1">
                <h3>Easy Going Styles</h3>
                <p>See Collection</p>
              </div>
              <img src={image3} alt="" />
            </div>
          </div>
        </div>

        <div class="page2">
          <div id="page2-top">
            <h3>New Collection</h3>
          </div>
          <div id="page2-elements">
            <div
              onClick={() => navigate("/women/clothing/jacket")}
              className="box"
            >
              <div class="hot1">
                <h3>Stylish Fits</h3>
                <p>See Collection</p>
              </div>
              <img src={image4} alt="" />
            </div>
            <div
              onClick={() => navigate("/men/clothing/jackets")}
              className="box"
            >
              <div class="hot1">
                <h3>Trendy Winterwear</h3>
                <p>See Collection</p>
              </div>
              <img src={image6} alt="" />
            </div>
            <div
              onClick={() => navigate("/men/clothing/blazers")}
              className="box"
            >
              <div class="hot1">
                <h3>Bestselling Blazers</h3>
                <p>See Collection</p>
              </div>
              <img src={image5} alt="" />
            </div>
          </div>
        </div>

        <div id="page3">
          <div id="page3-top">
            <h3>Trending Now</h3>
          </div>
          <div id="page3-elements">
            <div
              onClick={() => navigate("/women/clothing/lengha_choli")}
              className="box"
            >
              <div class="hot1">
                <h3>Attractive Lehenga Choli</h3>
                <p>See Collection</p>
              </div>
              <img src={image7} alt="" />
            </div>
            <div
              onClick={() => navigate("/women/clothing/saree")}
              className="box"
            >
              <div class="hot1">
                <h3>Designer Sarees</h3>
                <p>See Collection</p>
              </div>
              <img src={image8} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSectionGrid
