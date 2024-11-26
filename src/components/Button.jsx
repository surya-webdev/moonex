function Button({ className, children, onCLick, disabled }) {
  //
  return (
    <button
      className={`btn-gradient md:text-md rounded-[1rem] px-2 py-2 text-black sm:text-sm md:px-4 md:py-2 lg:px-6 lg:py-3 lg:text-lg ${className}`}
      onClick={onCLick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
