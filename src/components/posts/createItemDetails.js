import React, { useState, useEffect } from "react";
import { getAllCategories, favoriteItem, getAllFavorites } from "../../services/FetchCalls";
import "./postCss/ItemDetails.css";
import testImg from "../../assets/testImg.jpg";

export const CreateItemDetails = ({ item, currentUser }) => {
  const [isfavorited, setIsfavorited] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [favoriteCount, setFavoriteCount] = useState([]);
  const [allFavorites, setAllFavorites] = useState([]);

  useEffect(() => {
    getAllFavorites().then((favoritesArray) => {
      setAllFavorites(favoritesArray);
    });
  }, []);

  useEffect(() => {
    getAllCategories().then((categoryArray) => {
      setAllCategories(categoryArray);
    });
  }, []);

  const itemCategory = allCategories
    .filter(category => category.id === item.categoryId)
    .map(topic => topic.name);

  const handleLike = () => {
    if (!currentUser.isAdmin) {
      favoriteItem(item.id, currentUser.id).then(() => {
        setIsfavorited(true);
      });
    }
  };

  if (!item || !item.title) {
    return <div>Loading...</div>;
  }

  return (
    <div className="post-details">
      <div className="imageBox">
        <img src={item.images[1]} alt="item detail" className="image_Display" />
        <img src={item.images[2]} alt="item detail" className="image_Display" />
        <img src={item.images[3]} alt="item detail" className="image_Display" />
      </div>
      <div className="item-details-info-box">
        <h2>${item.price}</h2>
        <h1>{item.title}</h1>
        <p className="opaque-text">{itemCategory}</p>
        <p className="item-description">{item.description}</p>
        {item.userId !== currentUser.id && !isfavorited && (
          <button onClick={handleLike}>Like</button>
        )}
        {favoriteCount[item.id] || 0}
      </div>
    </div>
  );
};
