import { FaFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  //

  //
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-semibold font-primary">PiXFER</h2>
          <p className="text-white font-primary font-medium">
            The best place to find amazing products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 font-primary">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white font-primary font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-primary font-medium">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-primary font-medium">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white font-primary font-medium">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 font-primary">Follow Us</h3>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300 transition-none duration-100">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-none duration-100">
              <FiInstagram className="text-2xl" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-none duration-100">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-none duration-100">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 font-primary">Newsletter</h3>
          <p className="text-white font-primary mb-4">
            Subscribe to receive updates and offers.
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-dark text-white border border-primary outline-none font-primary font-medium"
            />
            <button className="bg-yellow-500 text-white font-medium font-primary px-4 py-2 rounded-lg  transition duration-200 hover:bg-yellow-600">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-white font-primary font-medium mt-8 border-t border-primary pt-4">
        <p>&copy; {new Date().getFullYear()} PIXFER. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
