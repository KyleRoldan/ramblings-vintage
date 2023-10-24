import { useState, useEffect } from "react";
import { getAllItems, getAllFavorites, getAllCategories } from "../../services/FetchCalls";
import { Link } from "react-router-dom"
import ".//postCss/AllItems.css"
import testImg from "../../assets/testImg.jpg"


export const AllItems = ({ currentUser }) => {
    const [allItems, setAllItems] = useState([])
    const [allFavorites, setAllFavorites] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const [categoryForItem, setCategoryForItem] = useState({})
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredItems, setFilteredItems] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(0);


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


    ///////////////////////Categories/////////////////////////////////////

    useEffect(() => {
        const itemCategory = {}

        allItems.forEach((item) => {
            const categoriesForItems = allCategories.filter(
                (category) => category.id === item.categoryId
            );
            itemCategory[item.id] = categoriesForItems
        });

        setCategoryForItem(itemCategory)
    }, [allItems, allCategories])


    /////////////////////////////////////////////////////////////////

    /////////////////Search Features/////////////////////////////////


    useEffect(() => {
        const foundItems = allItems.filter((item) => {
            // Check if no category is chosen or "Select" is chosen
            if (isNaN(selectedCategory) || selectedCategory === "All" || selectedCategory === 0) {
                // Show all items
                return item.title.toLowerCase().includes(searchTerm.toLowerCase());
            }

            // Check if the selectedCategory matches the item's category
            if (selectedCategory === item.categoryId) {
                // Check if the item's title includes the search term (case-insensitive)
                return item.title.toLowerCase().includes(searchTerm.toLowerCase());
            }

            return false; // Filter out items that don't match the criteria.
        });

        // Set the filtered items after filtering is complete.
        setFilteredItems(foundItems);
    }, [selectedCategory, searchTerm, allItems]);



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






        <div className="image-container_whole">
            {filteredItems.map((item) => (

                <div className="image-container" key={item.id}>
                    <img src={item.images[0]}alt="jacket" />
                    <div className="overlay">
                        <Link className="link_styling" to={`/items/${item.id}`}>{item.title}</Link>
                        <div>{item.price}</div>
                    </div>



                    <h1><div className="item_card_price"> {item.price}</div></h1>


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


