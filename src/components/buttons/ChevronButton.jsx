function ChevronButton() {
  return (
    <button type="button">
      <span className="sr-only">Chevron button</span>
      <svg
        className="w-2 h-2 ml-1.5 text-gray-800"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5 5 1 1 5"
        />
      </svg>
    </button>
  );
}

export default ChevronButton;
