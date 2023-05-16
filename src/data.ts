import { Product, SimilarProduct } from "./types";
export const data: Product = {
  name: "shirt",
  logo: "logo",
  description:
    "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit",
  gender: "Men",
  rating: { star: 4.5, numsOfVotes: 7 },
  price: 90.0,
  discount: 80.0,
  off: 30,
  size: "small",
  color: "red",
  mainimage:
    "https://api.yeshtery.com/v1/yeshtery/files/31/bb6a28f6-b359-4b02-b468-826bd29e23a4.jpeg?height=568",
  sideimages: [
    "https://api.yeshtery.com/v1/yeshtery/files/31/bb6a28f6-b359-4b02-b468-826bd29e23a4.jpeg?height=150",
    "https://api.yeshtery.com/v1/yeshtery/files/31/ha1082-1-apparel-photography-front-view-white.jpg?height=150",
    "https://api.yeshtery.com/v1/yeshtery/files/31/ha1082-4-apparel-on-model-side-view-white.jpg?height=150",
    "https://api.yeshtery.com/v1/yeshtery/files/31/ha1082-2-apparel-on-model-standard-view-white.jpg?height=150",
  ],
};
export const Products: SimilarProduct[] = [
  {
    description:
      "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    discount: 70,
    logo: "logo",
    price: 30,
    rating: { numsOfVotes: 9, star: 4.5 },
    imported: { from: "cairo", duration: 5, to: "london" },
    pickUp: "hyper",
  },
  {
    description:
      "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    discount: 70,
    logo: "logo",
    price: 30,
    rating: { numsOfVotes: 9, star: 4.5 },
    imported: { from: "cairo", duration: 5, to: "london" },
    pickUp: "hyper",
  },
  {
    description:
      "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    discount: 70,
    logo: "logo",
    price: 30,
    rating: { numsOfVotes: 9, star: 4.5 },
    imported: { from: "cairo", duration: 5, to: "london" },
    pickUp: "hyper",
  },
  {
    description:
      "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    discount: 70,
    logo: "logo",
    price: 30,
    rating: { numsOfVotes: 9, star: 4.5 },
    imported: { from: "cairo", duration: 5, to: "london" },
    pickUp: "hyper",
  },
];
