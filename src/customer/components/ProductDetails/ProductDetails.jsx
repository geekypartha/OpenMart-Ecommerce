import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { Button, Grid, LinearProgress, Rating } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
//import { TabContext, TabList, TabPanel } from "@mui/lab";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import ProductReviewCard from "./ProductReviewCard";
import { mens_kurta } from "../../../Data/mens_kurta";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProductsById } from "../../../State/Product/Action";
import { addItemToCart } from "../../../State/Cart/Action";
import HomeSectionCarousel from "../HomeSectionCarousel/HomeSectionCarousel";

const product = {
  name: "Basic Tee 6-Pack",
  price: "₹192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  shippingAndReturns: [
    "Shipping time for the products is 8-10 days.",
    "We have a generous 7-day no-questions-asked return policy or exchange policy.",
    "Kindly note return or exchange is only one time available.",
    "Kindly request a return/exchange via mail at support@openmart.com within 7 days from the date of delivery. Return requests will not be accepted through any other medium.",
    "Duties and taxes, if applicable, are to be paid by the customer.",
    "In Exchange, your replacement will be shipped after we receive and verify the returned product.",
    "The product that needs to be exchanged must be returned in the original condition with all parts/tags/accessories intact. Without the original condition of the product, the exchange will not be validated.",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

//tabs

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

//customization tabs
const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{
      children: <span className="MuiTabs-indicatorSpan" />,
    }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: "fit",
    width: "100%",
    backgroundColor: "#000",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(17),
    marginRight: theme.spacing(1),
    fontFamily: "jost-medium",
    color: "#dddbd0",
    "&.Mui-selected": {
      color: "#000",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#000",
    },
  })
);

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("");
  const [value, setValue] = useState("1");
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const {products} = useSelector((store)=>store);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleAddToCart = () => {
    const data = {productId:params.productId, size:selectedSize.name};
    console.log("data", data);
    dispatch(addItemToCart(data))
    navigate("/cart");
  };


  console.log("params", params);

  useEffect(() => {
    const data = {productId:params.productId}
    dispatch(findProductsById(data));
  }, [params.productId]);

  return (
    <div className="bg-white lg:px-36">
      <div className="pt-24">
       
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-5 pt-10">
          {/* Image gallery */}
          {/* <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block"> */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={products.product?.imageUrl}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            {/* <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item) => (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div> */}
          </div>

          {/* Product info */}
          {/* Brand */}
          <div className="lg:col-span-1 maxt-auto  px-4 pb-16 sm:px-6 lg:max-w-xl lg:px-0 lg:pb-24 l">
            <div className=" flex lg:col-span-2 items-center justify-between ">
              <h3 className=" font-jost-medium tracking-tight text-gray-400 ">
                {products.product?.brand}
              </h3>

              {/* Reviews */}
              <div className="">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "h-4 w-4 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a
                    href={reviews.href}
                    className="ml-3 text-sm font-medium text-gray-600 hover:text-indigo-500"
                  >
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 mt-2">
              <h1 className="text-2xl font-jost-medium text-gray-600 ">
                {products.product?.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-3 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-seoge-ui line-through text-gray-500">
                  {products.product?.price}
                </p>
                <p className="font-semibold font-seoge-ui text-red-600">
                  {products.product?.discountedPrice}
                </p>
                <p className="font-seoge-ui font-semibold text-gray-600">
                  {products.product?.discountPersent}% Off
                </p>
              </div>

              <form className="mt-10">
                {/* Colors */}

                {/* Sizes */}
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium font-jost-medium text-gray-900">
                    Size
                  </h3>
                </div>
                <div className="lg:max-w-xs font-jost-medium flex justify-center lg:justify-start">
                  <RadioGroup
                    value={selectedSize}
                    onChange={setSelectedSize}
                    className="mt-4"
                  >
                    <RadioGroup.Label className="sr-only">
                      Choose a size
                    </RadioGroup.Label>
                    <div className="grid grid-cols-4 gap-4 md:gap-3 lg:gap-4 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 ">
                      {product.sizes.map((size) => (
                        <RadioGroup.Option
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={({ active }) =>
                            classNames(
                              size.inStock
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-5 ring-black" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-black hover:text-white focus:outline-none sm:flex-1 sm:py-3 "
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {size.name}
                              </RadioGroup.Label>
                              {size.inStock ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-1",
                                    checked
                                      ? "border-black"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div className="py-5 flex justify-center lg:justify-start  ">
                  <Button
                    onClick={handleAddToCart}
                    variant="outlined"
                    sx={{
                      px: "4rem",
                      color: "white",
                      overflow: "hidden",
                      py: "1rem",
                      fontFamily: "jost-light",
                      bgcolor: "black",
                      ":hover": {
                        bgcolor: "#fff",
                        color: "black",
                        boxShadow: "none",
                        border: "1px solid currentColor",
                      },
                    }}
                  >
                    <div className="flex items-center gap-2 justify-center">
                      <ShoppingCartIcon />
                      Add to cart
                    </div>
                  </Button>
                </div>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base font-jost-medium text-gray-500">
                    {products.product?.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-jost-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600 font-jost-meddium ">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* rating and reviews */}
        {/* tabs */}
        <section className="mx-auto max-w-2xl sm:px-6 lg:max-w-7xl lg:gap-x-12 lg:px-0">
          <Box>
            <StyledTabs
              value={value}
              onChange={handleChange}
              className="text-black-900"
              aria-label="basic tabs example"
            >
              <StyledTab label="Details" {...a11yProps(0)} />
              <StyledTab label="Ratings and Reviews" {...a11yProps(0)} />
              <StyledTab label="Shipping and Returns" {...a11yProps(1)} />
            </StyledTabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            {/* details */}
            <div className="mt-2 px-0">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                <li>
                  <p className="font-jost-light lg:text-lg text-gray-900">
                    {products.product?.description}
                  </p>
                </li>
              </ul>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {/* rating and review */}

            <div className="border p-5 flex flex-col  ">
              <div className="px-2 pb-10 md:pl-36 md:gap-4 lg:pl-0 md:flex justify-around ">
                <div className="">
                  <Grid item xs={12}>
                    <h1 className="text-xl font-semibold pb-1 pr-10">
                      Product Ratings
                    </h1>
                    <div className="pb-10 ">
                      <Rating value={4.6} precision={0.5} readOnly />
                      <p className="font-jost-light opacity-70">5893 Ratings</p>
                    </div>
                  </Grid>
                </div>

                {/* linear progress */}
                <div className="">
                  <Box>
                    <Grid
                      container
                      justifyContent={"left"}
                      width={400}
                      alignItems={"center"}
                      gap={1}
                    >
                      <Grid item xs={1}>
                        <p className="flex gap-1 items-center">
                          5 <StarIcon className="w-3" />
                        </p>
                      </Grid>
                      <Grid item xs={7}>
                        <LinearProgress
                          sx={{
                            bgcolor: "#d0d0d0",
                            borderRadius: 4,
                            height: 7,
                          }}
                          variant="determinate"
                          value={70}
                          color={"success"}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      width={400}
                      justifyContent={"left"}
                      alignItems={"center"}
                      gap={1}
                    >
                      <Grid item xs={1}>
                        <p className="flex gap-1 items-center">
                          4 <StarIcon className="w-3" />
                        </p>
                      </Grid>
                      <Grid item xs={7}>
                        <LinearProgress
                          sx={{
                            bgcolor: "#d0d0d0",
                            borderRadius: 4,
                            height: 7,
                          }}
                          variant="determinate"
                          value={30}
                          color={"success"}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      width={400}
                      justifyContent={"left"}
                      alignItems={"center"}
                      gap={1}
                    >
                      <Grid item xs={1}>
                        <p className="flex gap-1 items-center">
                          3 <StarIcon className="w-3" />
                        </p>
                      </Grid>
                      <Grid item xs={7}>
                        <LinearProgress
                          sx={{
                            bgcolor: "#d0d0d0",
                            borderRadius: 4,
                            height: 7,
                          }}
                          variant="determinate"
                          value={60}
                          color={"success"}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      width={400}
                      justifyContent={"left"}
                      alignItems={"center"}
                      gap={1}
                    >
                      <Grid item xs={1}>
                        <p className="flex gap-1 items-center">
                          2 <StarIcon className="w-3" />
                        </p>
                      </Grid>
                      <Grid item xs={7}>
                        <LinearProgress
                          sx={{
                            bgcolor: "#d0d0d0",
                            borderRadius: 4,
                            height: 7,
                          }}
                          variant="determinate"
                          value={25}
                          color={"warning"}
                        />
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      width={400}
                      justifyContent={"left"}
                      alignItems={"center"}
                      gap={1}
                    >
                      <Grid item xs={1}>
                        <p className="flex gap-1 items-center">
                          1 <StarIcon className="w-3" />
                        </p>
                      </Grid>
                      <Grid item xs={7}>
                        <LinearProgress
                          sx={{
                            bgcolor: "#d0d0d0",
                            borderRadius: 4,
                            height: 7,
                          }}
                          variant="determinate"
                          value={20}
                          color={"error"}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </div>
              </div>
              <Grid container spacing={9}>
                <Grid item xs={12}>
                  <div className="space-y-5">
                    {[1, 1, 1].map((item) => (
                      <ProductReviewCard />
                    ))}
                  </div>
                </Grid>
              </Grid>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className="mt-2 px-0">
              <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {product.shippingAndReturns.map((shipping) => (
                  <li
                    key={shipping}
                    className="text-gray-900 font-jost-light lg:text-lg"
                  >
                    <span>{shipping}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CustomTabPanel>
        </section>
        {/* similar products */}
        <section className="pt-10">
          <h1 className="text-3xl font-bold font-jost-light flex justify-center ">
            You might also like!
          </h1>

          <div className=" space-y-10 pt-5 flex flex-col justify-around px-5 lg:px-10 ">
            <HomeSectionCarousel
              data={products?.products?.content}
             
            />
          </div>
        </section>
      </div>
    </div>
  );
}
