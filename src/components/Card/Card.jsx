import React from 'react'
import heart from "../../images/heart.png";
import share from "../../images/share.png";
import more from "../../images/more_icon.svg";
// import cloud from "../../images/dense-cloud.jpg";
import "./Card.css";

const Card = ({post}) => {


  return (
    <>
      <section className="card">
        <section className="card-header">
          <div>
            <div className="card-header_name">{post.name}</div>
            <div className="card-header_place">{post.location}</div>
          </div>
          <span>
            <img src={more} alt="more" />
          </span>
        </section>
        <section className="card-image">
          <img className="image" src = {`https://mauve-drill-tam.cyclic.app/image/${post.image}`}  alt="loading" />
        </section>
        <section className="card-actions">
          <span>
            <img src={heart} alt="likes" />
          </span>
          <span>
            <img src={share} alt="" />
          </span>
          <span>{post.date}</span>
        </section>
        <section className="likes">{post.likes} likes</section>
        <section className="description">{post.description}</section>
      </section>
    </>
  );

    
}

export default Card;