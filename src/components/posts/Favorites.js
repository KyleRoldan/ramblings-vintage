import { useState, useEffect } from "react";
import { getAllItems, getAllFavorites, getAllCategories, getListOfFavorites } from "../../services/FetchCalls";
import { Link } from "react-router-dom"
import ".//postCss/AllItems.css"
import testImg from "../../assets/testImg.jpg"







export const Favorites = ({currentUser}) => {


    const [allItems, setAllItems] = useState([])
    const [allFavorites, setAllFavorites] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const [categoryForItem, setCategoryForItem] = useState({})
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredItems, setFilteredItems] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [itemsFavoritedByCurrentUser,setItemsFavoritedByCurrentUser] = useState([])

    useEffect(() => {
        getListOfFavorites().then((listFavoritesArray) => {
            setAllFavorites(listFavoritesArray)
        })
    }, [])


    useEffect(() => {
        getAllFavorites().then((favoritesArray) => {
            setAllFavorites(favoritesArray)
        })
    }, [])

    useEffect(() => {
        getAllItems().then((itemsArray) => {
            setAllItems(itemsArray);

        })
    }, [])

    useEffect(() => {
        getAllCategories().then((categoryArray) => {
            setAllCategories(categoryArray)
        })
    }, [])



    ///////////Grab Current Users 


    useEffect(()=>{ // Get the ID of the current user (assuming you have a way to determine the current user's ID)
        const currentUserId = currentUser.id; // Replace with your actual method of getting the current user's ID
    
        // Filter items that have been favorited by the current user
        const currentUserFavorites = allFavorites.filter(
          (favorite) => favorite.userId === currentUserId
        );
    
        // Get the IDs of items favorited by the current user
        const favoritedItemIds = currentUserFavorites.map((favorite) => favorite.itemId);
    
        // Filter the items that match the favorited item IDs
        const itemsFavoritedByCurrentUser = allItems.filter((item) =>
          favoritedItemIds.includes(item.id)
        );

        setItemsFavoritedByCurrentUser(itemsFavoritedByCurrentUser)
    },[allFavorites, allItems, currentUser.id])
       
    
        
      
        
    




    ///////////////////////Categories/////////////////////////////////////

    useEffect(() => {
        const itemCategory = {}

        itemsFavoritedByCurrentUser.forEach((item) => {
            const categoriesForItems = allCategories.filter(
                (category) => category.id === item.categoryId
            );
            itemCategory[item.id] = categoriesForItems
        });

        setCategoryForItem(itemCategory)
    }, [itemsFavoritedByCurrentUser, allCategories])


    /////////////////////////////////////////////////////////////////

    /////////////////Search Features/////////////////////////////////

    useEffect(() => {
        const foundItems = itemsFavoritedByCurrentUser.filter((item) => {
            // Check if no category is chosen or "Select" is chosen
            if (isNaN(selectedCategory) || selectedCategory === "All" || selectedCategory === 0) {
                // Show all items
                return item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase());

            }

            // Check if the selectedCategory matches the item's category
            if (selectedCategory === item.categoryId) {
                // Check if the item's title includes the search term (case-insensitive)
                return item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase());

            }

            return false; // Filter out items that don't match the criteria.
        });

        // Set the filtered items after filtering is complete.
        setFilteredItems(foundItems);
    }, [selectedCategory, searchTerm, itemsFavoritedByCurrentUser]);



    /////////////////////////////////////////////////////////////////

    return <>

    


        <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(parseInt(event.target.value))}
        >
            <option value="All">All</option>
            {allCategories.map((itemOption) => (
                <option key={itemOption.id} value={itemOption.id}>
                    {itemOption.name}
                </option>
            ))}
        </select>

        <input
            onChange={(event) => { setSearchTerm(event.target.value) }}
            type="text"
            placeholder="search title"
            className="title-search"
        />



     <h1>MY FAVORITES</h1>


     <div className="image-container_whole">
        {filteredItems.map((item) => (
          <div className="image-container" key={item.id}>
            <img src={item.images[0]} alt="jacket" />
            <div className="overlay">
              <Link className="link_styling" to={`/items/${item.id}`}>
                {item.title}
              </Link>
              <div>${item.price}</div>
            </div>
          </div>
        ))}
      </div>
    
  







        {/* ////////////ItEM CARD STYLED IN RELATION TO CAPSTONE WIREFRAM//////////////////////////////*/}

        {/* <div className="item_body">
    
                {filteredItems.map((item) => (
                    <div className="item_card" key={item.id}>
                        <div className="image_boxCard">
                            <img src={testImg} alt="item detail" className="image_DisplayCard" />
                        </div>
    
                        <div className="item_card_info">
                            <h3><Link to={`/items/${item.id}`}>{item.title}</Link></h3>
                            {categoryForItem[item.id]?.map(category => category.name)}
                        </div>
    
                        <h1><div className="item_card_price"> {item.price}</div></h1>
    
    
                    </div>
                ))} */}



    </>
}





