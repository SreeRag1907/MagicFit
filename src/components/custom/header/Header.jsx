import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shirt, ShoppingCart, Menu } from "lucide-react";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function Header() {
  const { user, isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 px-5 bg-white shadow-md shadow-pink-500/30 z-10">
        <Link to={"/"}>
          <img
            src="/logo.png"
            className="w-[200px] h-200px]"
            alt="Logo"
          />
        </Link>

        <div className="hidden md:flex gap-10">
          <div className="flex gap-5">
            <Link to="/cart">
              <Button
                className="flex gap-2 hover:bg-gray-200 transition-all hover:text-black"
                variant="outline"
              >
                <ShoppingCart />
                Cart
              </Button>
            </Link>

            <Link to="/magicFit">
              <Button className="flex gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-4 py-2 rounded-md transform transition-transform hover:scale-105 hover:opacity-90">
                <Shirt />
                MagicFit
              </Button>
            </Link>
          </div>

          {isSignedIn ? (
            <div className="flex items-center gap-2">
              <UserButton />
              <span className="text-gray-800 font-semibold">
                {user?.firstName || user?.username}
              </span>
            </div>
          ) : (
            <Link to={"/auth/sign-in"}>
              <Button >
                Get Started
              </Button>
            </Link>
          )}
        </div>

        <button
          className="md:hidden p-2 hover:bg-gray-200 rounded"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <Menu />
        </button>
      </div>

      {/* Hamburger Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 right-5 bg-white shadow-md rounded-lg p-4 transition-transform duration-300 ease-in-out transform md:hidden">
          <div className="flex flex-row gap-5">
            <Link to="/cart">
              <Button
                className="flex gap-2 hover:bg-gray-200 transition-all hover:text-black"
                variant="outline"
              >
                <ShoppingCart />
                Cart
              </Button>
            </Link>

            <Link to="/magicFit">
              <Button className="flex gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-4 py-2 rounded-md transform transition-transform hover:scale-105 hover:opacity-90">
                <Shirt />
                MagicFit
              </Button>
            </Link>
          </div>

            {isSignedIn ? (
              <div className="flex justify-center items-center text-center gap-2 py-4">
                <UserButton />
                <span className="text-gray-800 font-semibold">
                  {user?.firstName || user?.username}
                </span>
              </div>
            ) : (
              <Link to={"/auth/sign-in"}>
                <Button className="bg-blue-600 text-white hover:bg-blue-700 transition duration-200">
                  Get Started
                </Button>
              </Link>
            )}
        </div>
      )}
    </>
  );
}

export default Header;
