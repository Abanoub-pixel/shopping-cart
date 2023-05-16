type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

export type Product = {
  name: string;
  logo: string;
  description: string;
  gender: string;
  rating: { star: number; numsOfVotes: number };
  price: number;
  off: IntRange<0, 101>;
  discount: number;
  size: "small" | "medium" | "large" | "xl" | "xxl";
  color: string;
  mainimage: string;
  pickUp?: string;
  imported?: { from: string; to: string; duration: number };
  sideimages: string[];
};

export type SimilarProduct = Pick<
  Product,
  | "description"
  | "price"
  | "discount"
  | "logo"
  | "rating"
  | "pickUp"
  | "imported"
>;
