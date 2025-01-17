import products from "../../../../data";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/Slices/CartSlice";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function FeaturedProducts() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to your cart!`);
  };

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">Featured Products</h2>
          <Link
            to="/products"
            className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
          >
            <span className="text-sm font-semibold mr-2">View More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
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
                  <Link to={`/product-details/${product.id}`}>
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                  </Link>
                  <Button size="sm" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Toaster />
    </section>
  );
}

export default FeaturedProducts;
