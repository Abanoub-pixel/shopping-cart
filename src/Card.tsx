import React from "react";
import role from "./svgs/role.svg";
import star from "./svgs/star.svg";
import adidas from "./svgs/adidas.svg";
import emptyStar from "./svgs/emptyStar.svg";
import { Product } from "./types";
interface IProps {
  onAddToCart: (product: Product) => void;
  product: Product;
}
interface IState {
  count: number;
}

class Card extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { count: 0 };
  }

  render(): React.ReactNode {
    const { onAddToCart, product } = this.props;
    return (
      <div>
        <div className="choices">
          <span>Men</span>
          <span>Women</span>
          <span>Unisex</span>
          <span>Kids</span>
          <span>Best Sellers</span>
          <span>New Arrivals</span>
          <span className="ofers">Offers</span>
        </div>
        <div className="card">
          <div className="card-images">
            <img className="role-img" src={role} alt="role" />
            <img src={this.props.product.mainimage} alt="tshirt" />

            <div className="side-images">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15.589"
                height="24"
                viewBox="0 0 15.589 24"
              >
                <defs></defs>
                <path
                  d="M7373.221,1274.066a.785.785,0,0,0,.491-1.4l-13.252-10.6,13.252-10.6a.785.785,0,1,0-.981-1.226l-14.018,11.215a.784.784,0,0,0,0,1.226l14.018,11.215A.781.781,0,0,0,7373.221,1274.066Z"
                  transform="translate(-7358.418 -1250.066)"
                />
              </svg>
              <img src={this.props.product.sideimages[0]} alt="tshirt" />
              <img src={this.props.product.sideimages[1]} alt="tshirt" />
              <img src={this.props.product.sideimages[3]} alt="tshirt" />
              <img src={this.props.product.sideimages[3]} alt="tshirt" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15.589"
                height="24"
                viewBox="0 0 15.589 24"
              >
                <defs></defs>
                <path
                  d="M7911.615,1250.066a.785.785,0,0,0-.491,1.4l13.252,10.6-13.252,10.6a.785.785,0,1,0,.981,1.226l14.018-11.215a.784.784,0,0,0,0-1.226l-14.018-11.215A.787.787,0,0,0,7911.615,1250.066Z"
                  transform="translate(-7910.829 -1250.066)"
                />
              </svg>
            </div>
          </div>
          <div className="rightSide-card">
            <div className="rightSide">
              <img src={adidas} alt="adidas" />
              <span className="details">{this.props.product.description}</span>
              <span className="category"> {this.props.product.gender}</span>
              <div className="rate">
                <span className="stars">
                  <img className="star" src={star} alt="star" />
                  <img className="star" src={star} alt="star" />
                  <img className="star" src={star} alt="star" />
                  <img className="star" src={star} alt="star" />
                  <img className="emStar" src={emptyStar} alt="star" />
                </span>
                <span className="ratio-rate">
                  {this.props.product.rating.star} of 5
                </span>
                <span className="rate-nummber">
                  {this.props.product.rating.numsOfVotes} Rates
                </span>
              </div>
              <div className="price">
                <span className="cost">{this.props.product.price} LE</span>
                <span className="discount">
                  {this.props.product.discount} LE
                </span>
                <span className="discount-ratio">
                  {this.props.product.off}% Off
                </span>
              </div>
              <span className="size">Size</span>
              <div className="sizes">
                <span className="s">Small</span>
                <span className="m">Medium</span>
                <span className="l">Large</span>
                <span className="x">X-Large</span>
                <span>XX-Large</span>
              </div>
              <span className="color">Color</span>
              <div className="rounded-img">
                <img
                  src="https://api.yeshtery.com/v1/yeshtery/files/31/ha1082-4-apparel-on-model-side-view-white.jpg?height=150"
                  alt="tshirt"
                />
                <img
                  src="https://api.yeshtery.com/v1/yeshtery/files/31/ha1082-2-apparel-on-model-standard-view-white.jpg?height=150"
                  alt="tshirt"
                />
              </div>
              <span className="qnt">Quantity</span>
              <div className="incr-decr">
                <span className="decr">
                  <span
                    onClick={() => {
                      this.setState({ count: this.state.count - 1 });
                    }}
                  >
                    -
                  </span>
                </span>
                <span>{this.state.count}</span>
                <span className="incr">
                  <span
                    onClick={() => {
                      this.setState({ count: this.state.count + 1 });
                    }}
                  >
                    +
                  </span>
                </span>
              </div>
              <div className="btn">
                <button onClick={() => onAddToCart(product)} className="adding">
                  Add to cart
                </button>
                <button className="picking">Pickup From Store</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
