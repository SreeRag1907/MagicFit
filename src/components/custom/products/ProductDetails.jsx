import { useParams } from "react-router-dom";
import products from "../../../../data"; // Ensure path is correct
import { FaHeart } from "react-icons/fa";
import { useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";
import { addToCart } from "@/redux/Slices/CartSlice";
import { useDispatch } from "react-redux";

const ProductDetails = () => {
    const { id } = useParams();
    const productId = Number(id);
    const product = products.find((prod) => prod.id === productId);

    const dispatch = useDispatch();

    const handleAddToCart = useCallback(
        (product) => {
            dispatch(addToCart(product));
            toast.success(`${product.name} added to your cart!`);
        },
        [dispatch]
    );

    if (!product) return <div className="text-center text-red-500">Product not found</div>;

    return (
        <section className="text-gray-700 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:h-auto h-64 mb-6 lg:mb-0">
                        <img
                            alt={product.name}
                            className="w-full h-full object-cover object-center rounded-lg shadow-lg"
                            src={product.image}
                        />
                    </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">CATEGORY</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                        <p className="leading-relaxed mb-6">{product.description || 'No description available'}</p>
                        
                        <p className="leading-relaxed mb-6">
                            Discover the perfect blend of style and comfort with the {product.name}. 
                            Whether you're dressing up for a casual outing or lounging at home, 
                            this garment promises to elevate your wardrobe with its premium quality and 
                            timeless design.
                        </p>
                        <p className="leading-relaxed mb-6">
                            Crafted with meticulous attention to detail, this product features a [specific 
                            feature] that enhances its durability and aesthetic appeal. The [specific 
                            feature] ensures a perfect fit, making it a versatile addition to your 
                            collection.
                        </p>
                        <p className="leading-relaxed mb-6">
                            Pair it with your favorite jeans or chinos for a relaxed yet sophisticated look. 
                            Ideal for any season, the [product name] offers unmatched versatility and 
                            comfort, making it a staple piece for every fashion enthusiast.
                        </p>

                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                            <div className="flex items-center space-x-2">
                                <span className="mr-3 text-lg font-semibold">Color</span>
                                <button className="border-2 border-gray-300 rounded-full w-6 h-6 bg-gray-700 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="mr-3 text-lg font-semibold">Size</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                        {Object.keys(product.sizes).map(size => (
                                            <option key={size}>{size}</option>
                                        ))}
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                            <button className="flex ml-auto text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded" onClick={() => handleAddToCart(product)}>
                                Add to Cart
                            </button>
                            <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:bg-gray-300">
                                <FaHeart className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex items-center mt-4">
                            <span className="text-sm font-semibold text-gray-600">Fit Preference:</span>
                            <ul className="ml-2 flex space-x-2">
                                {product.fitPreference.map((fit, index) => (
                                    <li key={index} className="bg-gray-200 px-2 py-1 rounded text-sm text-gray-700">{fit}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster />

        </section>
    );
};

export default ProductDetails;
