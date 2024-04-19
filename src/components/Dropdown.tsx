import React from "react";

type Props = {
  assetClassSetter: React.Dispatch<React.SetStateAction<any>>;
};

const Dropdown: React.FC<Props> = ({ assetClassSetter }) => {
  const handleChange = (e: any) => {
    assetClassSetter(e.target.value);
  };

  const options = [
    { label: "Private Equity", value: "pe" },
    { label: "Private Debt", value: "pd" },
    { label: "Real Estate", value: "re" },
    { label: "Infrastructure", value: "inf" },
    { label: "Natural Resources", value: "nr" },
    { label: "Hedge Fund", value: "hf" },
  ];

  return (
    <div>
      <form className="max-w-sm mx-auto">
        <label htmlFor="underline_select" className="sr-only">
          Select Asset Classes
        </label>
        <select
          id="underline_select"
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          onChange={handleChange}
        >
          {/* <option value="0"> Select Asset Classes</option> */}
          {options.map((option, idx) => (
            <option key={idx} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Dropdown;
