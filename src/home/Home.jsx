import { useState, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import Header from "@/components/custom/header/Header";
import { Button } from "@/components/ui/button";
import { Shirt } from "lucide-react";

import { Link } from "react-router-dom";
import FeaturedProducts from "@/components/custom/featuredProducts/FeaturedProducts";
import Testimonials from "@/components/custom/testimonials/Testimonials";
import Footer from "@/components/custom/footer/Footer";
import Gallery from "@/components/custom/gallery/Gallery";

const Home = () => {
  
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
    }, 3000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  

  return (
    <div>
      <Header />
      <section className="text-gray-800 body-font bg-gray-800">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center py-12">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0 items-center text-center md:text-left">
            <h1 className="title-font sm:text-6xl text-4xl mb-4 font-extrabold text-gray-200">
              Discover Your Style with{" "}
              <span className="text-indigo-600">MagicFit</span>
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-white">
              Explore our exclusive collection of ready-made clothing, designed
              to fit perfectly and keep you looking stylish. From casual wear to
              formal attire, we have something for everyone.
            </p>
            <Link to="/magicFit">
              <Button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-3 rounded-md shadow-lg hover:scale-105 hover:opacity-90 transition-transform transform">
                <Shirt className="w-6 h-6" />
                Start Your Journey
              </Button>
            </Link>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 bg-gray-50 rounded-2xl">
            <div
              className={`relative transition-opacity duration-1000 ${
                isExiting ? "opacity-0" : "opacity-100"
              }`}
            >
              <img
                className="object-contain object-center w-full h-[600px]  transform hover:scale-105 transition-transform duration-500"
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
              />
            </div>
          </div>
        </div>
      </section>
              <FeaturedProducts/>
              <Gallery/>
              <Testimonials/>
              <Footer/>
      {/* <Products/> */}
    </div>
  );
};

export default Home;
