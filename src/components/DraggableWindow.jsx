import React, { useState } from "react";
import Draggable from "react-draggable";

export default function DraggableWindow({ children }) {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <Draggable>
          <div className="flex flex-col w-fit items-center">
            <div className="bg-white flex justify-between w-96 px-2 py-1">
              <h3> Window Name </h3>
              <button className="bg-red-500 px-2" onClick={() => setShow(false)}>&times;</button>
            </div>
            <div className="bg-white w-full p-2">{children}</div>
          </div>
        </Draggable>
      )}
    </>
  );
}
