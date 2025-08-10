import { cn } from "@/lib/utils";

const Input = ({ type, className, label, disabled, name, autoComplete, ...props }) => {
  return (
    <label htmlFor={name} className="flex flex-col">
      <p className="text-[14px]">{label}</p>
      <input
        name={name}
        type={type}
        className={cn("", className)}
        {...props}
        disabled={disabled}
        autoComplete={autoComplete}
      />
    </label>
  );
};

export default Input;
