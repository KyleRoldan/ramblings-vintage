import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getAllCategories } from "../../services/FetchCalls"


export const EditItem = () => {
    const [searchTerm, setSearchTerm] = useState({})
    const [allCategories, setAllCategories] = useState([])
    const [newInput, setNewInput] = useState(""); // New input field
    const [newInputs, setNewInputs] = useState([]); // Array to store new inputs
    const [ticket, assignTicket] = useState({
        title: "",
        description: "",
        categoryId: "",
        price:"",
        images: [],  // Assuming 'images' is an array of image URLs            
                        
    })
    const { itemId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getAllCategories().then((categoriesArray) => {
          setAllCategories(categoriesArray)
        })
      }, [])

      useEffect(() => {
        
        setSearchTerm({})
      }, []);



    useEffect(() => {
        fetch(`http://localhost:8088/item/${itemId}`)
            .then(response => response.json())
            .then((data) => {
                assignTicket(data)
            })
    }, [itemId])


    const handleCategoryChange = (event) => {
        const selectedId = event.target.value
        setSearchTerm(selectedId);
      };

    

        // Add a new input to the array
  const addEditInput = () => {
    setNewInputs([...newInputs, newInput]);
    setNewInput(""); // Clear the input field after adding
  };

  // Remove an input from the array
  const removeEditInput = (index) => {
    const updatedInputs = [...newInputs];
    updatedInputs.splice(index, 1);
    setNewInputs(updatedInputs);
  };

const handleSaveButtonClick = (event) => {
        event.preventDefault()
        return fetch(`http://localhost:8088/item/${itemId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticket)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/items/:itemId")
            })
    }


    return <div className="ticketForm">
        <h2 className="ticketForm__title">Edit Item</h2>
        <div>
            
            
            <div className="form-group">
                <div>Title:</div>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: ""
                    }}
                    className="form-control"
                    value={ticket.title}
                    onChange={
                        (evt) => {
                            const copy = { ...ticket }
                            copy.title = evt.target.value
                            assignTicket(copy)
                        }
                    }>{ticket.title}</textarea>
            </div>

            <div className="form-group">
                <div>Description:</div>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: ""
                    }}
                    className="form-control"
                    value={ticket.description}
                    onChange={
                        (evt) => {
                            const copy = { ...ticket }
                            copy.description = evt.target.value
                            assignTicket(copy)
                        }
                    }>{ticket.description}</textarea>
            </div>

            <div className="form-group">
                <div>Category:</div>
                  
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


      <div className="form-group">
                <div>Price:</div>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: ""
                    }}
                    className="form-control"
                    value={ticket.price}
                    onChange={
                        (evt) => {
                            const copy = { ...ticket }
                            copy.price = evt.target.value
                            assignTicket(copy)
                        }
                    }>{ticket.price}</textarea>
            </div>


            <h1>New Inputs</h1>
        <input 
          className="newInput"
          placeholder="New Image"
          type="text"
          value={newInput}
          onChange={(e) => setNewInput(e.target.value)}
        />
        <button class="classic-button" onClick={addEditInput}>Add New Image</button>

        {newInputs.map((input, index) => (
          <div key={index}>
            <img className="form-Image" alt="input" src={input}/>
            <button class="classic-button" onClick={() => removeEditInput(index)}>Remove</button>
          </div>
        ))}

























            </div>







          



































        </div>

        






        
        <Link to={`/items`}><button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
            Save Edits
        </button></Link>
    </div>
}