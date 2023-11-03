import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome"
import { UserNavBar } from "../components/nav/UserNavBar"
import { AllItems } from "../components/posts/AllItems"
import { ItemDetails } from "../components/posts/Itemdetails"
import { Favorites } from "../components/posts/Favorites"
<<<<<<< HEAD
import { About } from "../components/posts/About"
=======
import { AllLists } from "../components/posts/AllLists"
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927

export const UserView =({currentUser}) =>{

return (

<><Routes>
<<<<<<< HEAD
  <Route index element={<Welcome currentUser={currentUser}/>} />
  <Route path="/" 
=======
  <Route path="/"
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927

element={
<>
<UserNavBar currentUser={currentUser}/>
<Outlet />
</>
}
>
<<<<<<< HEAD
{/* <Route index element={<Welcome />} /> */}
<Route path ="items" index element={<AllItems currentUser={currentUser} />} />
<Route path="/items/:itemId" element={<ItemDetails currentUser={currentUser} />} />
<Route path="favorites" element={<Favorites currentUser={currentUser} />} />
<Route path ="about" index element={<About currentUser={currentUser}/>} />
=======
<Route index element={<Welcome />} />
<Route path ="items" index element={<AllItems currentUser={currentUser} />} />
<Route path="/items/:itemId" element={<ItemDetails currentUser={currentUser} />} />
<Route path="favorites" element={<Favorites currentUser={currentUser} />} />
<Route path ="lists" index element={<AllLists currentUser={currentUser}/>} />
>>>>>>> 92724c619b302066aa0b0fe537d329344da44927




</Route>
  </Routes>
  
  
  </>




)
}