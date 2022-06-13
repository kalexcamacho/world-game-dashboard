import React from "react";
import './CardGame.scss'

const CardGame = ({ img_card, title, price, discount }) => {
  return (
    <article className="cardGame">
      <img
        src={`./images/products/${img_card}`}
        alt={title}
      />
      <h3>{title}</h3>
      <h4>${price.toFixed(3)}</h4>
      <p>{discount === 0 ? "Sin descuento" : `${discount}%`}</p>
    </article>
  );
};

export default CardGame;
