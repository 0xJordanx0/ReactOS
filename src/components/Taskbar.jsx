import { useState } from "react"
import Menu from "./Menu";
export default function Taskbar({showMenu, setShowMenu}) {
  
  return (
    <div className="h-[4vh] bg-blue-950">
        {showMenu && <Menu />}
        <div className="flex h-full">
            <button className="bg-sky-400 text-white px-5 hover:bg-sky-600" onClick={() => setShowMenu(!showMenu)}>Start</button>
        </div>
    </div>
  )
}
