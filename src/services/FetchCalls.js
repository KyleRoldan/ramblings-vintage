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
            
    