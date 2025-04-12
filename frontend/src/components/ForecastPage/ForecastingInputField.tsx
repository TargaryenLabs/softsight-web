type ProjectInputFieldProps = {
    label: string;
    placeholder: string;
    type?: string;
    name: string;
  };
  
  const ForecastingInputField = ({ label, placeholder, type = 'text', name }: ProjectInputFieldProps) => (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm font-semibold text-gray-700">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
  
  export default ForecastingInputField;
  