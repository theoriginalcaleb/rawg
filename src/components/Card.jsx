import Ul from "./Ul";
import { StateContextCustom } from "../context/StateContext";
import { Loader } from "@mantine/core";
/* eslint-disable react/prop-types */

const Card = (props) => {
  const { image_background, name, games_count, games, id } = props;
  const { dispatch, isLoading } = StateContextCustom();
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader color="blue" size="lg" type="dots" />
      </div>
    );
  }

  const btnHandler = (e) => {
    e.preventDefault();
    const btnId = document.getElementById(`follow-btn${id}`);
    const isToggled = btnId.getAttribute("data-toggled") === "true";
    btnId.setAttribute("data-toggled", isToggled ? "false" : "true");
    if (isToggled) {
      dispatch({ type: "REMOVE_FROM_FOLLOWING", payload: props });
      btnId.innerText = "follow";
      btnId.style.color = "white";
      btnId.style.backgroundColor = "rgba(255, 255, 255, 0.45)";
    } else {
      dispatch({ type: "ADD_TO_FOLLOWING", payload: props });
      btnId.innerText = "following";
      btnId.style.color = "black";
      btnId.style.backgroundColor = "white";
    }
  };

  return (
    <div className="w-[280px] rounded-lg shadow-xl">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32) 70%),url(${image_background})`,
        }}
        className=" bg-img rounded-lg "
      >
        <div className="flex flex-col justify-center items-center text-white backdrop-blur-[0.5px]">
          <h1 className="py-5 text-white transition-all hover:opacity-60 font-extrabold text-2xl cursor-pointer">
            {name}
            <hr className="opacity-30" />
          </h1>
          <button
            id={`follow-btn${id}`}
            value={id}
            onClick={btnHandler}
            className="  px-8  py-2  btn-transparent  text-white   rounded-lg"
          >
            follow
          </button>
        </div>
        <div className="flex justify-between px-5  py-2 ">
          <h2 className="text-white font-extrabold ">Popular items</h2>
          <p className="text-gray-400">{games_count}</p>
        </div>
        <div className="px-5">
          <hr className="opacity-30" />
        </div>
        <Ul games={games}></Ul>
      </div>
    </div>
  );
};

export default Card;

// "https://api.rawg.io/api/games?key=cf4eb2169cb54e1d8cba0a45943616e3&dates=2019-09-01,2019-09-30&platforms=18,1,7"
// "https://api.rawg.io/api/platforms?key=cf4eb2169cb54e1d8cba0a45943616e3"

// https://api.rawg.io/api/games?key=cf4eb2169cb54e1d8cba0a45943616e3
//https://rawg.io/games/grand-theft-auto-v

//  background-color: rgb(32, 32, 32);
//background-image: linear-gradient(rgba(32, 32, 32, 0.5), rgb(32, 32, 32) 70%),
