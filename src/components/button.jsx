// button.jsx (CORRECTED)
const Button = ({ message, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      // Added base and dark mode styles
      className="p-2 border border-gray-300 text-gray-900 
                 hover:bg-amber-50 disabled:bg-gray-400"    >
      {message}
    </button>
  );
};
export default Button;
