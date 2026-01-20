import { LucideIcon } from "lucide-react";
import { ChangeEvent } from "react";

interface TextInputFieldProps {
  name: string;
  label: string;
  icon?: LucideIcon;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  placeholder?: string;
  type?: "text" | "date";
  required?: boolean;
}

export const TextInputField = ({
  name,
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: TextInputFieldProps) => {
  return (
    <div>
      <label className="flex items-center space-x-2 mb-3 text-foreground">
        {Icon && <Icon className="w-5 h-5 text-[#E94FA3]" />}
        <span>{label}</span>
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-input-background border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#E94FA3] transition-all duration-200"
        required={required}
      />
    </div>
  );
};
