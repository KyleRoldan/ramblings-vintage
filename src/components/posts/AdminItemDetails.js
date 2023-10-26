import React, { useState, useEffect,} from "react";
import { getAllCategories, favoriteItem, getAllFavorites, deleteItem,getAllItems } from "../../services/FetchCalls";
import "./postCss/ItemDetails.css";
import { Link, useNavigate } from "react-router-dom";



export const AdminItemDetails = ({ item, currentUser }) => {
  const navigate = useNavigate;

  const [allItems, setAllItems] = useState([])
  const [isfavorited, setIsfavorited] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [favoriteCount, setFavoriteCount] = useState([]);
  const [allFavorites, setAllFavorites] = useState([]);
console.log(item)

useEffect(() => {
  getAllItems().then((itemsArray) => {
    setAllItems(itemsArray);

  })
}, [])
  
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
///////////////////HANDLE DELETE POST/////////////////////////////////////////////////////////////
  const handleDeleteItem = (itemId) => {
    // Delete the post from the database
    deleteItem(itemId).then(() => {
      // Remove the deleted post from filteredMyPosts
      setAllItems((deletedItem) => deletedItem.filter((item) => item.id !== itemId));
    });
  };

  if (!item || !item.title) {
    return <div>Loading...</div>;
  }
  
    const confirmDelete = () => {
      const shouldDelete = window.confirm("Are you sure you want to delete this item?");
  
      if (shouldDelete) {
       
        handleDeleteItem(item.id);
        
      }
   
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
        <h1>ADMIN PAGE {item.title}</h1>
        <p className="opaque-text">{itemCategory}</p>
        <p className="item-description">{item.description}</p>

        <h1> <Link className="class" to={`/items`} > <button className="classic-button" onClick={confirmDelete}>DELETE</button></Link> </h1>

        <h1> <Link className="class"  to={`/items/${item.id}/editItem`} ><button className="classic-button" >EDIT</button></Link></h1>
        
       {item.userId !== currentUser.id && !isfavorited && (
          <button className="classic-button" onClick={handleLike}>Like</button>
        )}
        {favoriteCount[item.id] || 0}
      </div>
    </div>
  );
};
