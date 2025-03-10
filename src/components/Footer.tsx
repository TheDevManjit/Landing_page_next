import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 px-6 md:px-12 w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">TEACHMARK</h2>
          <p className="text-sm text-gray-400">Empowering Education through Marketing</p>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-6 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition">About Us</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Services</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Careers</a>
          <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaLinkedinIn size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} TEACHMARK. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;