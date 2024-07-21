import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import NewsletterSignup from "../newsletter/NewsLetter";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8 mb-8">
          {/* Company Info Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold text-white mb-4">
              Company Name
            </h2>
            <p className="mb-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              lacinia odio vitae vestibulum.
            </p>
            <p className="text-gray-500">
              © 2024 Company Name. All rights reserved.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-indigo-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/MagicFit"
                  className="hover:text-indigo-400 transition-colors"
                >
                  MagicFit
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-indigo-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Follow Us
            </h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <NewsletterSignup />
        {/* Attribution Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 MagicFit. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
