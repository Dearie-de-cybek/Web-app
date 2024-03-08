import Filter from "../components/Filter";
import Select from "../components/Select";

function FilterSearchDynamicComp({ filterField, options }) {
  return (
    <>
      <div className="hidden sm:block">
        <Filter filterField={filterField} options={options} />
      </div>
      <div className="block sm:hidden">
        <Select filterField={filterField} options={options} />
      </div>
    </>
  );
}

export default FilterSearchDynamicComp;
