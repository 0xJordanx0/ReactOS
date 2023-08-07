import { useEffect } from "react";
import {BsBrowserChrome} from "react-icons/bs"

const desktopIcons = [
  { name: "Browser" , icon: <BsBrowserChrome size={"4rem"} />},
  { name: "Browser", icon: <BsBrowserChrome size={"4rem"} /> },
  { name: "Browser", icon: <BsBrowserChrome size={"4rem"} /> },
];
export default function Desktop({ setShowMenu }) {
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
          <div key={icon.name} className="flex flex-col gap-2 items-center w-fit">
            {icon.icon}
            {icon.name}
        </div>
        ))}
      </div>
    </div>
  );
}
