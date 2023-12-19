import Cards from "../components/Cards"
import Reviews from "../components/Reviews"

import SideBar from "../components/SideBar"





const DashBoard = () => {

  return (
    <div className="flex ">
   
     <SideBar></SideBar>
     <Cards></Cards>
    <Reviews></Reviews>
    
    </div>
  )
}

export default DashBoard