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
  componentDidMount(){
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjA2NWMxM2RjNjgzMDFiNjZkNDg2MDFkMDA2MmEyNDhkNTFiNmVmYThiMmMxNzI0NGQ3Y2M1N2NkYzAyZTE5NzlkMjJjNGJkZTcyYjRiY2U5In0.eyJhdWQiOiIxIiwianRpIjoiMDY1YzEzZGM2ODMwMWI2NmQ0ODYwMWQwMDYyYTI0OGQ1MWI2ZWZhOGIyYzE3MjQ0ZDdjYzU3Y2RjMDJlMTk3OWQyMmM0YmRlNzJiNGJjZTkiLCJpYXQiOjE1MTIxNzIxODAsIm5iZiI6MTUxMjE3MjE4MCwiZXhwIjoxNTQzNzA4MTgwLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.GoSgEO9ckbmCqDeMw36Tj1_vzwW_fhwaaI0kH3yb08KcWM6k1FXjzAH9cL7xvFUWRMEcNaEgw-0Nrw3IDIKTQh97nA-NoCCI7OLHVo4c1WLEqedRtu0e3rD3qERmMQrfqlvIiB7SndYttwrRXegSA0PBsD-3qsSjos5gKRB2R-9o4HCd6QJNHhnCSSg_fckLrVRKHOPMEmZ500boyAeA04bGixk6EotuUQ0b7GapOzO_OCFgxsKmNpgcGAXkBdZDK6BMTlQlGKNy4d3fGP3V6cESp8g9ZMWdj2HOweyqXLjz6zaFsEcoMYj0eIUNFvRsTx4jSW4ZNN3ovHQCGHm6jLIlUJvWoWwT3cE0LNeBHljGv9qQXypE5kol3WGAF6-T0GwyPVzRzzl32uOVXdpsJVyO3g5t2bsp1Ptoh7F-5PSF2y7StE493XT53AExKelvcgawgxIyG9mSujoWiuIiNhRMnTrDdN7XV7JaoSTuPB6c9xHjKa8fTYd8w9a2qPNj3qUQp7_ya9ZWcDS9S7lRz-_CuMnAYpWsEa6DBpomJP3c6K1mrBgh8VbRZAZ_dMxsr5nRSq-Ce71QtCkpkoW0SOHptnUuEjE3DX2AnVxQV0OxW_CFjflzwaiaB1WF3mJXLaLPDPyfmFzjAPmNKddOrZSjz6kb0S5cxek5b3SKDxw";
    const userId = 1;
    window.localStorage.setItem("readhuntToken", token);
    window.localStorage.setItem("readhuntUserId", userId);
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
