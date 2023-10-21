export const getAllUsers = () => {

    return fetch("http://localhost:8088/user").then(
        (res)=> res.json()
    )
    
    }
    