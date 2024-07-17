import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import Header from "@/components/custom/header/Header";
import { Button } from "@/components/ui/button";
import { Shirt } from "lucide-react";
import products from "../../data";
import toast, { Toaster } from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { addToCart } from "@/redux/Slices/CartSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const [collections, setCollections] = useState(() => {
    const savedCollections = localStorage.getItem("myCollections");
    return savedCollections ? JSON.parse(savedCollections) : [];
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCompareDialog, setShowCompareDialog] = useState(false);
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);


  const dispatch = useDispatch();
  const images = useMemo(
    () => ["img/img1.png", "img/img2.png", "img/img3.png", "img/img4.png"],
    []
  );



  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsExiting(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsExiting(false);
      }, 1000);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [images.length]);


//Handles the add to cart functionality
  const handleAddToCart = useCallback(
    (product) => {
      dispatch(addToCart(product));
      toast.success(`${product.name} added to your cart!`);
    },
    [dispatch]
  );

//Handles the magicFit button click to add
  const handleMagicFitClick = useCallback((product) => {
    setSelectedProduct(product);
    setShowSizeChart(true);
  }, []);


  
//Handles the add to collection section
  const addToCollections = useCallback(() => {
    if (!selectedProduct) return;

    const { id, defaultSize, sizes } = selectedProduct;

    //Checks for the collection 
    const isAlreadyInCollection = collections.some(
      (item) => item.id === id && item.selectedSize.size === defaultSize
    );

    //if theres alredy the same product display the toast
    if (isAlreadyInCollection) {
      toast.error(
        `${selectedProduct.name} with size ${defaultSize} is already in your collections!`
      );
      return;
    }

    //updates the collection

    const updatedCollections = [
      ...collections,
      {
        ...selectedProduct,
        selectedSize: {
          size: defaultSize,
          sizeData: sizes[defaultSize],
        },
      },
    ];

    //sets the collection as the updatesd collection
    setCollections(updatedCollections);
    localStorage.setItem("myCollections", JSON.stringify(updatedCollections));
    toast.success(`${selectedProduct.name} added to your collections!`);
    setShowSizeChart(false);
  }, [collections, selectedProduct]);


