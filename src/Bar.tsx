import React from "react";

import cartIcon from "./svgs/cart.svg";
import wishlist from "./svgs/wishlist.svg";
import login from "./svgs/login.svg";
import search from "./svgs/search.svg";
import adidas from "./svgs/adidas.svg";
import { Product } from "./types";
interface IProps {
  cart: Product[];
  check:boolean
  openCart: ()=> void
}


class Bar extends React.Component<IProps> {


  render(): React.ReactNode {
    const { cart,openCart} = this.props;
    return (
      <div className="bar">
        <div className="box">
          <img src={search} alt="search" />
          <input type="text" placeholder="Search" />
        </div>
        <div className="addidas">
          <img src={adidas} alt="adidas" />
        </div>

        <div className="side-bar">
          <div className="cart"  onClick={openCart}>
            <img src={cartIcon} alt="cart" />
            <span className="cart-count">{cart.length}</span>
            <span className="cart-text">Cart</span>
          </div>
          <div className="wishlist">
            <img src={wishlist} alt="wishlist" />
            <span className="wishlist-text">Wishlist</span>
          </div>
          <div className="login">
            <img src={login} alt="login" />
            <span className="login-text">Login</span>
          </div>
        </div>
      </div>
    );
  }
}
export default Bar;
