/** @format */

import "./App.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  };

  function evaluateRarity(rarity) {
    switch (rarity) {
      case "legendary":
        return "legendary-item";
      case "epic":
        return "epic-item";
      case "rare":
        return "rare-item";
      case "uncommon":
        return "uncommon-item";
      case "common":
        return "common-item";
      default:
        return "hi";
    }
  }

  return (
    <div>
      <h1 className="page-title">Store</h1>
      <div className="shop-container">
        {items.map((item) => (
          <Link key={item.itemId} className="links" to={`/shop/${item.itemId}`}>
            <div className="shop-item">
              <h1>{item.item.name}</h1>
              <p className={evaluateRarity(item.item.rarity)}>
                {item.item.rarity}
              </p>
              <p>{item.item.ratings.avgStars}/5</p>
              <img className="item-image" src={item.item.images.icon} alt="" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Shop;
