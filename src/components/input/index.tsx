import React, { InputHTMLAttributes } from "react";
interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search for tokens",
  className,
  icon,
  ...props
}) => {
  return (
    <div
      className={`relative w-full max-w-[500px]  border-[1px] border-[#2c3030] rounded-[12px] h-[40px] ${className}`}
    >
      <input
        type="text"
        className="w-full h-full  pl-10 pr-4 py-2 bg-[#141919] rounded-[12px]
        setFontRobotoMono 
                   text-white placeholder-gray-500 text-base
                   placeholder:text-[14px]
                   backdrop-blur-md focus:outline-none focus:ring-0
                   text-[14px]
                  "
        placeholder={placeholder}
        {...props}
      />
      {icon}
    </div>
  );
};

export default SearchInput;
