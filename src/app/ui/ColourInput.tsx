interface ColourInputProps {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
}

export default function ColourInput({
  label,
  id,
  value,
  onChange,
}: ColourInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex flex-row gap-x-5">
        <input
          className="h-12.5 border border-black aspect-square rounded-md focus:outline-none"
          id={id}
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <input
          className="p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          pattern="^#[0-9A-Fa-f]{6}$"
          maxLength={7}
          placeholder="#000000"
        />
      </div>
    </div>
  );
}
