import  React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
export default function NavBar(){




return(

<BrowserRouter>
<Route path="/" element={<home/>}/>
<Route path="search" element={<Search/>}/>
<Route path="contact" element={<>}/>
<Route path="/" element={<home/>}/>
</BrowserRouter>


)






}