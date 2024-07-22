import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shirt, ShoppingCart, Menu } from "lucide-react";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartTotalQuantity } from "@/redux/Slices/CartSlice";

function Header() {
  const { user, isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalQuantity = useSelector(selectCartTotalQuantity);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-gray-50000 text-black text-xl shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4 md:p-6 lg:p-8">
          {/* Logo and Brand Name */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-40 h-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className="hover:text-gray-400 transition-colors">Home</Link>
            <Link to="/products" className="hover:text-gray-400 transition-colors">Products</Link>
            <Link to="/magicFit">
              <Button className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white flex items-center gap-2 rounded-md py-2 px-4 hover:opacity-90">
                <Shirt size={20} />
                MagicFit
              </Button>
            </Link>
            <Link to="/cart">
              <Button className="flex items-center gap-2 relative text-gray-300 hover:text-gray-100 transition-colors">
                <ShoppingCart size={20} />
                Cart
                {totalQuantity > 0 && (
                  <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </Button>
            </Link>

          </nav>
          {/* User and Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {isSignedIn ? (
              <div className="hidden md:flex items-center gap-2">
                <UserButton />
                <span>{user?.firstName || user?.username}</span>
              </div>
            ) : (
              <Link to="/auth/sign-in">
                <Button className="hidden md:block bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
              </Link>
            )}

            <button className="md:hidden p-2 rounded hover:bg-gray-700" onClick={toggleMenu}>
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 bg-gray-800 text-white shadow-lg w-full md:hidden">
            <nav className="flex flex-col p-4">
              <Link to="/" className="py-2 border-b border-gray-700 hover:bg-gray-700">Home</Link>
              <Link to="/products" className="py-2 border-b border-gray-700 hover:bg-gray-700">Products</Link>
              <Link to="/magicFit" className="py-2 border-b border-gray-700 hover:bg-gray-700 flex items-center gap-2">
                <Shirt size={20} />
                MagicFit
              </Link>
              <Link to="/cart" className="py-2 border-b border-gray-700 hover:bg-gray-700 flex items-center gap-2">
                <ShoppingCart size={20} />
                Cart
                {totalQuantity > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {totalQuantity}
                  </span>
                )}
              </Link>
              {isSignedIn ? (
                <div className="py-2 flex items-center gap-2">
                  <UserButton />
                  <span>{user?.firstName || user?.username}</span>
                </div>
              ) : (
                <Link to="/auth/sign-in">
                  <Button className="bg-blue-600 text-white w-full py-2 mt-4 hover:bg-blue-700">Get Started</Button>
                </Link>
              )}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
