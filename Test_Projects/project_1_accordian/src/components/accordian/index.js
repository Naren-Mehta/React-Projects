import { useState } from "react";
import Accordian from "./Accordian";
import { data } from "./data";

const Index = () => {
  const [multiselect, setMultiselect] = useState(false);
  const [selected, setSelected] = useState(null); // Initialize with null instead of undefined
  const [multiple, setMultiple] = useState([]);

  function updateSelection() {
    setMultiselect((prev) => !prev); // Use functional update for state toggling
  }

  function updateSelectedAccordian(id) {
    if (multiselect) {
      // Use a more efficient approach for updating multiple state
      setMultiple((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setSelected((prev) => (prev === id ? null : id)); // Use functional update
    }
  }

  return (
    <>
      <div className="container">
        <div className="accordian-list">
          <button onClick={updateSelection} className="button">
            {multiselect ? "Disable" : "Enable"} Muliselect Accordian
          </button>

          {data.map(dataItem => {
            return (
              <Accordian
                value={dataItem}
                key={dataItem.id}
                selectedItem={selected}
                multiple={multiple}
                multiselect={multiselect}
                onSelect={updateSelectedAccordian}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Index;
