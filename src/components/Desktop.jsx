import { AiFillSetting } from "react-icons/ai";
import { BsBrowserChrome } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import DraggableWindow from "./DraggableWindow";
import Browser from "./Browser";
import DraggableIcon from "./DraggableIcon";
import { useState } from "react";


export default function Desktop({ setShowMenu }) {
  const [showBrowser, setShowBrowser] = useState(false);
  
  const desktopIcons = [
    { name: "Browser", icon: <BsBrowserChrome size={"4rem"} /> , action: setShowBrowser },
    { name: "Text Edit", icon: <FaEdit size={"4rem"} /> },
    { name: "Settings", icon: <AiFillSetting size={"4rem"} /> },
  ];

  function handleDesktopClick(event) {
    setShowMenu(false);
  }
  return (
    <div
      className="h-[96vh]"
      style={{
        backgroundImage: "url('/desktop-wallpaper.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onClick={handleDesktopClick}
    >
      <div className="p-10 grid grid-cols-1 gap-10 text-white ">
        {desktopIcons.map((icon) => (
          <DraggableIcon>
            <div
              key={icon.name}
              className="flex flex-col gap-2 items-center w-fit"
              onClick={()=>icon.action(!showBrowser)}
            >
              {icon.icon}
              {icon.name}
            </div>
          </DraggableIcon>
        ))}
      </div>
      {showBrowser && <DraggableWindow>
        <Browser />
      </DraggableWindow>}
    </div>
  );
}
