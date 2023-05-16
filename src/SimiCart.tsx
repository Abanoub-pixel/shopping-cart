import React from "react";
import role from "./svgs/role.svg";
import star from "./svgs/star.svg";
import adidas from "./svgs/adidas.svg";
import emptyStar from "./svgs/emptyStar.svg"
class SimiCart extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <div card-group>
          <div className="card-samples">
            <div className="image-side">
              <img className="role" src={role} alt="role" />
              <img
                src="https://api.yeshtery.com/v1/yeshtery/files/31/ha1082-2-apparel-on-model-standard-view-white.jpg?height=150"
                alt="tshirt"
              />
            </div>
            <span className="defn">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <div className="cost-side">
              <div className="price">
                <span className="base-price">9.999 LE</span>
                <div className="ratio">
                  <span className="discount">9.999 LE</span>
                  <span className="discount-ratio">50%</span>
                </div>
              </div>

              <img src={adidas} alt="adidas" />
            </div>
            <div className="evaluate">
              <div className="stars">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img className="emStar" src={emptyStar} alt="star" />
              </div>
              <span>4.5 of 5</span>
            </div>
            <span className="pick">pick up</span>
          </div>
        </div>
      </>
    );
  }
}

export default SimiCart;
