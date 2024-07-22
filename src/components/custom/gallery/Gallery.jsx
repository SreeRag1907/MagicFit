import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react"; // Assuming you're using Lucide icons

function Gallery() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-5 py-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 mb-6">
            Explore Our Latest Collections
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover our curated selection of top-notch clothing items and stylish outfits that are sure to elevate your wardrobe.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg">
            <img
              alt="gallery"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 hover:opacity-90"
              src="https://img.freepik.com/free-vector/flat-minimal-boutique-facebook-post_23-2149323789.jpg?w=1060&t=st=1721543721~exp=1721544321~hmac=3347cd5ed5fad439934bf2278d8681cd56e29b23dd5b8e4deab448e38f721275"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white relative z-10 px-4 py-6">
                <h2 className="text-2xl font-semibold mb-2">Featured Collection</h2>
                <p className="mb-4">Explore our most popular items and find your perfect style.</p>
                <Link to="/products" className="inline-flex items-center text-indigo-300 hover:text-indigo-100">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="px-4 w-full sm:w-1/2 lg:w-1/3 mb-8">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-80">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 hover:opacity-90"
                    src="https://m.media-amazon.com/images/I/51gaACg68DL._SY679_.jpg"
                  />
                </div>
                <div className="text-center py-6">
                  <h3 className="text-xl font-semibold text-gray-900">Stylish Summer Picks</h3>
                  <p className="mt-2 text-gray-600">Discover our summer collection with the latest trends in fashion.</p>
                </div>
              </div>
            </div>
            <div className="px-4 w-full sm:w-1/2 lg:w-1/3 mb-8">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-80">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 hover:opacity-90"
                    src="https://m.media-amazon.com/images/I/81EHEXU10bL._SY679_.jpg"
                  />
                </div>
                <div className="text-center py-6">
                  <h3 className="text-xl font-semibold text-gray-900">Elegant Evening Wear</h3>
                  <p className="mt-2 text-gray-600">Find the perfect outfit for your next evening event with our elegant collection.</p>
                </div>
              </div>
            </div>
            <div className="px-4 w-full sm:w-1/2 lg:w-1/3 mb-8">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <div className="relative w-full h-80">
                  <img
                    alt="gallery"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105 hover:opacity-90"
                    src="https://m.media-amazon.com/images/I/610N1pajwKL._SX522_.jpg"
                  />
                </div>
                <div className="text-center py-6">
                  <h3 className="text-xl font-semibold text-gray-900">Casual Daily Wear</h3>
                  <p className="mt-2 text-gray-600">Discover comfortable and stylish outfits for your everyday activities.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-8">
            <Link
              to="/products"
              className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300 text-lg font-semibold"
            >
              <span>View More Collections</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
