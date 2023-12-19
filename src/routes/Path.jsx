import { Route, Routes } from "react-router-dom"
import DashBoard from "../pages/DashBoard"
import NavBar from "../components/NavBar"

const Path = () => {
  return (
    <div>
        <NavBar></NavBar>
        <Routes>
          
            <Route path="/" element={<DashBoard/>}/>
        </Routes>
    </div>
  )
}

export default Path