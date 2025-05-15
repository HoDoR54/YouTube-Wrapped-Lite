interface ButtonProps {
  text: string;
  onClick: () => void;
  isPrimary: boolean;
  iconClass?: string;
  additionalStyling?: string;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  isPrimary,
  iconClass,
  additionalStyling,
  isDisabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      className={`${
        isPrimary
          ? "bg-gray-700 text-white"
          : "bg-gray-200 text-gray-600 border border-gray-700"
      } ${additionalStyling && additionalStyling} ${
        isDisabled
          ? "cursor-not-allowed opacity-50"
          : "hover:brightness-90 cursor-pointer"
      } rounded-xl px-3 py-2 min-w-[150px] text-center flex items-center justify-center`}
    >
      {iconClass && <i className={`${iconClass} font-bold pr-3 text-lg`} />}
      {text}
    </button>
  );
};

export default Button;
