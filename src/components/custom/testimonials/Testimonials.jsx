
const testimonials = [
  {
    name: "John Doe",
    review: "Fantastic clothing and excellent customer service. Will definitely shop here again!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    review: "High-quality fabrics and stylish designs. My go-to store for men’s fashion.",
    rating: 4,
  },
  {
    name: "Mike Johnson",
    review: "Great deals and fast shipping. Highly recommend!",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-10 mb-10">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-1/3">
              <p className="text-gray-700 mb-4">"{testimonial.review}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <div className="flex justify-center mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15.27L16.18 19l-1.64-7.03L19 7.24l-7.19-.61L10 0 8.19 6.63 1 7.24l5.46 4.73L4.82 19 10 15.27z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
