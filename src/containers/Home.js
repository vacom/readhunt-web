import React, { Component } from "react";
//Components
import { Section } from "../components/molecules/index";
import Articles from "./Articles";
import Categorias from "./Categories";
import Suggestions from "./Suggestions";

class Home extends Component {
  state = {
    categoryId: 0
  };
  componentDidMount() {
    /*
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijk1ZTU4YWNmMThjMzk2OTI1ZDE1MmY1MGU4ZDJmM2NjYTcxM2EwZTA1NDQwMTkyM2Q4NGFiN2Y0MzMyNTdlY2U0NmZmNGVjN2FhNzM4OTkxIn0.eyJhdWQiOiI2IiwianRpIjoiOTVlNThhY2YxOGMzOTY5MjVkMTUyZjUwZThkMmYzY2NhNzEzYTBlMDU0NDAxOTIzZDg0YWI3ZjQzMzI1N2VjZTQ2ZmY0ZWM3YWE3Mzg5OTEiLCJpYXQiOjE1MTIyMTkzOTQsIm5iZiI6MTUxMjIxOTM5NCwiZXhwIjoxNTQzNzU1Mzk0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Ir1n0r6zhgBbFw3PrUJj8bqYoRRkZFaCj-gnyN_m4AuyoEnCMULB8nLnevIdpOsfbRm_cyeC0A8374rHObnGsVW0OcWovx432QKYnip_C-Ux9zSkcuupfD_OvWCbD_BS8cyhxEbHqQ4OGxpFdk2_CCyJW0FaMW3L6tpAygi9oz5Hw4DzrbXlaYqIuZc1RvBvwScikvsej7F_EguIO_xj3DndoiRTYKOielWAg2wkfXmcVPoJDeCybLbcBppBKoQBaRI_kWgQNsdpL2xfG2ZrVmAj3sg7nBej9yS61e0KgjvJ43hOBa0qubESAQYSSrrnYiMh_q2YLCEF5rpFUMS35E8Z9VZeshkAbBCa7P5BlracRbSBRk68cuyklaZCAgu5jT1vnJJJY3H6pN1shdnD5NRqGhTeVktiuoRsNaoPNeHEh_O4rNH7NUeA1olTMYUGBSp3nxW94vv74JDKGBiEkc1mbd6twhvXm6gZ1TcuYhi0L6DDhB2A2aGK1Z7RsOHZjudUcagJjgkX3Xrz4knofUSpEcH9L9OoUVPERqD5ZRyuPneEA7PmUaMiWvsUvwElRCMPIxthzP-_qLYwVqCLjUQELpgWK1re1TG_n94G1gGD7ktYnMmz90-OnRJZTlJC071X6jbCveTUPY1a6YrcXbA3aGAzLh8aP5xScOqNJwU";
    const userId = 1;
    window.localStorage.setItem("readhuntToken", token);
    window.localStorage.setItem("readhuntUserId", userId);
    */
  }
  _goToDetails = () => {
    this.props.history.push("/post/1");
  };
  _selectCategory(categoryId) {
    this.setState({ categoryId });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <h6>Categorias</h6>
          <Categorias changeCategory={id => this._selectCategory(id)} />
        </div>
        <div className="col-md-6">
          <Section title="Livros">
            <Articles categoryId={this.state.categoryId} />
          </Section>
        </div>
        <div className="col-md-3">
          <h6>Sugestões</h6>
          <Suggestions />
        </div>
      </div>
    );
  }
}

export default Home;
