import { Product, SimilarProduct } from "./types";
import { data, Products } from "./data";

export const api = {
  getProduct: async function getProduct(): Promise<Product> {
    return data;
  },
  getSimilarProducts: async function getSimilarProducts(): Promise<
    SimilarProduct[]
  > {
    return Products;
  },
};
