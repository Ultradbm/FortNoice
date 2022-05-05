/** @format */

import "./App.css";
import React, { useState, useEffect } from "react";

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({
    images: {},
  });

  const fetchItem = async () => {
    const itemData = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await itemData.json();

    setItem(item.data.item);
    console.log(item.data.item);
  };

  return (
    <div className="itemDetail">
      <h1>{item.name}</h1>
      <img src={item.images.background} alt="" />
    </div>
  );
}

export default Item;
