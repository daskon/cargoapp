import { FaFacebookF, FaTwitter, FaVimeoV, FaBehance, FaPhoneAlt, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";
import truck from "../../assets/trucknews.jpeg"
import container from "../../assets/containers.jpeg"
import airplane from "../../assets/airplane.jpeg"
import cargo from '../../assets/cargohandling.jpg'

export default function Footer() {

    const images = [
        truck,
        container,
        airplane,
        cargo,
    ];

  return (
    <footer className="bg-[#545d73] text-white pt-10">
      {/* Newsletter */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 pb-10 border-b border-gray-500">
        <div>
          <h3 className="text-2xl font-bold">Weekly Newsletter</h3>
          <p className="text-sm text-gray-300 mt-2">Subscribe to get up to date news.</p>
        </div>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter Your Mail"
            className="px-4 py-2 rounded-l-md w-64 text-black bg-white"
          />
          <button className="bg-orange-500 px-5 py-4 rounded font-semibold ml-5 cursor-pointer">SUBSCRIBE</button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h4 className="text-lg font-semibold mb-2">About Us</h4>
          <div className="w-10 h-1 bg-yellow-500 mb-4"></div>
          <p className="text-sm text-gray-300 mb-4">We provide trusted Cargo service to the world.</p>
          <p className="flex items-center gap-2 text-sm text-gray-300 mb-2">
            <FaPhoneAlt /> (+94) 11 434 7575
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-300">
            <FaMapMarkerAlt /> 42 Lily Ave, Colombo 00600
          </p>
        </div>

        {/* Latest News */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Latest News</h4>
          <div className="w-10 h-1 bg-yellow-500 mb-4"></div>
          {[1, 2].map((item) => (
            <div key={item} className="mb-4">
              <p className="flex items-start gap-2 text-sm text-gray-300">
                <FaChevronRight className="mt-1 text-yellow-400" />
                Cargo service avilable in worldwide today.
              </p>
              <p className="text-xs text-gray-400 ml-5 mt-1">5 Minutes Ago</p>
            </div>
          ))}
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Customer Service</h4>
          <div className="w-10 h-1 bg-yellow-500 mb-4"></div>
          {["Support Forums", "Communication", "FAQS", "Privacy Policy", "Rules & Condition", "Contact Us"].map((text, idx) => (
            <p key={idx} className="flex items-center gap-2 text-sm text-gray-300 mb-2">
              <FaChevronRight className="text-yellow-400" /> {text}
            </p>
          ))}
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Customer Service</h4>
          <div className="w-10 h-1 bg-yellow-500 mb-4"></div>
          <div className="grid grid-cols-3 gap-2">
            {images.map((i) => (
              <div key={i} className="w-full h-[60px] bg-gray-300 rounded overflow-hidden">
                <img
                  src={i}
                  alt={`img${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#4b5368] py-4 px-4 flex flex-col md:flex-row justify-between items-center container mx-auto text-sm text-gray-300">
        <p>Copyright © 2024 All Rights Reserved. Site By <span className="font-bold">Xiteb®</span></p>
        <div className="flex items-center gap-3 mt-3 md:mt-0">
          <FaFacebookF />
          <FaVimeoV />
          <FaTwitter />
          <FaBehance />
        </div>
      </div>

      {/* Scroll to Top */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-orange-500 p-3 rounded-sm shadow-lg text-white hover:bg-orange-600 transition">
          ↑
        </button>
      </div>
    </footer>
  );
}