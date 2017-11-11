import React, { Component } from "react";
//Components
import { Image, Icon } from "../components/atoms/index";
import { Section, Post } from "../components/molecules/index";
import { CommentInput } from "../components/organisms/index";
import Comment from "../components/molecules/Post";

class Details extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <Post
              onDetails
              title="Atlas Obscura"
              text="Explorer's guide to the world's hidden wonders"
              imageSrc="https://goo.gl/jYdwxg"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-12 order-sm-12 order-md-1">
            <Section noTitle>
              <Image src="https://goo.gl/vjPs87" />
            </Section>
            <h6 style={{ marginTop: 25 }}>Descrição</h6>
            <Section noTitle>
              <p>
                A book on how to build habit-forming products. Vivamus sagittis
                lacus vel augue laoreet rutrum faucibus dolor auctor. Duis
                mollis, est non commodo luctus.
              </p>
            </Section>
            <h6 style={{ marginTop: 25 }}>Comentários</h6>
            <Section noTitle>
              <CommentInput />
              <Comment
                onDetails
                title="Vitor Amaral"
                text="Awesome book, recommend for everyone"
                imageSrc="https://goo.gl/qDzjcE"
                imageSize={50}
                category="14 de Outubro 17"
              />
          
            </Section>
          </div>
          <div className="col-md-4 col-sm-12  order-sm-1  order-md-12">
            <Section noTitle>
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                <Icon name="fa-thumbs-up" color="#FFF" /> Votar
                <span
                  style={{ marginLeft: 10, fontSize: 17, color: "#e6e6e6" }}
                >
                  200
                </span>
              </button>
              <hr />
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg btn-block"
              >
                <Icon name="fa-link" /> Website
              </button>
            </Section>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
