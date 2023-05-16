import React from "react";
import im1 from "../src/svgs/images.svg";
import yeshtery from "./svgs/yeshtery.svg";
import leftarrow from "./svgs/leftarrow.svg";
import rightClick from "./svgs/right-click.svg";
import contactUs from "./svgs/contact-us.svg";
import track from "./svgs/track.svg";
import find from "./svgs/find.svg";
class NavBar extends React.Component {
  render(): React.ReactNode {
    return (
      <div className="navBar">
        <div className="desFlex">
          <img className="menu" src={im1} alt="menu" />
          <img className="yes" src={yeshtery} alt="yeshterys" />
        </div>
        <div className="offers">
          <img className="left-click" src={leftarrow} alt="left-click" />
          <span>Valentine’s Day Offers! Buy Two Get One Free Shop Now</span>
          <span className="shop">Shop Now</span>
          <img className="right-click" src={rightClick} alt="rightclick" />
        </div>
        <div className="contact">
          <img
            className="contact-us"
            width={"20px"}
            src={contactUs}
            alt="contactus"
          />
          <span>Contact Us</span>
        </div>
        <div className="track">
          <img src={track} alt="track" width={"20px"} />
          <span>Track Order</span>
        </div>
        <div className="find">
          <img src={find} alt="find" width={"20px"} />
          <span>Find A Store</span>
        </div>
      </div>
    );
  }
}
export default NavBar;
