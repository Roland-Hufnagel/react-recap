import { useState } from "react";
import "./Theme.css";
import Preview from "./Preview";
import DetailsView from "./DetailsView";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

export default function Theme({ theme, handleDeleteTheme }) {
  const [detailsView, setDetailsView] = useState(false);

  function toggleDetailsView() {
    setDetailsView(!detailsView);
  }
  return (
    <section className="theme">
      <div className="theme--info">
        <h2>{theme.name}</h2>
        <button className="showMore" type="button" onClick={toggleDetailsView}>
          {detailsView ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </div>
      {detailsView ? (
        <DetailsView theme={theme} handleDeleteTheme={handleDeleteTheme} />
      ) : (
        <Preview theme={theme} />
      )}
    </section>
  );
}
