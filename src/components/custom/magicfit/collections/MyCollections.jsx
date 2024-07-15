import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

function MyCollections() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const savedCollections = localStorage.getItem("myCollections");
    if (savedCollections) {
      setCollections(JSON.parse(savedCollections));
    }
  }, []);

  const removeFromCollections = (productId) => {
    const updatedCollections = collections.filter(product => product.id !== productId);
    setCollections(updatedCollections);
    localStorage.setItem("myCollections", JSON.stringify(updatedCollections));
    toast.success("Product removed from collections");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Collections</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
            <div className="h-64 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 bg-white">
              <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 font-bold text-xl">
                ${product.price.toFixed(2)}
              </p>
              <div className="mt-4 flex justify-between items-center">
                <Button size="sm">View Details</Button>
                <Button 
                  size="sm" 
                  variant="destructive"
                  onClick={() => removeFromCollections(product.id)}
                >
                  <X size={16} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {collections.length === 0 && (
        <p className="text-center text-gray-500 mt-8">Your collection is empty.</p>
      )}
      <Toaster />
    </div>
  );
}

export default MyCollections;