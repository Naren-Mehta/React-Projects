import "./style.css";

const Accordian = ({ value, selectedItem, onSelect, multiselect, multiple }) => {
  function onAccordianSelect(id) {
    if(multiselect) {
      const isSelected = multiple.includes(id);
      const updatedMultiple = isSelected
        ? multiple.filter((item) => item !== id)
        : [...multiple, id];

      onSelect(updatedMultiple);
    }else {
      onSelect(id === selectedItem ? null : id);
    }
  }

  const isMultiSelect = multiselect && multiple.includes(value.id);
  const showBody = isMultiSelect || selectedItem === value.id;


  function handleClick(e) {
    e.preventDefault();
    onAccordianSelect(value.id);
  }

  return (
    <div className="accordian">
      <div >
        <h3 className="accordian-header" onClick={handleClick}>
          {value.question}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="accordian-plus-icon">
            {showBody ? "-" : "+"}
          </a>
        </h3>
      </div>
      {
        showBody &&  <div className="accordian-body">{value.answer}</div>
      }
    </div>
  );
};

export default Accordian;
