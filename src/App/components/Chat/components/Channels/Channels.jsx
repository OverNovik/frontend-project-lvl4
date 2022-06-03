import React from "react";
import { useSelector } from "react-redux";
import ChanelCreate from "./ChanelCreate/ChanelCreate.jsx";
import ChanelItem from "./ChanelItem/ChanelItem.jsx";

const Channels = () => {
  const channels = useSelector((state) => state.channels.channels);

  return (
    <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light">
      <ChanelCreate />
      <ul className="nav flex-column nav-pills nav-fill px-2">
        {
          channels ? channels.map((item) => (
            <ChanelItem key={item.id} name={item.name} />
          ))
            :
            null
        }
      </ul>
    </div>
  )
}

export default Channels;