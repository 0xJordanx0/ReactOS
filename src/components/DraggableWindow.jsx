import React, { useState } from "react";
import {FaRegWindowMaximize} from "react-icons/fa"
import {BiWindowClose} from "react-icons/bi"
import Draggable from "react-draggable";

export default function DraggableWindow({ children, windowName }) {
  const [show, setShow] = useState(true);
  const [maximize, setMaximize] = useState("w-2/3");

  return (
    <>
      {show && (
        <Draggable defaultPosition={{ x: 0, y: -450 }}>
          <div className={`flex flex-col ${maximize} h-[96vh] items-center`}>
            <div className="bg-white flex justify-between w-full px-2 py-1">
              <h3> {windowName} </h3>
              <div className="flex gap-2">
              <button
                onClick={() => maximize !== "w-2/3" ? setMaximize("w-2/3") : setMaximize("w-full")}
              >
                <FaRegWindowMaximize />
              </button>
              <button
                onClick={() => setShow(false)}
              >
                <BiWindowClose size="1.2rem"/>
              </button>
              </div>
            </div>
            <div className="bg-white w-full h-full p-2">{children}</div>
          </div>
        </Draggable>
      )}
    </>
  );
}
