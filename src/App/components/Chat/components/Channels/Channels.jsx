import React from "react";
import ChanelCreate from "./ChanelCreate/ChanelCreate.jsx";
import ChanelItem from "./ChanelItem/ChanelItem.jsx";

const Channels = () => {
  return (
    <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
      <ChanelCreate />
      <ul className="nav flex-column nav-pills nav-fill px-2">
        <ChanelItem name='general' />
        <ChanelItem name='random' />
      </ul>
    </div>
  )
}

export default Channels;