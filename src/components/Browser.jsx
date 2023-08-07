import React, { useState } from "react";

export default function Browser() {
  const [address, setAddress] = useState("https://react.dev/");
  function handleSubmit(e){
    e.preventDefault();
    setAddress(e.target.address.value);
  }
  return (
    <>
    <form className="flex gap-2 py-2" onSubmit={handleSubmit}>
        <input className="border-2 border-black rounded-lg w-full" defaultValue={address} name="address" />
        <button className="bg-slate-300 px-2 rounded-lg">Go</button>
    </form>
      <iframe src={address} className="w-full h-[87vh]"></iframe>
    </>
  );
}
