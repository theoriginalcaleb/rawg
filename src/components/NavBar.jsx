
import { IoNotificationsSharp } from "react-icons/io5";
import { TiPlus } from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import { StateContextCustom } from "../context/StateContext";


const NavBar = () => {
  const {search,setSearch} = StateContextCustom()

  return (
    <div className="flex justify-between items-center px-10 py-6">
        <h1 className="text-xl text-white font-bold">R A W G</h1>
        <input value={search} onChange={e=>setSearch(e.target.value)} className=" rounded-3xl min-w-[40rem] py-2 px-3 placeholder-gray-300 border border-gray-400  hover:bg-white transition-all" type="text" placeholder="Search 863,286 games..." />
        
        <div className="flex justify-between items-center ">
        <div className="px-2"><img className='pf-img ' src="https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></div>
        <div className="px-2"><p className="text-white text-xl cursor-pointer ">My library</p></div>
        <div className="px-2"><IoNotificationsSharp  className=" text-white text-xl"/></div>
        <div className="px-2"><TiPlus  className="text-white  text-xl"/></div>
        <a href=""  className="text-white px-2 font-bold">API</a>
        <div className="px-2"><BsThreeDots  className="text-white text-xl"/></div> 
        </div>
        
    </div>
  )
}

export default NavBar