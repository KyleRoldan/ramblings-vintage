import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome"

export const UserView =() =>{

return (

<><Routes>
  <Route path="/"

element={
<>
<Outlet />
</>
}
>
<Route index element={<Welcome />} />


</Route>
</Routes>



</>




)




}