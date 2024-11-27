function Button({ className, children, href, onCLick, disabled }) {
  //
  return (
    <a
      href={href}
      className={`btn-gradient md:text-md rounded-[1rem] px-2 py-2 text-[1rem] text-black md:px-4 md:py-2 lg:px-6 lg:py-3 lg:text-lg ${className}`}
      onClick={onCLick}
      disabled={disabled}
    >
      {children}
    </a>
  );
}

export default Button;
