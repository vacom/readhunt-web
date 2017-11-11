import React, { Component } from "react";
//Components
import { Link } from "../components/atoms/index";
import { List, Item, Card, Section, Post } from "../components/molecules/index";
//Utils
import { random } from "../utils/Utils";

const ColorRange = [
  "#429BF7",
  "#DD655E",
  "#736EE8",
  "#68CDC0",
  "#65C980",
  "#F4D94D"
];
class Home extends Component {
  _goToDetails = () =>{
      this.props.history.push("/post/1");
      console.log("hey");
  };
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <h6>Categorias</h6>
          <List>
            <Item
              text="Home"
              iconName="fa-home"
              iconColor={ColorRange[random(0, 6)]}
              className="list-group-item list-group-item-action active"
            />
            <Item
              text="Travel"
              iconName="fa-suitcase"
              iconColor={ColorRange[random(0, 6)]}
              className="list-group-item list-group-item-action"
            />
            <Item
              text="Arte"
              iconName="fa-picture-o"
              iconColor={ColorRange[random(0, 6)]}
              className="list-group-item list-group-item-action"
            />
            <Item
              text="Engenharia"
              iconName="fa-terminal"
              iconColor={ColorRange[random(0, 6)]}
              className="list-group-item list-group-item-action"
            />
            <Item
              text="História"
              iconName="fa-university"
              iconColor={ColorRange[random(0, 6)]}
              className="list-group-item list-group-item-action"
            />
            <Item
              text="Informática"
              iconName="fa-laptop"
              iconColor={ColorRange[random(0, 6)]}
              className="list-group-item list-group-item-action"
            />
          </List>
        </div>
        <div className="col-md-6">
          <Section title="Hoje">
            <Post
              onClick={this._goToDetails}
              title="Zero To One"
              text="Peter Thiel's new book on Startups"
              imageSrc="https://goo.gl/jXHWTb"
              votes={12}
              comments={2}
            />
            <Post
              title="101 Ways to Live Well"
              text="Wellness hacks for travel, work and beyond"
              imageSrc="https://goo.gl/QC12xH"
              votes={60}
              comments={30}
            />
          </Section>
          <Section title="Ontem">
            <Post
              title="Atlas Obscura"
              text="Explorer's guide to the world's hidden wonders"
              imageSrc="https://goo.gl/jYdwxg"
              votes={120}
              comments={221}
            />
          </Section>
        </div>
        <div className="col-md-3">
          <h6>Sugestões</h6>
          <Card
            title="Hooked"
            subtitle="Caçado por Vitor"
            text="A book on how to build habit-forming products"
          >
            <Link>Ver livro</Link>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
