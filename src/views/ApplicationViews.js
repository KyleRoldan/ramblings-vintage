import { Outlet, Route, Routes } from "react-router-dom"
import {NavBar} from "../components/nav/NavBar"
import { Welcome } from "../components/welcome/Welcome"
import { useEffect, useState } from "react"
import { AddItem } from "../components/posts/AddItem"
import { AllItems } from "../components/posts/AllItems"
import { AllLists } from "../components/posts/AllLists"
import { EditItem } from "../components/posts/EditItem"
import { EditList } from "../components/posts/EditList"
import { Favorites } from "../components/posts/Favorites"
import { Itemdetails } from "../components/posts/Itemdetails"
import { ListDetails } from "../components/posts/ListDetails"





export const ApplicationViews = () => {
    
    const [currentUser, setCurrentUser] = useState({})

useEffect(() => {
  const localLearningUser = localStorage.getItem("ramblings_user")
  const learningUserObject = JSON.parse(localLearningUser)
  setCurrentUser(learningUserObject)
}, [])
    return (<>

    <Routes>
  <Route path="/"

element={
<>
<NavBar currentUser={currentUser}/>
<Outlet />
</>
}
>
<Route index element={<Welcome />} />
<Route path ="items" index element={<AllItems currentUser={currentUser} />} />
<Route path="items/:itemId" element={<Itemdetails currentUser={currentUser} />} />
<Route path="favorites" element={<Favorites currentUser={currentUser} />} />
<Route path ="lists" index element={<AllLists currentUser={currentUser}/>} />




</Route>
  </Routes>



    

    
  </>
    )
}
