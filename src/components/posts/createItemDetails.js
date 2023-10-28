import React, { useState, useEffect } from "react";
import { getAllCategories, getAllUsers, getAllFavorites, getAllItems, assignLike, updateLike, getFavoritedItems, deleteLike } from "../../services/FetchCalls";
import "./postCss/ItemDetails.css";
import { FavoriteButton } from "./FavoriteButton";








export const CreateItemDetails = ({ item, currentUser }) => {
  const [allItems, setAllItems] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [allFavorites, setAllFavorites] = useState([])
  const [likeCount, setLikeCount] = useState([])
  const [allFavoriteItems, setAllFavoriteItems] = useState({})
  const [isFavorite, setIsFavorite] = useState(false);
  
  
  const userId = currentUser.id
  const itemId = item.id

  useEffect(() => {
    getAllItems().then((itemArray) => {
      setAllItems(itemArray);
    });
  }, []);

  useEffect(() => {
    getAllCategories().then((categoryArray) => {
      setAllCategories(categoryArray);
    });
  }, []);

  

  useEffect(() => {
    getAllFavorites().then((favArray) => {
      setAllFavorites(favArray);
    });
  }, []);
  

  useEffect(() => {
    getFavoritedItems().then((favItemArray) => {
      setAllFavoriteItems(favItemArray);
    });
  }, []);




  useEffect(() => {
    const postLikeCounts = {}

    allItems.forEach((item) => {
      const likesForPost = allFavorites.filter(
        (like) => like.itemId === item.id
      )
      postLikeCounts[item.id] = likesForPost.length
    })

    setLikeCount(postLikeCounts)
  }, [allFavorites, allItems, item.id])

  
  const itemCategory = allCategories
    .filter(category => category.id === item.categoryId)
    .map(topic => topic.name);

  
  
    const handleFavoriteChange = (updatedIsFavorite) => {
    
          setIsFavorite(updatedIsFavorite);
      
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
        <div>

        <div>
        <FavoriteButton
         
         itemId= {itemId} 
         userId={userId}
         isFavorite={isFavorite}
        onFavoriteChange={handleFavoriteChange}
        />
      </div>



          <div key={item.id}>
            Likes: {likeCount[item.id] || 0}
          </div>






        </div>
      </div>
    </div>
  );
};