//Handles the comparisson component
  const handleCompareClick = useCallback(
    (product) => {
      setSelectedProduct(product);
      if (collections.length > 0) {
        setShowCompareDialog(true);
      } else {
        toast.error("Your collection is empty. Add items to compare.");
      }
    },
    [collections]
  );

  //The product list section
  const productList = useMemo(
    () =>
      products.map((product) => (
        <div
          key={product.id}
          className="relative border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
        >
          <div className="h-64 overflow-hidden relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-300 ease-in-out"
            />
            <div className="absolute top-2 right-2">
              <Button
                className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded-full p-2 hover:opacity-80"
                onClick={() => handleMagicFitClick(product)}
              >
                <Shirt />
              </Button>
            </div>
          </div>
          <div className="p-4 bg-white text-center">
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 font-bold text-xl">
              ${product.price.toFixed(2)}
            </p>
            <div className="mt-4 w-full flex justify-center gap-5">
              <Button size="sm" onClick={() => handleCompareClick(product)}>
                Compare
              </Button>
              <Button size="sm" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      )),
    [handleMagicFitClick, handleCompareClick, handleAddToCart]
  );


  const compareWithSelected = useCallback((collectionItem) => {
    if (!selectedProduct) {
      toast.error("Please select a product to compare first.");
      return;
    }
  
    const selectedSize = selectedProduct.sizes[selectedProduct.defaultSize];
    const collectionSize = collectionItem.selectedSize.sizeData;
  
    const isMatch = 
      selectedSize.neck === collectionSize.neck &&
      selectedSize.shoulder === collectionSize.shoulder &&
      selectedSize.chest === collectionSize.chest &&
      selectedSize.waist === collectionSize.waist &&
      selectedSize.armLength === collectionSize.armLength;
  
    if (isMatch) {
      toast.success(`Perfect match! ${selectedProduct.name} matches perfectly with ${collectionItem.name}`);
    } else {
      toast.error(`Not a perfect match. There are some differences in measurements.`);
    }
  }, [selectedProduct]);


  return (
    <div>
      <Header />
      <section className="text-gray-800 body-font bg-gray-50">
  <div className="container mx-auto flex px-5 md:flex-row flex-col items-center py-12">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0 items-center text-center md:text-left">
      <h1 className="title-font sm:text-6xl text-4xl mb-4 font-extrabold text-gray-900">
        Discover Your Style with <span className="text-indigo-600">MagicFit</span>
      </h1>
      <p className="mb-8 leading-relaxed text-lg text-gray-700">
        Explore our exclusive collection of ready-made clothing, designed to fit perfectly and keep you looking stylish. From casual wear to formal attire, we have something for everyone.
      </p>
      <Link to="/magicFit">
        <Button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-md shadow-lg hover:scale-105 hover:opacity-90 transition-transform transform">
          <Shirt className="w-6 h-6" />
          Start Your Journey
        </Button>
      </Link>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <div className={`relative transition-opacity duration-1000 ${isExiting ? "opacity-0" : "opacity-100"}`}>
        <img className="object-contain object-center w-full h-[600px]  transform hover:scale-105 transition-transform duration-500" src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
    </div>
  </div>
</section>


      <h1 className="text-4xl font-bold text-gray-900 text-center py-12">
        Our Popular Collections
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {productList}
      </div>
      <Toaster />

      <Dialog open={showSizeChart} onOpenChange={() => setShowSizeChart(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedProduct?.name} Size Chart</DialogTitle>
          </DialogHeader>
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Size</th>
                <th className="border border-gray-300 px-4 py-2">Neck</th>
                <th className="border border-gray-300 px-4 py-2">Shoulder</th>
                <th className="border border-gray-300 px-4 py-2">Chest</th>
                <th className="border border-gray-300 px-4 py-2">Waist</th>
                <th className="border border-gray-300 px-4 py-2">Arm Length</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(selectedProduct?.sizes || {}).map(
                ([size, sizeData]) => (
                  <tr
                    key={size}
                    className={
                      size === selectedProduct.defaultSize ? "bg-gray-200" : ""
                    }
                  >
                    <td className="border border-gray-300 px-4 py-2">{size}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      {sizeData.neck}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {sizeData.shoulder}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {sizeData.chest}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {sizeData.waist}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {sizeData.armLength}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={() => setShowSizeChart(false)}>
              Close
            </Button>
            <Button onClick={addToCollections}>Add to MagicFit</Button>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={showCompareDialog}
        onOpenChange={() => setShowCompareDialog(false)}
      >
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Compare Collections</DialogTitle>
          </DialogHeader>
          <div className="flex">
            {/* Left side: Product to compare */}
            <div className="w-1/2 pr-4">
              <h2 className="text-xl font-semibold mb-4">Selected Product</h2>
              {selectedProduct && (
                <div className="border rounded-lg overflow-hidden shadow-lg">
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4 bg-white text-center">
                    <h3 className="text-lg font-semibold mb-2">
                      {selectedProduct.name}
                    </h3>
                    <div className="mt-2">
                      <p> Size: {selectedProduct.defaultSize}</p>
                      <p className="text-sm">
                        Neck:{" "}
                        {
                          selectedProduct.sizes[selectedProduct.defaultSize]
                            .neck
                        }{" "}
                        | Shoulder:{" "}
                        {
                          selectedProduct.sizes[selectedProduct.defaultSize]
                            .shoulder
                        }{" "}
                        | Chest:{" "}
                        {
                          selectedProduct.sizes[selectedProduct.defaultSize]
                            .chest
                        }{" "}
                        | Waist:{" "}
                        {
                          selectedProduct.sizes[selectedProduct.defaultSize]
                            .waist
                        }{" "}
                        | Arm Length:{" "}
                        {
                          selectedProduct.sizes[selectedProduct.defaultSize]
                            .armLength
                        }
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right side: Collection items */}
            <div className="w-1/2 pl-4">
              <h2 className="text-xl font-semibold mb-4">Your Collection</h2>
              <div className="max-h-96 overflow-y-auto cursor-pointer ">
                {collections.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center mb-4 border-b pb-4 hover:border-black hover:border-2 "
                    onClick={()=>compareWithSelected(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-contain mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p>Selected Size: {item.selectedSize?.size || "N/A"}</p>
                      {item.selectedSize?.sizeData && (
                        <p className="text-sm">
                          Neck: {item.selectedSize.sizeData.neck} | Shoulder:{" "}
                          {item.selectedSize.sizeData.shoulder} | Chest:{" "}
                          {item.selectedSize.sizeData.chest} | Waist:{" "}
                          {item.selectedSize.sizeData.waist} | Arm Length:{" "}
                          {item.selectedSize.sizeData.armLength}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
