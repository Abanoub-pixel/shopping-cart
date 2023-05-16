import React from "react";
import { Product } from "./types";
interface IProps {
  product: Product;
  cart: Product[];
  openCart: () => void;
}

class DropDown extends React.Component<IProps> {
  render(): React.ReactNode {
    const { openCart } = this.props;
    return (
      <div className="drop-down">
        <div className="my-cart">
          <span className="exit" onClick={openCart}>
            ×
          </span>
          <span className="mycart">My Cart</span>
          <span className="cart-summary">Cart Summary</span>
          <div className="sm-cart">
            <img src={this.props.product.sideimages[0]} alt="tshirt" />
            <div className="right-my-cart">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <span className="qty">Quantity: {this.props.cart.length}</span>
              <div className="price-remove">
                {this.props.product && (
                  <span>{this.props.product.price} LE</span>
                )}
                <button onClick={openCart}>Remove</button>
              </div>
            </div>
          </div>
          {this.props.product && (
            <span className="total">{`Total: ${
              this.props.cart.length * this.props.product.price
            } LE`}</span>
          )}
          <div className="btns">
            <button className="remove">Remove Cart</button>
            <button className="complete">Complete Checkout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default DropDown;
