import React, { Component } from "react";
//Components
import { List, Item, Placeholder } from "../components/molecules/index";
import Spinner from "react-md-spinner";
//Utils
import { random } from "../utils/Utils";
//API
import { getCategories } from "../api/categories";

const ColorRange = [
  "#429BF7",
  "#DD655E",
  "#736EE8",
  "#68CDC0",
  "#65C980",
  "#F4D94D"
];

const IconRange = [
  "fa-suitcase",
  "fa-picture-o",
  "fa-futbol-o",
  "fa-terminal",
  "fa-calculator",
  "fa-history",
  "fa-laptop",
  "fa-graduation-cap",
  "fa-university"
];
class Categories extends Component {
  state = {
    loading: true,
    error: false,
    categories: [],
    msg: "",
    selectCategory: 0
  };
  componentDidMount() {
    this._getCategories();
  }
  _getCategories = async () => {
    const res = await getCategories();
    const { error, data: categories, msg } = res;
    if (error) {
      this.setState({ error: true, loading: false, msg });
      return;
    }
    this.setState({ categories, loading: false, msg, error: false });
  };
  _selectCategory(id) {
    this.setState({ selectCategory: id });
    this.props.changeCategory(id);
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="text-center">
          <Spinner size={30} />
        </div>
      );
    }
    if (this.state.error) {
      return (
        <div className="text-center">
          <Placeholder msg={this.state.msg} iconSize={32} />
        </div>
      );
    }
    const { selectCategory } = this.state;
    return (
      <List>
        <Item
          text="Home"
          iconName="fa-home"
          iconColor={ColorRange[random(0, 6)]}
          onClick={() => this._selectCategory(0)}
          className={`list-group-item list-group-item-action ${
            selectCategory === 0 ? "active" : ""
          }`}
        />
        {this.state.categories.map((data, index) => {
          return (
            <Item
              key={data.id}
              text={data.content}
              iconName={IconRange[index]}
              iconColor={ColorRange[random(0, 6)]}
              onClick={() => this._selectCategory(data.id)}
              className={`list-group-item list-group-item-action ${
                selectCategory === data.id ? "active" : ""
              }`}
            />
          );
        })}
      </List>
    );
  }
}

export default Categories;
