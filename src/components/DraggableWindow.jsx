import React, { useState } from "react";
import Draggable from "react-draggable";

export default function DraggableWindow({ children }) {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <Draggable defaultPosition={{ x: 0, y: -450 }}>
          <div className="flex flex-col w-2/3 h-[96vh] items-center">
            <div className="bg-white flex justify-between w-full px-2 py-1">
              <h3> Window Name </h3>
              <button
                className="bg-red-500 px-2"
                onClick={() => setShow(false)}
              >
                &times;
              </button>
            </div>
            <div className="bg-white w-full h-full p-2">{children}</div>
          </div>
        </Draggable>
      )}
    </>
  );
}
