import React from "react";
import yeshtery2 from "./svgs/yeshtery2.svg";
import facebook from "./svgs/facebook.svg";
import linkedin from "./svgs/linkedin.svg";
import insta from "./svgs/insta.svg";
import twitter from "./svgs/twitter.svg";

class Footer extends React.Component {
  render(): React.ReactNode {
    return (
        <>
         <div className="footr">
          <div className="yeshtere">
            <img className="yesh" src={yeshtery2} alt="yeshtery" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto dolorem cupiditate delectus iure voluptatem ipsum a
              pariatur sint! A omnis tenetur laboriosam l
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum sed quia beatae magnam tempore, dicta laborum mollitia
              nulla, maxime debitis reiciendis ducimus tempora laboriosam fugit.
              Quo magni culpa nulla tempora laboriosam fugit. Quo magni culpa
              nulla dolore!
            </p>
            <p className="btm-border">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              molestiae, modi fuga esse animi, iusto deleniti laboriosam magni
              ipsam rem.
            </p>
            <h5>© 2021 yeshtery, all rights reserved.</h5>
          </div>
          <div className="info">
            <h3>Subscribe to our newsletter</h3>
            <div className="box2">
              <input type="text" placeholder="Search" />
              <div className="subscribe">
                <span>Subscribe</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.688"
                  height="20.674"
                  viewBox="0 0 20.688 20.674"
                >
                  <g transform="translate(-5905.927 -6908.532)">
                    <path d="M5926.438,6908.7a.6.6,0,0,0-.658-.123l-19.495,8.544a.6.6,0,0,0-.357.516.589.589,0,0,0,.3.547l6.8,3.855,4.035,6.867a.6.6,0,0,0,.512.3h.035a.6.6,0,0,0,.512-.358l8.447-19.486A.59.59,0,0,0,5926.438,6908.7Zm-3.1,2.245-9.977,9.911-5.509-3.122Zm-5.844,16.347-3.286-5.6,10.034-9.968Z" />
                  </g>
                </svg>
              </div>
            </div>
            <div className="list">
              <div className="list-info">
                <span>About us</span>
                <span>Contact us</span>
                <span>Track Order</span>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
                <span>Sell With Us</span>
                <span>Shipping And Returns</span>
              </div>
              <div className="social-info">
                <div className="facebook">
                  <img src={facebook} alt="facebook" />
                  <span>/YESHTERY </span>
                </div>
                <div className="linkedin">
                  <img src={linkedin} alt="linkedin" />
                  <span>/YESHTERY</span>
                </div>
                <div className="insta">
                  <img src={insta} alt="insta" />
                  <span>/YESHTERY</span>
                </div>
                <div className="twitter">
                  <img src={twitter} alt="twitter" />
                  <span>/YESHTERY</span>
                </div>
              </div>
            </div>
            <div className="payment">
              <div className="pay">
                <img
                  className="cash-img"
                  src="https://tse2.mm.bing.net/th?id=OIP.JHbRycE7WbaYqa3zN76xDgHaDN&pid=Api&P=0"
                  alt="deliver-img"
                />
                <img
                  className="visa-img"
                  src="https://clipground.com/images/visa-logo-png-5.png"
                  alt="visa-img"
                ></img>
                <img
                  className="master-img"
                  src="https://logos-world.net/wp-content/uploads/2020/09/MasterCard-Logo-1979-1990.png"
                  alt="mastercard-img"
                ></img>
              </div>
              <div className="poweredby">
                <h3>Powered By </h3>
                <img
                  className="nasnav-img"
                  src="https://www.nav.com/wp-content/uploads/2015/10/logo_nav_lt-blue1.png"
                  alt="nasnav-img"
                ></img>
              </div>
            </div>
          </div>
        </div>
        </>
    )}}

    export default Footer;