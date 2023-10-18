function HamburgerButton() {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center ml-1 text-gray-500 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200"
    >
      <span className="sr-only">Menu</span>
      <svg
        className="w-4 h-4"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
  );
}

export default HamburgerButton;
