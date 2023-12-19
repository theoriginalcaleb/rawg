import { IoPersonOutline } from "react-icons/io5";
const Ul = (games) => {
   const one = games.games[0]
   const two = games.games[1]
   const three = games.games[3]
  return (
    <ul className="px-5 py-3">
        <li className="flex justify-between">
            <a href="" className="text-white text-sm hover:opacity-60 line-clamp-3 transition-all">{one.name}<hr className='opacity-30'/></a>
            <span className="text-white items-baseline  text-sm flex ">
                <p className="text-gray-400  pr-1 ">{one.added}</p>
                <IoPersonOutline className="text-gray-400" style={{fontSize:"12px"}}/>
            </span>
        </li>
        <li className="flex justify-between">
            <a href="" className="text-white hover:opacity-60 text-sm transition-all">{two.name}<hr className='opacity-30'/></a>
            <span className="text-white items-baseline text-sm flex ">
               <p className="text-gray-400  pr-1"> {two.added}</p>
                <IoPersonOutline className="text-gray-400" style={{fontSize:"12px"}} />
            </span>
        </li>
        <li className="flex justify-between">
            <a href="" className="text-white hover:opacity-60 text-sm transition-all">{three.name}<hr className='opacity-30'/></a>
            <span className="text-white items-baseline text-sm flex ">
               <p className="text-gray-400  pr-1"> {three.added}</p>
                <IoPersonOutline className="text-gray-400" style={{fontSize:"12px"}} />
            </span>
        </li>
    </ul>
  )
}

export default Ul