export const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/women/clothing/lengha_choli",
          imageSrc:
            "https://www.ethnicplus.in/media/catalog/product/cache/1d5df636cf8c8988ea2d2c570bb7c21d/7/3/7315_1_.jpg",
          imageAlt: "",
        },
        {
          name: "Designer Saree",
          href: "/women/clothing/saree",
          imageSrc:
            "https://www.ethnicplus.in/media/catalog/product/cache/1d5df636cf8c8988ea2d2c570bb7c21d/1/0/1005_2__1.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", id: "top", href: `{women/clothing/tops}` },
            { name: "Dresses", id: "women_dress" },
            { name: "Women Jeans", id: "women_jeans" },
            { name: "Lengha Choli", id: "lengha_choli" },
            { name: "Sweaters", id: "sweater" },
            { name: "T-Shirts", id: "t-shirt" },
            { name: "Jackets", id: "jacket" },
            { name: "Kurta Sets", id: "kurta_set" },
            { name: "Sarees", id: "saree" },
            { name: "Kurtas", id: "kurtas" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "watch" },
            { name: "Shoes", id: "shoe" },
            { name: "Bags", id: "bag" },
            { name: "Sunglasses", id: "sunglass" },
            { name: "Hats", id: "hat" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", id: "#" },
            { name: "My Way", id: "#" },
            { name: "Re-Arranged", id: "#" },
            { name: "Counterfeit", id: "#" },
            { name: "Significant Other", id: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "/men/clothing/shirts",
          imageSrc:
            "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/d/v/z/m-hlsh014060-highlander-original-imagkc3mzqgunvfd.jpeg?q=70",
          imageAlt: "",
        },
        {
          name: "Artwork Tees",
          href: "/men/clothing/t-shirts",
          imageSrc:
            "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/c/f/r/s-vd-os-100-frgorgnl-sw-veirdo-original-imagp8yvrkmg6njs.jpeg?q=70",
          imageAlt: "",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Mens Kurtas", id: "mens_kurta" },
            { name: "Shirt", id: "shirts" },
            { name: "Men Jeans", id: "men_jeans" },
            { name: "Sweaters", id: "sweaters" },
            { name: "T-Shirts", id: "t-shirts" },
            { name: "Jackets", id: "jackets" },
            { name: "Blazers", id: "blazers" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "watchs" },
            { name: "Wallets", id: "wallet" },
            { name: "Shoes", id: "shoes" },
            { name: "Bags", id: "bags" },
            { name: "Sunglasses", id: "sunglasses" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", id: "#" },
            { name: "Counterfeit", id: "#" },
            { name: "Full Nelson", id: "#" },
            { name: "My Way", id: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Kids", id: "/" },
    { name: "Beauty", id: "/" },
  ],
};
