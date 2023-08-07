import { useState } from 'react';
import Desktop from './components/Desktop'
import Taskbar from './components/Taskbar'
export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <Desktop setShowMenu={setShowMenu} />
      <Taskbar showMenu={showMenu} setShowMenu={setShowMenu}/>
    </div>
  )
}
