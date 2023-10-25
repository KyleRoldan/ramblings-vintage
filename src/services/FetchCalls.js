export const getAllUsers = () => {

    return fetch("http://localhost:8088/user").then(
        (res)=> res.json()
    )
    
    }

    export const getAllItems = () => {

        return fetch("http://localhost:8088/item").then(
            (res)=> res.json()
        )
        
        }

        export const getAllFavorites = () => {

            return fetch("http://localhost:8088/favorite").then(
                (res)=> res.json()
            )
            
            }
        
            export const getAllCategories = () => {
        
                return fetch("http://localhost:8088/category").then(
        
        
                    (res)=> res.json()
                )
        
            }

                export const favoriteItem = (itemId, userId) => {
                // Make an API call to create the like relationship in the database
                    return fetch("http://localhost:8088/favorite", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        itemId: itemId,
                        userId: userId,
                    }),
                    });
                };


                export const getItemById = (itemId) => {
                    return fetch(`http://localhost:8088/item/${itemId}`).then((res) =>
                      res.json()
                    );

                    };



                  export const submitNewItem = (inputTitle,inputDescription,option,inputPrice,measurements, ) => {
                      // Data to be sent in the request
                      const requestData = {
                        title: inputTitle,
                        description: inputDescription,
                        categoryId: parseInt(option),
                        price:parseInt(inputPrice),
                         images: "50",  // Assuming 'images' is an array of image URLs
                        measurements: measurements,
                        
                        
                      };
                    
                      return fetch("http://localhost:8088/item", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(requestData)
                      });
                    };
    