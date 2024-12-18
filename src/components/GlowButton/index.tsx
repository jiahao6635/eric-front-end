const GlowButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 px-6 bg-[#40E7D1] rounded-[12px] text-black font-bold text-[14px]
                   shadow-[0_0_20px_rgba(64,231,209,0.6)] 
                   transition-all duration-300
                   hover:shadow-[0_0_25px_rgba(64,231,209,0.8)]
                    hover:brightness-110 ${className}`}
    >
      {children}
    </button>
  );
};

export default GlowButton;
