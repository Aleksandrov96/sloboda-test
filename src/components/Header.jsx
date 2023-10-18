import HamburgerButton from "./buttons/HamburgerButton";
import LangButton from "./buttons/LangButton";

function Header() {
  return (
    <nav className="border-2 border-b-gray-200 bg-white">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto py-4 px-16">
        <a href="#" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
        </a>
        <div className="flex flex-row justify-between items-center w-28">
          <LangButton />
          <div className="flex flex-row items-center border border-gray-300 rounded-full w-16 px-1 py-1 justify-around hover:bg-gray-100">
            <HamburgerButton />
            <img
              className="w-7 h-7 rounded-full hover:scale-110 transition ease-in-out duration-300"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Rounded avatar"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
