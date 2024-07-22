import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    review: "Fantastic clothing and excellent customer service. I will definitely shop here again!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "High-quality fabrics and stylish designs. This is my go-to store for men’s fashion.",
    rating: 4,
  },
  {
    name: "Mike Johnson",
    review: "Great deals and fast shipping. I highly recommend this store to everyone!",
    rating: 4,
  },
  {
    name: "Alice Brown",
    review: "Wonderful experience and top-notch quality! Their products never disappoint.",
    rating: 5,
  },
  {
    name: "Chris Green",
    review: "Loved the collection and fast delivery! Always a pleasure to shop here.",
    rating: 5,
  },
  {
    name: "Emma White",
    review: "The best place to shop for trendy outfits. Their new arrivals are always exciting.",
    rating: 4,
  },
  {
    name: "James Black",
    review: "Amazing variety and exceptional service. This store truly stands out.",
    rating: 5,
  },
  {
    name: "Laura Red",
    review: "Quick delivery and excellent products. The quality is always superb.",
    rating: 5,
  },
  {
    name: "Samuel Blue",
    review: "My favorite store for men’s fashion. Their styles are always on point.",
    rating: 4,
  },
  {
    name: "Olivia Green",
    review: "Trendy styles and great quality. I always find something I love here.",
    rating: 4,
  },
];

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-10 mb-10">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full flex flex-col justify-between">
                <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <div className="flex justify-center mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15.27L16.18 19l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l5.46 4.73L4.82 19 10 15.27z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
