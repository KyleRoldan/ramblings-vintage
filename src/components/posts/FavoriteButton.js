import React, { useState, useEffect } from 'react';
import { deleteFavorite, getFavoriteRelationship } from '../../services/FetchCalls';
<<<<<<< HEAD
import favoritetab from "../../assets/favoritetab.png"
import favoritetabfilled from "../../assets/favoritetabfilled.png"
=======
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927


export const FavoriteButton = ({ itemId, userId, onFavoriteChange }) => {
  const [alreadyFavorited, setAlreadyFavorited] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
<<<<<<< HEAD
  const [test, setTest] = useState([])

=======
  const [test,setTest] = useState([])
  
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927




  useEffect(() => {
    getFavoriteRelationship(itemId, userId).then((itemArray) => {
      setTest(itemArray);
    });
  }, []);

  useEffect(() => {
    // You can use an API call here to check if the item is already favorited by the user
    fetch(`http://localhost:8088/favorite?itemId=${itemId}&userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setAlreadyFavorited(data); // Assuming the API returns a boolean indicating if it's favorited
        if (alreadyFavorited.length === 1) {
          setIsFavorite(true)
        }
      });
  }, [itemId, userId, alreadyFavorited.length]);

<<<<<<< HEAD


=======
  
  
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927

  const handleFavorite = () => {
    fetch("http://localhost:8088/favorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itemId: itemId,
        userId: userId,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setIsFavorite(true); // Update the local state
        onFavoriteChange(true);
      });
  };


<<<<<<< HEAD
  const handleUnfavorite = () => {
    deleteFavorite(test[0].id)
    setIsFavorite(false)
=======
    const handleUnfavorite = () => {
      deleteFavorite(test[0].id)
      setIsFavorite(false)
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927
  };


  return (
    <div>
      {isFavorite ? (
<<<<<<< HEAD
        <button className="favoritetab" onClick={handleUnfavorite}>
          <img className="" src={favoritetabfilled} alt="favorite Button" />

        </button>
      ) : (
        <button className="favoritetab" onClick={handleFavorite}>
          <img className="" src={favoritetab} alt="favorite Button" />
=======
        <button className="classic-button" onClick={handleUnfavorite}>
          Unlike
        </button>
      ) : (
        <button className="classic-button" onClick={handleFavorite}>
          Favorite
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927
        </button>
      )}
    </div>
  );
};
