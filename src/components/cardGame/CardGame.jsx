import React from "react";

const CardGame = ({ img_card, title, price, discount }) => {
  return (
    <article>
      <img
        src={`./images/products/${img_card}`}
        alt={title}
        style={{ width: "120px" }}
      />
      <h4>{title}</h4>
      <h5>${price.toFixed(3)}</h5>
      <p>{discount === 0 ? "Sin descuento" : `${discount}%`}</p>
    </article>
  );
};

export default CardGame;
