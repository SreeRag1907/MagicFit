import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic
    console.log(`Signed up with email: ${email}`);
    setEmail('');
  };

  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-3xl font-bold mb-6 text-black">Subscribe to Our Newsletter</h2>
        <p className="text-gray-700 mb-6">Stay updated with our latest news and special offers.</p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-3 rounded-lg border border-gray-300 w-full md:w-1/2"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
