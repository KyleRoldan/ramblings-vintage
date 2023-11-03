import { useEffect, useState } from "react"
import { getAllCategories, getAllItems, submitNewItem, } from "../../services/FetchCalls"
import { Link } from "react-router-dom"
import "./postCss/AddItem.css";
<<<<<<< HEAD
import gridpaper from "../../assets/gridpaper.png"
=======
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927




export const AddItem = ({ currentUser }) => {
  const [allItems, setAllItems] = useState([])
  const [inputTitle, setInputTitle] = useState("")
  const [inputDescription, setInputDescription] = useState("")
  const [itemData, setItemData] = useState({});
<<<<<<< HEAD

  const [inputPrice, setInputPrice] = useState("")
  const [allCategories, setAllCategories] = useState([])

=======
  
  const [inputPrice, setInputPrice] = useState("")
  const [allCategories, setAllCategories] = useState([])
  
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927
  const [searchTerm, setSearchTerm] = useState({})
  const [newInput, setNewInput] = useState(""); // New input field
  const [newInputs, setNewInputs] = useState([]); // Array to store new inputs


<<<<<<< HEAD

=======
 
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927


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
<<<<<<< HEAD
    submitNewItem(inputTitle, inputDescription, searchTerm, inputPrice, newInputs).then((item) => {
=======
    submitNewItem( inputTitle, inputDescription,  searchTerm, inputPrice, newInputs).then((item) => {
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927
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

  // Add a new input to the array
  const addNewInput = () => {
    setNewInputs([...newInputs, newInput]);
    setNewInput(""); // Clear the input field after adding
  };

  // Remove an input from the array
  const removeNewInput = (index) => {
    const updatedInputs = [...newInputs];
    updatedInputs.splice(index, 1);
    setNewInputs(updatedInputs);
  };


  return (<>

<<<<<<< HEAD

<div className="addItemPage">




    <div className="add_item_whole-container">


=======
    <div>
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927

      <h1>Title</h1>
      <input
        className="newTitle"
        placeholder="Create Title"
        type="text"
        value={inputTitle}
        onChange={handleTitleChange}
      />

      <h1>Description</h1>
<<<<<<< HEAD
      <textarea
        className="newPost"
        rows="4"
=======
      <input
        className="newPost"
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927
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
<<<<<<< HEAD
        value={inputPrice} 
        onChange={handlePriceChange}
      />

      <select
        className="addSelect"
=======
        value={inputPrice}
        onChange={handlePriceChange}
      />



      <select
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927
        value={searchTerm}
        onChange={handleCategoryChange}>
        <option>Select an Category</option>

        {allCategories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

<<<<<<< HEAD
      <h1>New Inputs</h1>

      <div className="newImage">
        <input
=======
      










      <h1>New Inputs</h1>
        <input 
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927
          className="newInput"
          placeholder="New Image"
          type="text"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
        />
        <button className="classic-button" onClick={addNewInput}>Add New Image</button>

<<<<<<< HEAD
        <div className="newImageWhole">
          {newInputs.map((input, index) => (
            <div key={index} className="form-Image">
              <img className="image" src={input} alt="input" />
              <div className="overlay">
                <button className="overlay-button" onClick={() => removeNewInput(index)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>



      </div>

=======
        {newInputs.map((input, index) => (
          <div key={index}>
            <img className="form-Image" alt="input" src={input}/>
            <button className="classic-button" onClick={() => removeNewInput(index)}>Remove</button>
          </div>
        ))}
      
      <h1>Add Item to Listings</h1>
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927
      <Link to={`/items`}><button className="classic-button" onClick={() => {
        handleItemSave()



      }}>ADD</button></Link>

<<<<<<< HEAD




=======
     
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927

    </div>



<<<<<<< HEAD
    {/* <div className="addImage-container_whole">
        {allItems.map((item) => (
          <div className="addImage-container" key={item.id}>
            <ul>
              <li>
              <Link to={`/items/${item.id}`}>{item.title}</Link>
              </li>
            </ul>
           
          </div>
        ))}
      </div> */}
    
  
=======
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927




<<<<<<< HEAD
</div>
=======


>>>>>>> 92724c619b302066aa0b0fe537d329344da44927
  </>
  )
}
