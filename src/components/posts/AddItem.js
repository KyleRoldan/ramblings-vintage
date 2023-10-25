import { useEffect, useState } from "react"
import { getAllCategories, getAllItems, submitNewItem, } from "../../services/FetchCalls"
import { Link } from "react-router-dom"




export const AddItem = ({ currentUser }) => {
  const [allItems, setAllItems] = useState([])
  const [inputTitle, setInputTitle] = useState("")
  const [inputDescription, setInputDescription] = useState("")
  const [itemData, setItemData] = useState({});
  
  const [inputPrice, setInputPrice] = useState("")
  const [allCategories, setAllCategories] = useState([])
  const [searchTerm, setSearchTerm] = useState({})


  useEffect(() => {
    getAllItems().then((itemsArray) => {
      setAllItems(itemsArray);

    })
  }, [])


  useEffect(() => {
    getAllCategories().then((categoriesArray) => {
      setAllCategories(categoriesArray)
    })
  }, [])








  /////////////////Input Features/////////////////////////////////


  const handleItemSave = () => {
    submitNewItem( inputTitle, inputDescription,  searchTerm, inputPrice).then((item) => {
      setItemData(item);
    });
  };

  useEffect(() => {
    setInputTitle("")
    setInputDescription("")

    setInputPrice("")
    setSearchTerm({})
  }, [itemData]);

  const handleTitleChange = (event) => {
    setInputTitle(event.target.value);
  };

  const handleInputDescriptionChange = (event) => {
    setInputDescription(event.target.value);
  };


  const handlePriceChange = (event) => {
    setInputPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    const selectedId = event.target.value
    setSearchTerm(selectedId);
  };









  return (<>

    <div>

      <h1>Title</h1>
      <input
        className="newTitle"
        placeholder="Create Title"
        type="text"
        value={inputTitle}
        onChange={handleTitleChange}
      />
      
      <h1>Description</h1>
      <input
        className="newPost"
        placeholder="New Post Here"
        type="text"
        value={inputDescription}
        onChange={handleInputDescriptionChange}
      />


      <h1>Price</h1>
      <input
        className="newPrice"
        placeholder="Add Price"
        type="text"
        value={inputPrice}
        onChange={handlePriceChange}
      />



      <select
        value={searchTerm}
        onChange={handleCategoryChange}>
        <option>Select an Category</option>

        {allCategories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <Link to={`/items`}><button onClick={() => {
        handleItemSave()

      }}>ADD</button></Link>

    </div>

  </>
  )
}
