import React, { useState,useEffect } from "react"
import { getAllCategories, getAllUsers, favoriteItem, getAllItems, getAllFavorites } from "../../services/FetchCalls"
import ".//postCss/ItemDetails.css"
import testImg from "../../assets/testImg.jpg"


export const CreateItemDetails = ({ item, currentUser }) => {
  const [isfavorited, setIsfavorited] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [favoriteCount, setFavoriteCount] = useState([])
  const [allItems, setAllItems] = useState([])
  const [allFavorites, setAllFavorites] = useState([])
//   const [allUsers, setAllUsers] = useState([]); --------- FOR USE TO ASSIGN A USER OR AUTHOR TO AN ITEM POST 

useEffect(() => {
    getAllItems().then((itemsArray) => {
        setAllItems(itemsArray);

    })
}, [])

useEffect(() => {
    getAllFavorites().then((favoritesArray) => {
        setAllFavorites(favoritesArray)
    })
}, [])


useEffect(() => {
    
    getAllCategories().then((categoryArray) => {
      setAllCategories(categoryArray);
    });
  }, []);

//   useEffect(() => {
//     getAllUsers().then((usersArray) => {
//       setAllUsers(usersArray);
//     });
//   }, []); --------- FOR USE TO ASSIGN A USER OR AUTHOR TO AN ITEM POST 
  
  
/////////////////////////////FAVORITE FUNCTIONALITY/////////////////////////////////////
useEffect(() => {
    const itemFavoriteCounts = {}

    allItems.forEach((item) => {
        const favoritesForPost = allFavorites.filter(
            (favorite) => favorite.itemId === item.id
        )
        itemFavoriteCounts[item.id] = favoritesForPost.length
    })

    setFavoriteCount(itemFavoriteCounts)
}, [allItems, allFavorites])
//////////////////////ASSIGN CATEGORY TO ITEM/////////////////////////////////////////////
   
    const itemCategory = allCategories
  .filter(category => category.id === item.categoryId)
  .map(topic => topic.name);

/////////////////HANDLE LIKE BUTTON FUNCTIONALITY////////////////////////////////////////
  const handleLike = () => {
    if (!currentUser.isAdmin) {
      favoriteItem(item.id, currentUser.id).then(() => {
        setIsfavorited(true);
      });
    }
  };

  ///////////// If I WANT TO ASSIGN A USER OR AUTHOR TO AN ITEM POST AT A LATER DATE///////

//   const itemCreator = allUsers
//   .filter((user) => user.id === item.userId)
//   .map((user )=> user.name);


  
  
  
  return (<>
   
    <div className="post-details">
{allItems.map((item) => (


        <><div className="imageBox">
        <img src={item.images[1]} alt="item detail" className="image_Display" />
        <img src={item.images[2]} alt="item detail" className="image_Display" />
        <img src={item.images[3]} alt="item detail" className="image_Display" />
    </div><div className="item-details-info-box">
            {/* <p>Owner:{itemCreator}</p> */}

            <h2>{item.price}</h2>
            <h1>{item.title}</h1>

            <p className="opaque-text"> {itemCategory}</p>

            <p className="item-description">{item.description}</p>


            {/* Display the like button only if the user is not the author and has not already liked the post */}
            {item.userId !== currentUser.id && !isfavorited && (
                <button onClick={handleLike}>Like</button>
            )}
            {favoriteCount[item.id] || 0}
            {/* {item.userId === currentUser.id && <button>Edit</button>} */}
        </div></>
   
 
))}
 </div>
</>
);
};






{/* {filteredItems.map((item) => (

    <div className="image-container" key={item.id}>
        <img src={item.images[0]}alt="jacket" />
        <div className="overlay">
            <Link className="link_styling" to={`/items/${item.id}`}>{item.title}</Link>
            <div>{item.price}</div>
        </div>



        <h1><div className="item_card_price"> {item.price}</div></h1>


    </div>

))} */}