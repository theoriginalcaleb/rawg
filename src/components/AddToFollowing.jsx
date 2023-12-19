import { IoChevronDownSharp } from "react-icons/io5";

import { StateContextCustom } from "../context/StateContext";

const AddToFollowing = () => {
  const {
    state: { following },
  } = StateContextCustom();
  const button = document.getElementById("toggleButton");

  const toggleButton = () => {
    button.classList.toggle("toggled");
    if (button.classList.contains("toggled")) {
      button.firstChild.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" > <path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M112 328l144-144 144 144" ></path></svg>`;
      button.lastChild.innerHTML = "Hide";
      button.classList;
    } else {
      button.firstChild.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" id="down-icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48" d="M112 184l144 144 144-144"></path></svg>`;
      button.lastChild.innerHTML = "Show all";
    }
  };

  if (following.length >= 3) {
    const newArr = following.slice(0, 3);
    return (
      <>
        <ul id="items-container" className="">
          {newArr?.map((item) => {
            return (
              <li key={item.id} className="flex my-2 items-center">
                <img
                  className=" w-[31px] h-[31px] rounded-md"
                  src={item.image_background}
                  alt=""
                />
                <h1 key={item.id} className="ms-2 font-bold">
                  {item.name}
                </h1>
              </li>
            );
          })}
          <div
            id="toggleButton"
            onClick={toggleButton}
            className="toggleButton my-2 flex items-center "
          >
            <button
              id="down"
              className="group-hover:bg-white group-hover:text-black  px-2 py-2 rounded-md cursor-pointer btn-transparent opacity-30"
            >
              <IoChevronDownSharp id="down-icon" />
            </button>
            <h1 id="show-hide-btn" className="ms-2 text-white cursor-pointer ">
              Show all
            </h1>
          </div>
        </ul>
      </>
    );
  }
};

export default AddToFollowing;
