const InputField = ({ label, type, name, value, onChange }) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={name} className="text-sm font-medium text-[#6C25FF]">
          {label}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C25FF]"
        />
      </div>
    );
  };
  
  export default InputField;
  