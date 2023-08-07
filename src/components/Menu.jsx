import React from 'react'
import {AiFillAppstore, AiFillSetting} from "react-icons/ai";
import {BiLogOut} from "react-icons/bi"
const MenuItems = [
    {name: 'Applications', icon: <AiFillAppstore />},
    {name: 'Settings', icon: <AiFillSetting />},
    {name: 'Logout', icon: <BiLogOut />},
]
export default function Menu() {
  
  return (
    <div className='absolute bottom-[2.45rem] bg-white w-fit'>
        <ul className='p-3 w-fit'>
            {MenuItems.map(MenuItem => (
                <li className='hover:bg-slate-300 rounded-lg flex gap-2 items-center p-3' key={MenuItem.name}>{MenuItem.icon} {MenuItem.name}</li>
            ))}
        </ul>
    </div>
  )
}
