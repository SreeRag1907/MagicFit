import { useState, useEffect } from "react";
import Header from "@/components/custom/header/Header";
import { Button } from "@/components/ui/button";
import { Shirt, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import products from "../../data";
import toast, { Toaster } from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function Home() {
  const [userFitData, setUserFitData] = useState(null);
  const [collections, setCollections] = useState([]);
  const [matchedProduct, setMatchedProduct] = useState(null);
  const [fitChecks, setFitChecks] = useState({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const images = [
    "img/img1.png",
    "img/img2.png",
    "img/img3.png",
    "img/img4.png",
  ];

  useEffect(() => {
    const savedFitData = localStorage.getItem("userFitData");
    if (savedFitData) {
      setUserFitData(JSON.parse(savedFitData));
    }

    const savedCollections = localStorage.getItem("myCollections");
    if (savedCollections) {
      setCollections(JSON.parse(savedCollections));
    }

    const intervalId = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsExiting(false);
      }, 1000); // Time for the image to exit
    }, 2000); // Time for each image to be visible

    return () => clearInterval(intervalId);
  }, [images.length]);

  const addToCollections = (product) => {
    const isAlreadyInCollection = collections.some(
      (item) => item.id === product.id
    );
    if (isAlreadyInCollection) {
      toast.error(`${product.name} is already in your collections!`);
      return;
    }

    const updatedCollections = [...collections, product];
    setCollections(updatedCollections);
    localStorage.setItem("myCollections", JSON.stringify(updatedCollections));
    toast.success(`${product.name} added to your collections!`);
    setMatchedProduct(null);
  };

  const compareUserFitToProduct = (product) => {
    if (!userFitData) {
      toast.error("Please save your fit data first!");
      return;
    }

    setFitChecks((prev) => ({
      ...prev,
      [product.id]: { isLoading: true, isMatch: null },
    }));

    setTimeout(() => {
      let matchFound = false;
      if (product.sizes[userFitData.size]) {
        const productSize = product.sizes[userFitData.size];
        matchFound =
          Math.abs(
            parseFloat(productSize.neck) - parseFloat(userFitData.neck)
          ) <= 1 &&
          Math.abs(
            parseFloat(productSize.shoulder) - parseFloat(userFitData.shoulder)
          ) <= 1 &&
          Math.abs(
            parseFloat(productSize.chest) - parseFloat(userFitData.chest)
          ) <= 2 &&
          Math.abs(
            parseFloat(productSize.waist) - parseFloat(userFitData.waist)
          ) <= 2 &&
          Math.abs(
            parseFloat(productSize.armLength) -
              parseFloat(userFitData.armLength)
          ) <= 1 &&
          product.fitPreference.includes(userFitData.fitPreference);
      }

      setFitChecks((prev) => ({
        ...prev,
        [product.id]: { isLoading: false, isMatch: matchFound },
      }));

      if (matchFound) {
        setMatchedProduct(product);
        toast.success(`${product.name} matches your fit!`);
      } else {
        toast.error(`Sorry, ${product.name} doesn't match your fit.`);
      }

      // Clear fit check state after 3 seconds
      setTimeout(() => {
        setFitChecks((prev) => ({
          ...prev,
          [product.id]: { isLoading: false, isMatch: null }, // Clear match state
        }));
      }, 3000); // 3 seconds
    }, 3000);
  };

  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="text-gray-800 body-font bg-gray-50">
        <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-7xl text-4xl mb-4 font-bold text-gray-900">
              Discover Your Style with MagicFit
            </h1>
            <p className="mb-8 leading-relaxed text-lg">
              Explore our exclusive collection of ready-made clothing, designed
              to fit perfectly and keep you looking stylish. From casual wear to
              formal attire, we have something for everyone.
            </p>
            <div className="flex justify-center">
              <Link to="/magicFit">
                <Button className="flex gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-md shadow-lg hover:opacity-90 transition">
                  <Shirt />
                  Start Your Journey
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div
              className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ${
                isExiting ? "fade-out" : "fade-in"
              }`}
            >
              <img
                className="object-contain object-center w-full h-full" // Adjust the height as needed
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <h1 className="text-4xl font-bold text-gray-900 text-center py-12">
        Our Popular Collections
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => {
          const { isLoading, isMatch } = fitChecks[product.id] || {
            isLoading: false,
            isMatch: null,
          };
          return (
            <div
              key={product.id}
              className={`relative border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer ${
                isMatch === true
                  ? "border-green-500 border-4"
                  : isMatch === false
                  ? "border-red-500 border-4"
                  : "border-transparent"
              } ${isLoading ? "scanning" : ""}`}
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-300 ease-in-out"
                />
                {isLoading && (
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <span className="text-white text-lg font-bold">
                      Scanning...
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4 bg-white text-center">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 font-bold text-xl">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Available Sizes: {Object.keys(product.sizes).join(", ")}
                </p>
                <div className="mt-4 w-full">
                  <Button size="lg">Add to Cart</Button>
                </div>
              </div>

              {/* MagicFit button */}
              <div className="absolute top-2 right-2">
                <Button
                  className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full p-2 hover:opacity-80"
                  onClick={() => compareUserFitToProduct(product)}
                  disabled={isLoading}
                >
                  {isLoading ? <Loader className="animate-spin" /> : <Shirt />}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <Toaster />

      {/* Dialog for adding matched product to collections */}
      <Dialog
        open={matchedProduct !== null}
        onOpenChange={() => setMatchedProduct(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add to Collections</DialogTitle>
            <DialogDescription>
              {matchedProduct?.name} matches your fit! Would you like to add it
              to your collections?
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={() => setMatchedProduct(null)}>
              Cancel
            </Button>
            <Button onClick={() => addToCollections(matchedProduct)}>
              Add to Collections
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Home;
