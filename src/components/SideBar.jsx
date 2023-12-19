import { BsWindows,BsPlaystation,BsXbox,BsNintendoSwitch, BsPhone,BsAndroid2, BsArrowUpSquare,} from "react-icons/bs";
import AddToFollowing from "./AddToFollowing";


const SideBar = () => {
  
  return (
    <div className='mt-12'>
    <nav className="bg-black text-white px-4">
      <div className='px-4'>
        <div className="px-3">
        <h1 className=' text-2xl mt-4 font-bold hover:opacity-60 transition-all cursor-pointer'>Home</h1>
       <h1 className=' text-2xl mt-4 font-bold hover:opacity-60 transition-all cursor-pointer'>Reviews</h1>
       <div>
       <h1 className=' mb-3 text-2xl mt-4 font-bold hover:opacity-60 transition-all'>Following</h1>
       <div className=" ">
       <AddToFollowing>
       </AddToFollowing>
      
       </div>
       
       </div>
       <div className='flex mt-4 justify-between items-center'>
        <h1 className='text-2xl font-bold hover:opacity-60 transition-all cursor-pointer'>Caleb</h1>
        <img className='pf-img' src="https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
       </div>
        </div>
        <div id="platforms" className="px-3">
        <h1 className=' text-2xl mt-4 font-bold hover:opacity-60 transition-all cursor-pointer'>Platforms</h1>
        <div className="pt-2">
        <div className="group  flex cursor-pointer hover: py-1 ">
            <button className="group-hover:bg-white group-hover:text-black bg-color  px-2 py-2 rounded transition-all"><BsWindows /></button>
            <h1 className=" text-white px-3 ">PC</h1>
        </div>
        <div className="group  flex cursor-pointer py-1 ">
            <button className="group-hover:bg-white group-hover:text-black bg-color px-2 py-2 rounded transition-all"><BsPlaystation /></button>
            <h1 className=" text-white px-3 ">PlayStation</h1>
        </div>
        <div className="group  flex cursor-pointer py-1 ">
            <button className="group-hover:bg-white group-hover:text-black bg-color px-2 py-2 rounded transition-all"><BsXbox /></button>
            <h1 className=" text-white px-3 ">Xbox One</h1>
        </div>
        <div className="group  flex cursor-pointer py-1 ">
            <button className="group-hover:bg-white group-hover:text-black bg-color px-2 py-2 rounded transition-all"><BsNintendoSwitch /></button>
            <h1 className=" text-white px-3 ">NintendoSwitch</h1>
        </div>
        <div className="group  flex cursor-pointer py-1 ">
            <button className="group-hover:bg-white group-hover:text-black bg-color px-2 py-2 rounded transition-all"><BsPhone /></button>
            <h1 className=" text-white px-3 ">iOS</h1>
        </div>
        <div className="group  flex cursor-pointer py-1 ">
            <button className="group-hover:bg-white group-hover:text-black bg-color px-2 py-2 rounded transition-all"><BsAndroid2 /></button>
            <h1 className=" text-white px-3 ">Android</h1>
        </div>
        <div className="group  flex cursor-pointer py-1 ">
            <button className="group-hover:bg-white group-hover:text-black bg-color px-2 py-2 rounded transition-all"><BsArrowUpSquare /></button>
            <h1 className=" text-white px-3 ">Hide</h1>
        </div>
        </div>
        </div>

      </div>

     
    </nav>
    </div>
  )
}

export default SideBar