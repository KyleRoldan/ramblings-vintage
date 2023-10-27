import React, { useState, useEffect } from 'react';

export const FavoriteButton = ({ itemId, userId, onFavoriteChange }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // You can use an API call here to check if the item is already favorited by the user
    fetch(`http://localhost:8088/favorite/${itemId}?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setIsFavorite(data.isFavorite); // Assuming the API returns a boolean indicating if it's favorited
      });
  }, [itemId, userId]);

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

  const handleUnfavorite = () => {
    fetch(`http://localhost:8088/favorite/${itemId}?userId=${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(() => {
        setIsFavorite(false); // Update the local state
        onFavoriteChange(false);
      });
  };

  return (
    <div>
      {isFavorite ? (
        <button className="classic-button" onClick={handleUnfavorite}>
          Unlike
        </button>
      ) : (
        <button className="classic-button" onClick={handleFavorite}>
          Favorite
        </button>
      )}
    </div>
  );
};
