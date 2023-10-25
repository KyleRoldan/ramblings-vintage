import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome"
import { UserNavBar } from "../components/nav/UserNavBar"
import { AllItems } from "../components/posts/AllItems"
import { ItemDetails } from "../components/posts/Itemdetails"
import { Favorites } from "../components/posts/Favorites"
import { AllLists } from "../components/posts/AllLists"

export const UserView =({currentUser}) =>{

return (

<><Routes>
  <Route path="/"

element={
<>
<UserNavBar currentUser={currentUser}/>
<Outlet />
</>
}
>
<Route index element={<Welcome />} />
<Route path ="items" index element={<AllItems currentUser={currentUser} />} />
<Route path="/items/:itemId" element={<ItemDetails currentUser={currentUser} />} />
<Route path="favorites" element={<Favorites currentUser={currentUser} />} />
<Route path ="lists" index element={<AllLists currentUser={currentUser}/>} />




</Route>
  </Routes>
  
  
  </>




)
}