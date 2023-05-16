import React from "react";
import "./App.scss";
import { api } from "./api";
import { Product, SimilarProduct } from "./types";
import NavBar from "../src/NavBar";
import DropDown from "../src/DropDown";
import Bar from "../src/Bar";
import Card from "./Card";
import Footer from "./Footer";
import SimilarProducts from "./SimilarProducts";

interface IProps {}

interface IState {
  data: Product | undefined;
  count: number;
  cart: Product[];
  similarProduct: SimilarProduct[];
  check: boolean;
}
class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: undefined,
      count: 0,
      cart: [],
      similarProduct: [],
      check: false,
    };
  }
  componentDidMount(): void {
    api.getProduct().then((res) => this.setState({ data: res }));
  }

  render(): React.ReactNode {
   const opencart = () => {this.setState({ check: !this.state.check })}
    return (
      <div className="App" >
       {this.state.check && <div className="modal" ></div>}
        {this.state.data && this.state.check && (
          <DropDown cart={this.state.cart} openCart={opencart}  product={this.state.data} />
        )}
        <NavBar />
        <Bar
          openCart={opencart}
          check={this.state.check}
          cart={this.state.cart}
        />
        {this.state.data && (
          <Card
            product={this.state.data}
            onAddToCart={(product: Product) =>
              this.setState({ cart: [...this.state.cart, product] })
            }
          />
        )}
        <SimilarProducts />
        <Footer />
      </div>
    );
  }
}

export default App;
