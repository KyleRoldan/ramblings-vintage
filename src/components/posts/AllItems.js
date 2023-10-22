import { useState, useEffect } from "react";
import { getAllItems, getAllFavorites, getAllCategories } from "../../services/FetchCalls";
import { Link } from "react-router-dom"
import ".//postCss/AllItems.css"
import testImg from "../../assets/testImg.jpg"


export const AllItems = ({ currentUser }) => {
    const [allItems, setAllItems] = useState([])
    const [allFavorites, setAllFavorites] = useState([])
    const [allCategories, setAllCategories] = useState([])
    const [categoryForItem, setCategoryForItem] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredItems, setFilteredItems] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("");


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
            // Check if the selectedCategory is empty or matches the item's category
            return (
                selectedCategory === "" || selectedCategory === item.categoryId
            );
        });
        setFilteredItems(foundItems);
    }, [selectedCategory, allItems]);





    /////////////////////////////////////////////////////////////////




    return <>


        <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
        >
            <option value="">Select</option>
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

        <div className="item_body">

            {filteredItems.map((item) => (
                <div className="item_card" key={item.id}>
                    <div className="image_box">
                        <img src={testImg} alt="item detail" className="image_Display" />
                    </div>
                    <Link to={`/items/${item.id}`}>{item.title}</Link>
                    - Category: {categoryForItem[item.id]?.map(category => category.name)}
                </div>
            ))}


        </div>
    </>
}


