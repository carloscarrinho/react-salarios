import React, { Fragment, Component } from "react";
import { FaMoneyBillAlt, FaHeart } from "react-icons/fa";

import { Header, Footer } from "./style";
import Form from "../../components/Form";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Header>
          <FaMoneyBillAlt />
          <h1>React Salário</h1>
          <FaMoneyBillAlt />
        </Header>
        <Form />
        <Footer>
          <div class="made-with-love">
            <p>
              Made with
              <FaHeart alt="made by carloscarrinho" />
              by
              <a href="https://www.github.com/carloscarrinho" target="_blank">
                @carloscarrinho
              </a>
            </p>
          </div>
        </Footer>
      </Fragment>
    );
  }
}

export default Home;
