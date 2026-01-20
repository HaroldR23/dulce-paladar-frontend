import { LucideIcon } from "lucide-react";
import { ChangeEvent } from "react";

interface SelectFieldProps {
  name: string;
  label: string;
  icon?: LucideIcon;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}

export const SelectField = ({
  name,
  label,
  icon: Icon,
  value,
  onChange,
  options,
  required = false,
}: SelectFieldProps) => {
  return (
    <div>
      <label className="flex items-center space-x-2 mb-3 text-foreground">
        {Icon && <Icon className="w-5 h-5 text-[#E94FA3]" />}
        <span>{label}</span>
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-input-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E94FA3] transition-all duration-200"
        required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
