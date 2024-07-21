import { useState, useEffect, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { Shirt } from "lucide-react";
import products from "../../../../data";
import toast, { Toaster } from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { addToCart } from "@/redux/Slices/CartSlice";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Products = () => {
  const [collections, setCollections] = useState(() => {
    const savedCollections = localStorage.getItem("myCollections");
    return savedCollections ? JSON.parse(savedCollections) : [];
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCompareDialog, setShowCompareDialog] = useState(false);
  const [showSizeChart, setShowSizeChart] = useState(false);

  const dispatch = useDispatch();

  // Handles the add to cart functionality
  const handleAddToCart = useCallback(
    (product) => {
      dispatch(addToCart(product));
      toast.success(`${product.name} added to your cart!`);
    },
    [dispatch]
  );

  // Handles the magicFit button click to add
  const handleMagicFitClick = useCallback((product) => {
    setSelectedProduct(product);
    setShowSizeChart(true);
  }, []);

  // Handles the add to collection section
  const addToCollections = useCallback(() => {
    if (!selectedProduct) return;

    const { id, defaultSize, sizes } = selectedProduct;

    const isAlreadyInCollection = collections.some(
      (item) => item.id === id && item.selectedSize.size === defaultSize
    );

    if (isAlreadyInCollection) {
      toast.error(
        `${selectedProduct.name} with size ${defaultSize} is already in your collections!`
      );
      return;
    }

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

    setCollections(updatedCollections);
    localStorage.setItem("myCollections", JSON.stringify(updatedCollections));
    toast.success(`${selectedProduct.name} added to your collections!`);
    setShowSizeChart(false);
  }, [collections, selectedProduct]);

  // Handles the comparison component
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

  const productList = useMemo(
    () =>
      products.map((product) => (
        <div
          key={product.id}
          className="relative border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
        >
          <div className="h-64 overflow-hidden relative">
            <Link to={`/product-details/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain transition-transform duration-300 ease-in-out"
              />
            </Link>
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
            <div className="mt-2">
              <p>Size: {product.defaultSize}</p>
            </div>
            <p className="text-gray-600 font-bold text-3xl">
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

  const compareWithSelected = useCallback(
    (collectionItem) => {
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
        toast.success(
          `Perfect match! ${selectedProduct.name} matches perfectly with ${collectionItem.name}`
        );
      } else {
        toast.error(
          `Not a perfect match. There are some differences in measurements.`
        );
      }
    },
    [selectedProduct]
  );

  return (
    <div>
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
                    onClick={() => compareWithSelected(item)}
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

      <Footer />
    </div>
  );
};

export default Products;
