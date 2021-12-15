import React from "react";
import "./search.css";
import ShowInfo from "./ShowInfo.jsx";
import Map from "./Map";
import SelectTime from "./SelectTime.jsx";
import GymSearch from "components/search/GymSearch"

let facility = {
  name: "",
  address: "",
  call: "",
  courtNum: 0,
  perHour: 0,
  img: [
    "https://picsum.photos/60/54",
    "https://picsum.photos/60/54",
    "https://picsum.photos/60/54",
  ],
};

function SearchBox(props) {
  const isShow = props.isShow;
  let showInfo = <ShowInfo facility={facility} />;

  if (isShow) {
    showInfo = <ShowInfo facility={facility} isShow={true} />;
  } else {
    showInfo = <ShowInfo facility={facility} isShow={false} />;
  }

  return (
    <section className="search_contents">
      <GymSearch />
      <div className="map">
        <Map />
      </div>
      {/* <ShowInfo isShow={isShow} /> */}
      {showInfo}
      <SelectTime />
    </section>
  );
}

export default SearchBox;
