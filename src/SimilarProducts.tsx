import React from "react";
import { Product } from "./types";
import SimiCart from "./SimiCart";

interface IProps {}
interface IState {
  data: Product | undefined;
  count: number;
  addToCart: number;
}
class SimilarProducts extends React.Component<IProps, IState> {
  render(): React.ReactNode {
    return (
      <>
       <div className="similar-products">
          <span>Similar Products</span>
          <div>You may like these products also</div>
        </div>
        <div className="group">
          <SimiCart />
          <SimiCart />
          <SimiCart />
          <SimiCart />
        </div>
      </>
    );
  }
}

export default SimilarProducts;
