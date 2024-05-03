import React, { useEffect } from 'react'
import MainCarousl from '../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../Data/mens_kurta'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { findProducts } from '../../State/Product/Action'
import HomeSectionGrid from '../components/Home/HomeSectionGrid/HomeSectionGrid'
import HomeSectionGridBeforeFooter from '../components/Home/HomeSectionGridBeforeFooter/HomeSectionGridBeforeFooter'

const HomePage = () => {
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

  useEffect(() => {
    const data = {
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
    dispatch(findProducts(data));
  }, [availability, category, sort, page, products.deletedProduct]);

  return (
    <div>
      <MainCarousl />
      <div className="pt-10">
        <HomeSectionGrid />
      </div>

      <div className=" space-y-10 pt-20 flex flex-col justify-around px-5 lg:px-10 ">
        <HomeSectionCarousel
          data={products?.products?.content}
          sectionName={"BestSeller"}
          smallsection={"Top view in this week"}
        />
      </div>
      <div className="pt-5">
        <HomeSectionGridBeforeFooter />
      </div>
    </div>
  );
}

export default HomePage