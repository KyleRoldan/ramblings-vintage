import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById} from "../../services/FetchCalls";
import { CreateItemDetails } from "./createItemDetails";







export const ItemDetails = ({ currentUser }) => {
  const {itemId} = useParams();
  
  

 
  
  const [item, setItem] = useState({});
 

  useEffect(() => {
    getItemById(itemId).then((itemData) => {
      setItem(itemData);
    });
  }, [itemId]);

  
  


  return <CreateItemDetails item={item} currentUser={currentUser}/>;
};


