interface IProps {
  className?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const CustomTextarea = ({
  className,
  placeholder = "Write your comments...",
  value,
  onChange,
}: IProps) => {
  return (
    <div className={`relative `}>
      <textarea
        className={`w-[749px] h-[112px] rounded-[12px] border-[1px] border-soild border-[#323737]
       bg-[#1c2121] px-[16px] py-[12px] text-[#fff] placeholder:text-[#767a7a] placeholder:text-[14px] placeholder:font-thin resize-none ${className}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
      <div className="absolute bottom-[14px] left-[16px] text-[#767a7a] text-[14px]">
        {value.length}/300
      </div>
    </div>
  );
};

export default CustomTextarea;
